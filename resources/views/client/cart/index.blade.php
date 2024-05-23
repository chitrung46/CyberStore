@extends('client.layouts.app')
@section('title', 'Home')
@section('style')
    <link rel="stylesheet" href="{{ asset('client/asset/css/HomePage.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/Product-style.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/ProductInfo-style.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/quickview.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/index.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/cartPage.css') }}">
@endsection
@section('content')

<section class="bread-crumb mb-3">
        <span class="crumb-border"></span>
        <div class="container ">
            <div class="row">
                <div class="col-12 a-left">
                    <ul class="breadcrumb m-0 px-0 py-2">
                        <li class="home">
                            <a href="/" class="link"><span>Trang chủ</span></a>
                            <span class="mr_lr">&nbsp;/&nbsp;</span>
                        </li>

                        <li><strong><span>Giỏ hàng</span></strong></li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div class="cart-coupon my-4">
        <div class="cart-coupon-header">
            <span class="coupon-toggle-btn">
                <i class="fa fa-arrow-left "> </i>
            </span>
            <span>Mã giảm giá</span>
        </div>
        <link rel="preload" as="style" type="text/css"
            href="//bizweb.dktcdn.net/100/484/752/themes/920128/assets/coupon.css?1714359361508">

        <link rel="stylesheet" href="//bizweb.dktcdn.net/100/484/752/themes/920128/assets/coupon.css?1714359361508">


        <div class="section_coupons">
            <div class="container">
                <div class="row scroll justify-content-xl-center">

                </div>
            </div>
        </div>


        <div class="cart-coupon-footer ">
            <button class="btn btn-main btn-block rounded-sm coupon-toggle-btn">
                Quay lại trang giỏ hàng
            </button>
        </div>
    </div>

    <div class="cart-coupon-overlay coupon-toggle-btn"></div>
    <div id="tab-header"></div>

    <!-- <section class="main-cart-page main-container col1-layout mobile-tab active" id="cart-tab" data-title="Giỏ hàng">
        <div class="wrap_background_aside padding-top-15 margin-bottom-40 padding-left-0 padding-right-0 cartmbstyle">
            <div class="cart-mobile container card border-0 py-2">
                <form action="/cart" method="post" novalidate="" class="margin-bottom-0">
                    <div class="header-cart">
                    </div>


                    <div class="header-cart-content"></div>
                </form>
            </div>
            <div class="cart-empty container card border-0 py-2 ">
                <div class="alert green-alert section" role="alert">
                    <div class="title-cart text-center">
                        <h1 class="d-none">Giỏ hàng</h1>
                        <div>

                            <img src="./img\empty-cart.svg" class="img-fluid" width="298" height="152">
                        </div>
                        <h3>
                            “Hổng” có gì trong giỏ hết
                        </h3>
                        <p> Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
                        <a href=".\HomePage.html" title="Mua sắm ngay" class="btn btn-main">Mua sắm ngay</a>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <section class="main-cart-page main-container col1-layout mobile-tab active" id="cart-tab" data-title="Giỏ hàng">
        <div class="wrap_background_aside padding-top-15 margin-bottom-40 padding-left-0 padding-right-0 cartmbstyle">
            <div class="cart-mobile container card border-0 py-2">
                <form action="/cart" method="post" novalidate="" class="margin-bottom-0">
                    <div class="header-cart">
                        <div class=" title_cart_mobile heading-bar">
                            <h1 class="heading-bar__title text-left">Giỏ hàng</h1>
                        </div>
                    </div>

                    <div class="header-cart-content">
                        <div class="cart_page_mobile content-product-list">
                            <div class="item-product item productid-113007537 ">
                                <div class="text-center">
                                    <a class="remove-itemx remove-item-cart " title="Xóa" href="javascript:;"
                                        data-id="113007537">
                                        <svg class="icon" viewBox="0 0 12 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path
                                                    d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563681 11.5778 -0.0563681 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z"
                                                    fill="#8C9196"></path>
                                                <path
                                                    d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563681 0.8128 -0.0563681 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816706 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z"
                                                    fill="#8C9196"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="12" height="12" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                                <div class="item-product-cart-mobile">
                                    <a href="/gb-protagonist-case">
                                    </a><a class="product-images1  pos-relative embed-responsive embed-responsive-1by1"
                                        href="" title="[GB] Protagonist Case">
                                        <img class="img-fluid"
                                            src="https://bizweb.dktcdn.net/thumb/compact/100/484/752/products/caseblack1711377794255.jpg"
                                            alt="[GB] Protagonist Case">
                                    </a>

                                </div>
                                <div class="product-cart-infor">
                                    <div class="title-product-cart-mobile">
                                        <h3 class="product-name"> <a class="text2line link" href="/gb-protagonist-case"
                                                title="[GB] Protagonist Case">
                                                [GB] Protagonist Case</a> </h3>
                                        <span class="variant-title">Black</span>
                                    </div>

                                    <div class="cart-price">
                                        <span class="product-price price">2.500.000₫</span>
                                    </div>
                                    <div class="select-item-qty-mobile">
                                        <div class="txt_center">
                                            <input class="variantID" type="hidden" name="variantId" value="113007537">
                                            <button
                                                onclick="var result = document.getElementById('qtyMobile113007537'); var qtyMobile113007537 = result.value; if( !isNaN( qtyMobile113007537 ) &amp;&amp; qtyMobile113007537 > 1 ) result.value--;return false;"
                                                class="reduced items-count btn-minus btn" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 11.2px;"><path fill="#b0b0b0" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                                            </button>
                                            <input type="text" maxlength="3" min="1"
                                                class="form-control input-text number-sidebar qtyMobile113007537"
                                                id="qtyMobile113007537" name="Lines" size="4" value="1">
                                            <button
                                                onclick="var result = document.getElementById('qtyMobile113007537'); var qtyMobile113007537 = result.value; if( !isNaN( qtyMobile113007537 )) result.value++;return false;"
                                                class="increase items-count btn-plus btn" type="button"
                                                style="pointer-events: auto;">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 11.2px;"><path fill="#b0b0b0" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item-product item productid-116241384 ">
                                <div class="text-center">
                                    <a class="remove-itemx remove-item-cart " title="Xóa" href="javascript:;"
                                        data-id="116241384">
                                        <svg class="icon" viewBox="0 0 12 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path
                                                    d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563681 11.5778 -0.0563681 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z"
                                                    fill="#8C9196"></path>
                                                <path
                                                    d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563681 0.8128 -0.0563681 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816706 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z"
                                                    fill="#8C9196"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="12" height="12" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                                <div class="item-product-cart-mobile">
                                    <a href="/bridge75-keyboard">
                                    </a><a class="product-images1  pos-relative embed-responsive embed-responsive-1by1"
                                        href="" title="[Pre-order] Bridge75 Bàn phím cơ nhôm gaming 3 mode">
                                        <img class="img-fluid"
                                            src="https://bizweb.dktcdn.net/thumb/compact/100/484/752/products/bridge75-silver-no-rgb-1714960883959.jpg"
                                            alt="[Pre-order] Bridge75 Bàn phím cơ nhôm gaming 3 mode">
                                    </a>

                                </div>
                                <div class="product-cart-infor">
                                    <div class="title-product-cart-mobile">
                                        <h3 class="product-name"> <a class="text2line link" href="/bridge75-keyboard"
                                                title="[Pre-order] Bridge75 Bàn phím cơ nhôm gaming 3 mode">
                                                [Pre-order] Bridge75 Bàn phím cơ nhôm gaming 3 mode</a> </h3>
                                        <span class="variant-title">Bridge75 / Silver (Anode)</span>
                                    </div>

                                    <div class="cart-price">
                                        <span class="product-price price">1.650.000₫</span>
                                    </div>
                                    <div class="select-item-qty-mobile">
                                        <div class="txt_center">
                                            <input class="variantID" type="hidden" name="variantId" value="116241384">
                                            <button
                                                onclick="var result = document.getElementById('qtyMobile116241384'); var qtyMobile116241384 = result.value; if( !isNaN( qtyMobile116241384 ) &amp;&amp; qtyMobile116241384 > 1 ) result.value--;return false;"
                                                class="reduced items-count btn-minus btn" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 11.2px;"><path fill="#b0b0b0" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                                            </button>
                                            <input type="text" maxlength="3" min="1"
                                                class="form-control input-text number-sidebar qtyMobile116241384"
                                                id="qtyMobile116241384" name="Lines" size="4" value="1">
                                            <button
                                                onclick="var result = document.getElementById('qtyMobile116241384'); var qtyMobile116241384 = result.value; if( !isNaN( qtyMobile116241384 )) result.value++;return false;"
                                                class="increase items-count btn-plus btn" type="button"
                                                style="pointer-events: auto;">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 11.2px;"><path fill="#b0b0b0" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header-cart-price">
                            <div class="timedeli-modal">
                                <div class="timedeli-modal-content">
                                    <button type="button" class="close window-close d-sm-none" aria-label="Close"
                                        style="z-index: 9;"><span aria-hidden="true">×</span></button>
                                    <div class="timedeli d-sm-block"></div>
                                    <div class="timedeli-cta">
                                        <button class="btn btn-block timedeli-btn  d-sm-none" type="button">
                                            <span>Xong</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="timedeli-overaly"></div>
                            </div>


                            <div class="title-cart d-none d-sm-flex ">
                                <h3 class="text-xs-left">TỔNG CỘNG</h3>
                                <span class="text-xs-right  totals_price_mobile">4.150.000₫</span>
                            </div>


                            <div class="checkout mt-2">
                                <button class="btn btn-block btn-proceed-checkout-mobile" title="Tiến hành thanh toán"
                                    type="button" onclick="location.href='/ShippingInfo.html';">
                                    <span>Thanh Toán</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <div class="cart-empty container card border-0 py-2 " style="display:none">
                <div class="alert green-alert section" role="alert">
                    <div class="title-cart text-center">
                        <h1 class="d-none">Giỏ hàng</h1>
                        <div>
                            <img src="//bizweb.dktcdn.net/100/484/752/themes/920128/assets/cart_empty_background.png?1715161083487"
                                class="img-fluid" width="298" height="152">
                        </div>
                        <h3>
                            “Hổng” có gì trong giỏ hết
                        </h3>
                        <p> Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
                        <a href="/collections/all" title="Mua sắm ngay" class="btn btn-main">Mua sắm ngay</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('script')
<script src="{{ asset('client/asset/js/cart.js') }}"></script>
    <script>
        $('.remove-itemx').click(function() {
            $(this).closest('.item-product').removeClass('item-product');
        });
    </script> 
@endsection