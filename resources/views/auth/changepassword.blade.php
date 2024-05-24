<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Password</title>
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

        h2 {
            text-align: center;
            margin-bottom: 15px;
        }

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

        input[type="password"]:focus {
            border: 3px solid #47ada5;
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

        button:hover {
            opacity: 0.9;
        }

        .text-danger {
            color: #B92626;
        }

    </style>
</head>
<body>
    <div class="container">
    <h2>Change Password</h2>
    <div class="welcome">
        Secure your account by changing your password
    </div>
    
    <form method="POST" action="{{ route('change_password.update') }}">
        @csrf

       
        <div>
            <label for="new_password"></label>
            <input type="password" id="new_password" name="new_password" placeholder="New Password" 
            class="form-control" required>
            @error('new_password')
            <span class="text-danger"> {{ $message }} </span>
            @enderror
        </div>
        <div>
            <label for="confirm_password"></label>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm New Password" 
            class="form-control" required>
            @error('confirm_password')
            <span class="text-danger"> {{ $message }} </span>
            @enderror
        </div>
        <button type="submit">Change Password</button>
    </form>
</div>
</body>
</html>
