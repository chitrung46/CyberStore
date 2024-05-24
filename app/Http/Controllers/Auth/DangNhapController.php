<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DangNhapController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    // Xử lý đăng nhập
    public function login(Request $request)
    {
        // Validate dữ liệu đầu vào
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Lấy thông tin đăng nhập
        $credentials = $request->only('email', 'password');

        // Danh sách email của admin
        $adminEmails = [
            '5220001411@student.tdtu.edu.vn'  // Thay thế bằng email của admin thực sự
           
        ];

        // Thực hiện đăng nhập
        if (Auth::attempt($credentials)) {
            // Kiểm tra nếu email là của admin
            if (in_array($request->email, $adminEmails)) {
                // Nếu là admin, chuyển hướng đến trang dashboard
                return redirect()->intended('dashboard');
            } else {
                // Nếu không phải admin, chuyển hướng đến trang chủ
                return redirect()->intended('home');
            }
        }

        // Nếu đăng nhập thất bại, quay lại trang đăng nhập với thông báo lỗi
        return redirect()->back()->withErrors([
            'email' => 'Thông tin đăng nhập không đúng.',
        ]);
    }
    // Xử lý đăng xuất
    public function logout(Request $request)
    {
        // Clear the session data
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Redirect to the desired page
        return redirect('home');
    }
}
