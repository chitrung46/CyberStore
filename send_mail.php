<?php

// Sử dụng thư viện PHPMailer (tải về từ https://github.com/PHPMailer/PHPMailer)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Thông tin người nhận
$to = 'laithanh1000@gmail.com';
$subject = 'RESET PASSWORD';

// Đọc nội dung HTML từ file
$html_content = file_get_contents('index.html');

// Khởi tạo PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 0;
    $mail->Mailer = "smtp";
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'huyduong11082004@gmail.com'; // Your email
    $mail->Password = 'lcex wniz uqcx emli'; // Your email password      
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;




    // Cấu hình SMTP
    // $mail->isSMTP();
    // $mail->Host = 'smtp.gmail.com'; // SMTP server
    // $mail->SMTPAuth = true;
    // $mail->Username = 'hatrongnguyen04@gmail.com'; // Your email
    // $mail->Password = 'qxeg pcjt iset quot'; // Your email password
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use STARTTLS encryption
    // $mail->Port = 587; // Port for TLS/STARTTLS

    $mail->setFrom('huyduong11082004@gmail.com', 'Cyber Key Store');
    $mail->addAddress($to);

    // Nội dung email
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $html_content;

    // Gửi email
    $mail->send();

    echo 'Email đã được gửi đi';
    
} catch (Exception $e) {
    echo "Lỗi, email chưa thể gửi đi: {$mail->ErrorInfo}";
}
