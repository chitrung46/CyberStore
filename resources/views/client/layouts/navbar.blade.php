<nav class="header__navbar">

    <div class="menu-bar">
        <a href="#" onclick="event.preventDefault(); ">
            <i class="fa-solid fa-bars large-icon" id="sidebar-toggle" onclick="opensidebar()"></i>
        </a>
    </div>

    <div class="header__navbar-left ">
        <a href="" id="logo"> <img src="{{ asset('client/asset/img/LogoCyBer1.png') }}" alt="CyberStore.vn"></a>
        <h3 class="header__logo">CyBer<br>StoRe</h3>
    </div>

    <div class="header__navbar-center ">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="{{ route('home.index') }}">Trang chủ</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link" href="#">Group Buy</a>

            </li>

            <li class="nav-item dropdown">
                <a class="nav-link" href="#">Instock <i class="fa-solid fa-angle-down" style="margin-left: 10px;"></i></a>
                <ul class="sub-menu instock">
                    <li><a href="">Bàn phím cơ</a></li>
                    <li><a href="">Keycap</a></li>
                    <li><a href="">Công tắc bàn phím cơ</a></li>
                    <li><a href="">Thanh cân bằng - Stabilizers</a></li>
                    <li>
                        <a href="">Phụ kiện bàn phím cơ</a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
            </li>
        </ul>

    </div>

    <div class="header__navbar-right ">
        <ul class="nav ">
            <li class="nav-item">
                <div class="nav-link search" id="searchIcon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </li>
            <li class="nav-item user-cart">
                <div class="nav-link ">
                    <i class="fa-regular fa-user " style=" padding-top: 1px"></i>
                </div>
                <div class="account-action">
                    <a href="{{ route('dangnhap')}}" title="Đăng nhập">Đăng nhập</a>
                    <a href="{{route('dangky')}}" title="Đăng ký">Đăng ký</a>
                </div>
            </li>

            <li class="nav-item shopping__cart">

                <a class="nav-link" href="{{ route('cart.index') }}">
                    <img src="{{ asset('client/asset/img/shopping.svg') }}" alt="Giỏ hàng">
                    <span class="shopping__cart-notice" id="num-products">0</span>
                </a>

                <div class="shopping__cart-list ">
                </div>
            </li>
            <div>
                <form id="logout-form" action="{{ route('dangxuat') }}" method="POST" style="border: none;" >
                    @csrf
                    <button type="submit" style="border: none;background-color: #fff;" >
                        <i class="fa fa-sign-out"></i>
                    </button>
                </form>
            </div>

        </ul>

    </div>

</nav>