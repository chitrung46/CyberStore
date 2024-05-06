<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Cyber Store')</title>
</head>
<body>
    <!-- Topbar Start -->
    @include('client.layouts.topbar')
    <!-- Topbar End -->


    <!-- Navbar Start -->
    @include('client.layouts.navbar')
    <!-- Navbar End -->

    @yield('content')

    <!-- Footer Start -->
    @include('client.layouts.footer')
    <!-- Footer End -->

    <!-- JavaScript Libraries -->
    @include('client.layouts.javascript')
</body>
</html>