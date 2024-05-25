<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Session;
use PHPMailer\PHPMailer\PHPMailer;
use Symfony\Component\Mime\Email;

class QuenMatKhauController extends Controller
{
    protected $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function showLinkRequestForm()
    {

        return view('auth.forgetpassword');
    }

    public function showLoginPincodeForm()
    {
        return view('auth.pincodelogin');
    }

    public function showChangePasswordForm()
    {
        return view('auth.changepassword');
    }
    public function capNhatMatKhau(Request $request)
    {
        $dataUpdate = $request->all();

        if ($request->new_password != $request->confirm_password) {
            return redirect()->back()->withErrors(['new_password' => 'Mật khẩu không trùng khớp']);
        }
        $email=session('email');
        $user = User::where('email', $email)->first();
        $dataUpdate['password'] = Hash::make($request->new_password);
        $user->update($dataUpdate);
        session()->forget($email);
        return redirect()->route('dangnhap');
    }

    public function checkPinCode(Request $request)
    {

        $email = session('email');

        $user = User::where('email', $email)->first();
        $carbonDate = Carbon::createFromFormat('Y-m-d H:i:s', $user->pin_code_expires_at);
        if ($user->pin_code == $request->pincode) {
            if ($carbonDate->diffInMinutes(Carbon::now()) < 2) {

                return redirect()->route('change_password.request');
            } else {
                return redirect()->route('pincodelogin.request')->withErrors(['pincode' => 'Mã pin đã hết hạn']);
            }
        } else {
            return redirect()->route('pincodelogin.request')->withErrors(['pincode' => 'Mã pin không chính xác']);
        }
    }

    /**
     * Send a reset link to the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function sendResetLinkEmail(Request $request)
    {
        $to = $request->email;

        // Generate pin_code
        $pin_code = mt_rand(100000, 999999);
        $pin_code_expires_at = Carbon::now()->addMinutes(2);

        // Find user by email
        $user = User::where('email', $to)->first();

        if ($user) {
            // Update user's pin_code and expiration time
            $user->pin_code = $pin_code;
            $user->pin_code_expires_at = $pin_code_expires_at;
            $user->save();

            // Prepare email content with the pin_code
            $html_content = view('auth.index', ['pin_code' => $pin_code])->render();

            // Send email using PHPMailer
            $mail = new PHPMailer(true);

            try {
                $mail->SMTPDebug = 0;
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'huyduong11082004@gmail.com'; // Your Gmail account
                $mail->Password = 'lcex wniz uqcx emli'; // Your Gmail password
                $mail->SMTPSecure = 'tls';
                $mail->Port = 587;

                $mail->setFrom('huyduong11082004@gmail.com', 'CyberStore');
                $mail->addAddress($to);

                // Email content
                $mail->isHTML(true);
                $mail->Subject = 'RESET PASSWORD';
                $mail->Body = $html_content;

                // Send email
                $mail->send();
                Session::put('email', $to);
                return redirect()->route('pincode-login');
            } catch (Exception $e) {
                return redirect('/forgot-password')->withErrors(['email' => 'Unable to send reset pin_code. Please try again later.']);
            }
        } else {
            return redirect('/forgot-password')->withErrors(['email' => 'Email not found.']);
        }
    }
}
