<header class="header">

    <div class="container">
        <div class="sidebar" id="sidebar">
            <!-- <div class="user">

            </div> -->

            <div class="wrap-sidebar">
                <nav class="sidebar-nav">
                    <ul class="sidebar-item">
                        <li><a class="sidebar-link" href="HomePage.html">Trang chủ</a></li>
                        <li><a class="sidebar-link" href="">Giới thiệu</a></li>
                        <li><a class="sidebar-link" href="">Sản phẩm</a></li>
                        <li><a class="sidebar-link" href="">Liên hệ</a></li>
                        <li><a class="sidebar-link" href="">Đăng ký</a></li>
                        <li><a class="sidebar-link" href="">Đăng nhập</a></li>
                    </ul>
                </nav>
            </div>

        </div>
        <div class="sidebar-overlay" id="sidebar-overlay" onclick="hideSidebar()"></div>


        <nav class="header__navbar">

            <div class="menu-bar">
                <a href="#" onclick="event.preventDefault(); ">
                    <i class="fa-solid fa-bars large-icon" id="sidebar-toggle" onclick="opensidebar()"></i>
                </a>

            </div>

            <div class="header__navbar-left ">
                <a href="" id="logo"> <img src=".\\img\LogoCyBer1.png" alt="CyberStore.vn"></a>
                <h3 class="header__logo">CyBer<br>StoRe</h3>
                <!-- /* Đổi kiểu cho LOGO*/ -->
            </div>

            <div class="header__navbar-center ">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="./HomePage.html">Trang chủ</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Group Buy</a>
                        <ul class="sub-menu gropuBuy">
                            <li><a href="">Live GB</a></li>
                            <li><a href="">Ended GB</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Instock</a>
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
                        <a class="nav-link" href="#">Hướng dẫn sử dụng</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Liên hệ</a>
                    </li>
                </ul>

            </div>

            <div class="header__navbar-right ">
                <ul class="nav ">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                    <li class="nav-item user-cart">
                        <a class="nav-link" href="#">
                            <i class="fa-regular fa-user " style=" padding-top: 1px"></i>
                        </a>
                    </li>

                    <li class="nav-item shopping__cart">

                        <a class="nav-link" href="{{ route('client.cart.index') }}">
                            <img src=".\\img\shopping.svg " alt="Giỏ hàng">
                            <span class="shopping__cart-notice" id="num-products">3</span>
                        </a>

                        <div class="shopping__cart-list ">
                            <div class="shopping__cart-list--no-cart">
                                <img src=".\\img\empty-cart.svg" alt=""
                                    class="shopping__cart-list--no-cart-img">
                                <p class="shopping__cart-list--no-cart-msg">Hổng cóa sản phẩm :<<< </p>
                            </div>

                            <h4 class="shopping__cart-heading">Sản phẩm đã thêm</h4>
                            <ul class="shopping__cart-list-item">
                                <li class="shopping__cart-item">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/484/752/products/mousepad-spy-x-family-anya-edition.jpg?v=1707409571893"
                                        alt="" class="shopping__cart-img">
                                    <div class="shopping__cart-item-info">
                                        <div class="shopping__cart-item-head">
                                            <h5 class="shopping__cart-item-name">Mousepad siu cuti</h5>
                                            <div class="shopping__cart-item-price-wrap">
                                                <span class="shopping__cart-item-price">500.000đ</span>
                                                <span class="shopping__cart-item-multiply">x</span>
                                                <span class="shopping__cart-item-qnt">2</span>
                                            </div>
                                        </div>

                                        <div class="shopping__cart-item-body">
                                            <span class="shopping__cart-item-description">
                                                Phân loại: Mousepad
                                            </span>
                                            <span class="shopping__cart-item-remove">Xóa</span>
                                        </div>
                                    </div>
                                </li>

                                <li class="shopping__cart-item">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/484/752/products/mousepad-spy-x-family-anya-edition.jpg?v=1707409571893"
                                        alt="" class="shopping__cart-img">
                                    <div class="shopping__cart-item-info">
                                        <div class="shopping__cart-item-head">
                                            <h5 class="shopping__cart-item-name">Mousepad siu cuti</h5>
                                            <div class="shopping__cart-item-price-wrap">
                                                <span class="shopping__cart-item-price">500.000đ</span>
                                                <span class="shopping__cart-item-multiply">x</span>
                                                <span class="shopping__cart-item-qnt">2</span>
                                            </div>
                                        </div>

                                        <div class="shopping__cart-item-body">
                                            <span class="shopping__cart-item-description">
                                                Phân loại: Mousepad
                                            </span>
                                            <span class="shopping__cart-item-remove">Xóa</span>
                                        </div>
                                    </div>
                                </li>

                                <li class="shopping__cart-item">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/484/752/products/mousepad-spy-x-family-anya-edition.jpg?v=1707409571893"
                                        alt="" class="shopping__cart-img">
                                    <div class="shopping__cart-item-info">
                                        <div class="shopping__cart-item-head">
                                            <h5 class="shopping__cart-item-name">Mousepad siu cuti</h5>
                                            <div class="shopping__cart-item-price-wrap">
                                                <span class="shopping__cart-item-price">500.000đ</span>
                                                <span class="shopping__cart-item-multiply">x</span>
                                                <span class="shopping__cart-item-qnt">2</span>
                                            </div>
                                        </div>

                                        <div class="shopping__cart-item-body">
                                            <span class="shopping__cart-item-description">
                                                Phân loại: Mousepad
                                            </span>
                                            <span class="shopping__cart-item-remove">Xóa</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
