<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Cyber Store')</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @yield('style')
</head>
<body>
    <!-- Topbar Start -->
    @include('client.layouts.topbar')
    <!-- Topbar End -->

    <header class="header">
        <div class="container">
            <!-- Sidebar Start -->
            @include('client.layouts.sidebar')
            <!-- Sidebar End -->

            <!-- Navbar Start -->
            @include('client.layouts.navbar')
            <!-- Navbar End -->
        </div>
    </header>

    <!-- Search Start -->
    @include('client.layouts.search')
    <!-- Search End -->

    @yield('content')

    <!-- Footer Start -->
    @include('client.layouts.footer')
    <!-- Footer End -->

    <!-- JavaScript Libraries -->
    @include('client.layouts.javascript')
</body>
</html>