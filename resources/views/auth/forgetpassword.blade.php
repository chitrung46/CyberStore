<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" media="all">

    <style>
        body {
            font-family: sans-serif;
            background-color: #acb9b7;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 400px;
        }

        .welcome {
            text-align: center;
            width: 100%;
            color: #777;
            font-style: italic;
            padding-bottom: 30px;
        }

        a {
            color: #16514c;
            text-decoration: none;
        }

        h2 {
            text-align: center;
            margin-bottom: 15px;
        }

        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            border: 2px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 16px;
            outline: none;
        }

        input[type="email"]:focus,
        input[type="password"]:focus {
            border: 3px solid #47ada5;
        }

        input[type="password"] {
            position: relative;
        }

        .password-toggle {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            cursor: pointer;
        }

        button {
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            background-color: #267871;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover,
        a {
            opacity: 0.9;
        }

        .forgot-password {
            text-align: center;
            margin: 10px 0;
        }

        .social-login {
            text-align: center;
            margin-top: 20px;
        }

        .social-login button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f2f2f2;
            border: 1px solid #ddd;
            color: #333;
        }

        .social-login button i {
            margin-right: 10px;
            font-size: 20px;
        }

        .signup-link {
            text-align: center;
            margin-top: 20px;
        }

        .fa-google {
            background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        .word-line {
            position: relative;
            display: inline-block;
            padding-bottom: 10px;
        }

        .word-line::before,
        .word-line::after {
            content: '________________';
            position: absolute;
            transform: translateY(-50%);
            /* color: transparent; Hides the underscores */
        }

        .word-line::before {
            right: 110%;
        }

        .word-line::after {
            left: 110%;
        }

        .text-danger {
            color: #B92626;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Forgot Password </h2>
        <div class="welcome">
            Welcome to Cyber Store, the world of Keyboard
        </div>

        <form method="POST" action="{{ route('password.email')}}">
            @csrf
            <div>
                <label for="email"></label>
                <input type="email" id="email" name="email" placeholder="Email" value="{{ old('email') }}" class="form-control" required autofocus>
                @error('email')
                <span class="text-danger"> {{ $message }} </span>
                @enderror
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</body>

</html>