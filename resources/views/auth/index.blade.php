<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8" />
    <title>Email Đặt Lại Mật Khẩu</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .email-container {
            background-color: #ffffff;
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: #007bff;
            color: #ffffff;
            padding: 10px;
            text-align: center;
        }

        .content {
            padding: 20px;
            line-height: 1.5;
        }

        .footer {
            background-color: #eeeeee;
            padding: 10px;
            text-align: center;
            font-size: 12px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <h1>Đặt Lại Mật Khẩu </h1>
        </div>
        <div class="content">
            <p>Xin chào,</p>
            <p>
                Bạn vừa yêu cầu đặt lại mật khẩu cho tài khoản của mình. Vui
                lòng sử dụng mã PIN dưới đây để đặt lại mật khẩu của bạn:
            </p>
            <p style="text-align: center; font-size: 24px; font-weight: bold;">
                {{ $pin_code }}
            </p>
            <p>
                Mã PIN này sẽ hết hạn sau 2 phút.
            </p>
            <p>
                Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua
                email này.
            </p>
        </div>
        <div class="footer">
            <p>Trân trọng,</p>
            <p>© 2024  CyberStore - All rights reserved.</p>
        </div>
    </div>

</body>

</html>
