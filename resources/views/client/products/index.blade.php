@extends('client.layouts.app')
@section('title', 'Home')
@section('style')
    <link rel="stylesheet" href="{{ asset('client/asset/css/HomePage.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/Product-style.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/ProductInfo-style.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/quickview.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/index.css') }}">
    <link rel="stylesheet" href="{{ asset('client/asset/css/slider.css') }}">
@endsection
@section('content')
    <!-- Khung ảnh -->
    <section class="section awe-section-1">
        <div class="section_slider clearfix">
            <div class=" container py-2 ">

                <div class="home-slider slick-initialized slick-slider slick-dotted" role="toolbar"><button
                        type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous"
                        role="button" style="display: block;">Previous</button>

                    <div aria-live="polite" class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2400px;" role="listbox">
                            <div class="items text-center slick-slide" data-color="#ffffff" data-slick-index="0"
                                aria-hidden="true"
                                style="width: 1200px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms linear 0s;"
                                tabindex="-1" role="option" aria-describedby="slick-slide00">
                                <a href="/krush65" title="Krush65" tabindex="-1">
                                    <picture>
                                        <source media="(max-width: 480px)"
                                            srcset="//bizweb.dktcdn.net/thumb/large/100/484/752/themes/920128/assets/slider_1.jpg?1714359361508">
                                        <img class=" img-fluid mx-auto" decoding="async"
                                            src="//bizweb.dktcdn.net/100/484/752/themes/920128/assets/slider_1.jpg?1714359361508"
                                            width="1920" height="775" alt="Krush65">
                                    </picture>
                                </a>
                            </div>
                            <div class="items text-center slick-slide slick-current slick-active" data-color=""
                                data-slick-index="1" aria-hidden="false"
                                style="width: 1200px; position: relative; left: -1200px; top: 0px; z-index: 999; opacity: 1;"
                                tabindex="-1" role="option" aria-describedby="slick-slide01">
                                <a href="/protagonist" title="Protagonist keyboard kit" tabindex="0">
                                    <picture>
                                        <source media="(max-width: 480px)"
                                            srcset="//bizweb.dktcdn.net/thumb/large/100/484/752/themes/920128/assets/slider_2.jpg?1714359361508">
                                        <img class=" img-fluid mx-auto" decoding="async"
                                            src="//bizweb.dktcdn.net/100/484/752/themes/920128/assets/slider_2.jpg?1714359361508"
                                            width="1920" height="775" alt="Protagonist keyboard kit">
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>

                    <button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next"
                        role="button" style="display: block;">Next</button>
                    <ul class="slick-dots" style="display: flex;" role="tablist">
                        <li class="" aria-hidden="true" role="presentation" aria-selected="true"
                            aria-controls="navigation00" id="slick-slide00"><button type="button" data-role="none"
                                role="button" tabindex="0">1</button></li>
                        <li aria-hidden="false" role="presentation" aria-selected="false"
                            aria-controls="navigation01" id="slick-slide01" class="slick-active"><button
                                type="button" data-role="none" role="button" tabindex="0">2</button></li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <!-- KHUNG SP INSTOCK-->
    <section class="section awe-section-4">
        <section class="section_product_top section">
            <div class="container border-0">

                <div
                    class="title_module_main heading-bar e-tabs  d-flex align-items-center flex-wrap heading-style1 justify-content-around">
                    <h2 class="heading-bar__title">{{ $parentCategory->name }}</h2>
                    <ul class="tabs tabs-title list-unstyled  m-0 mt-2 tabs-group d-flex align-items-center">

                        <li class="ega-small tab-link link" data-tab="product_top_1-tab-1">
                            {{ $category->name }}
                        </li>
                    </ul>
                </div>
                <div class="e-tabs">
                    <div class="row mt-3" data-section="tab-section">
                        @foreach($products as $item) 
                            <div class="col-12 col-xl-15 product-col">
                                <div class="item_product_main">
                                    <form action="" method="post" class="variants product-action"
                                        data-id='{{$item->id}}' enctype="multipart/form-data">
                                        <div class="product-thumbnail pos-relative">
                                            <a class="image_thumb pos-relative embed-responsive embed-responsive-1by1"
                                                href="#" title="[In stock] {{$item->name}}">

                                                <img loading="lazy" class="img-fetured" width="480" height="480"
                                                    style="--image-scale: 1;"
                                                    src="{{$item->images->count()>0 ? asset('upload/' . $item->images->first()->url) : 'upload/default.png'}}"
                                                    alt="[In stock] {{$item->name}}">

                                            </a>
                                            <input type="hidden" name="variantId" value="111664258">
                                            <div class="action-bar">
                                                <a href="#"
                                                    class="action-child btn-circle btn-views btn_view btn right-to m-0">
                                                    <img width="20" height="20" class="icon-option"
                                                        src="//bizweb.dktcdn.net/100/484/752/themes/920128/assets/icon-options.png?1714292295296"
                                                        alt="icon-option">
                                                    <span class="action-name">Tùy chọn</span>
                                                </a>

                                                <a href="#" data-handle="in-stock-neo80-case"
                                                    class="action-child xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                                    <i class="fas fa-eye"></i>
                                                    <span class="action-name">Xem nhanh</span>
                                                </a>
                                            </div>

                                        </div>
                                        <div class="product-info">

                                            <span class="product-vendor">{{ $item->manufacturer }}</span>
                                            <span class="product-name "><a class="link" href="#"
                                                    title="{{$item->name}}">{{$item->name}}</a></span>
                                            <div class="product-item-cta position-relative">
                                                <div class="price-box">                                                     
                                                    <span class="price">{{number_format($item->price,0,',','.')}}₫</span>
                                                </div>
                                            </div>

                                            <div class="item-color-chosen">
                                            </div>

                                            <div class="product-promotion hidden">
                                                <span
                                                    class="product-promotion__heading rounded-sm d-inline-flex align-items-center">
                                                    <img alt="Lưu ý"
                                                        src="//bizweb.dktcdn.net/100/484/752/themes/920128/assets/icon-product-promotion.png?1714292295296"
                                                        width="16" height="16" class="mr-2">
                                                    Lưu ý
                                                </span>

                                                <ul>
                                                    <li><span style="color:#c0392b;"><strong>Để có kit hoàn chỉnh
                                                                bạn vui lòng chọn toàn bộ tuỳ chọn ở trong phần
                                                                "Neo80 full kit (in stock)", các đơn hàng không mua
                                                                đầy đủ kit sẽ bị huỷ.</strong></span></li>
                                                    <li><span style="color:#c0392b;"><strong>Do sản phẩm có nhiều
                                                                màu sắc tuỳ chọn bạn vui lòng tham khảo phối màu <a
                                                                    href="https://www.qwertykeys.com/collections/live-sales/products/neo80"
                                                                    target="_blank">tại đây</a></strong></span></li>
                                                    <li><strong><span style="color:#c0392b;">Tiêu chuẩn QC Neo80 vui
                                                                lòng tham khảo</span> <a
                                                                href="https://qwertykeys.notion.site/Acceptable-Quality-Standard-90e3f81eea8140b3bb8f1f32114007be"
                                                                target="_blank">tại đây</a></strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div>
                        {{ $products->links() }}
                    </div>
                </div>
            </div>
        </section>
    </section>

    <!-- XEM NHANH -->

    <div id="quick-view-product" class="quickview-product">
        <div class="quickview-overlay fancybox-overlay fancybox-overlay-fixed"></div>
        <div class="quick-view-product align-verticle">
            <div class="block-quickview primary_block details-product">
                <div class="row">
                    <div class="product-left-column product-images col-xs-12 col-sm-4 col-md-4 col-lg-5 col-xl-6">
                        <div class="image-block large-image col_large_default">
                            <span class="view_full_size">
                                <a class="img-product d-block  pos-relative embed-responsive embed-responsive-1by1"
                                    title="" href="javascript:;">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/484/752/products/mousepad-spy-x-family-anya-edition.jpg"
                                        id="product-featured-image-quickview"
                                        class="img-responsive product-featured-image-quickview" alt="quickview"
                                        style="--image-scale: 1;">
                                </a>
                            </span>
                            <div class="loading-imgquickview" style="display:none;"></div>
                        </div>
                        <div class="more-view-wrapper clearfix">
                            <div class="thumbs_quickview owl_nav_custome1 thumbs_list_quickview"
                                id="thumbs_list_quickview">
                                <ul class="product-photo-thumbs quickview-more-views-owlslider not-thuongdq slick-initialized slick-slider"
                                    id="thumblist_quickview" style="visibility: visible;">
                                    <div aria-live="polite" class="slick-list draggable">
                                        <!-- <div class="slick-track"
                                            style="opacity: 1; width: 220px; transform: translate3d(0px, 0px, 0px);"
                                            role="listbox">
                                            <li class="slick-slide slick-current slick-active" data-slick-index="0"
                                                aria-hidden="false" style="width: 100px;" tabindex="-1" role="option"
                                                aria-describedby="slick-slide10"><a href="javascript:void(0)"
                                                    data-imageid="34508041" "="" data-zoom-image="
                                                    https://bizweb.dktcdn.net/thumb/large/100/484/752/products/mousepad-spy-x-family-anya-edition.jpg"
                                                    title="title" tabindex="0"><img
                                                        src="https://bizweb.dktcdn.net/thumb/large/100/484/752/products/mousepad-spy-x-family-anya-edition.jpg"
                                                        alt="Office World"></a></li>
                                            <li class="slick-slide slick-active" data-slick-index="1"
                                                aria-hidden="false" style="width: 100px;" tabindex="-1" role="option"
                                                aria-describedby="slick-slide11"><a href="javascript:void(0)"
                                                    data-imageid="34508041" "="" data-zoom-image="
                                                    https://bizweb.dktcdn.net/thumb/large/100/484/752/products/anya-mousepad-short-copyright-1707405987103.jpg"
                                                    title="title" tabindex="0"><img
                                                        src="https://bizweb.dktcdn.net/thumb/large/100/484/752/products/anya-mousepad-short-copyright-1707405987103.jpg"
                                                        alt="Office World"></a></li>
                                        </div> -->
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="product-center-column product-info product-item col-xs-12 col-sm-6 col-md-8 col-lg-7 col-xl-6 details-pro style_product style_border"
                        id="product-34508041">
                        <div class="head-qv group-status">
                            <h3 class="qwp-name title-product"><a class="text2line"
                                    href="/order-mousepad-spy-x-family-anya-edition"
                                    title="[Order] Mousepad - Spy x Family (Anya Edition)">[Order] Mousepad - Spy x
                                    Family (Anya Edition)</a></h3>
                            <div class="vend-qv group-status">
                                <div class="left_vend">
                                    <div class="first_status top_vendor d-inline-block">Thương hiệu:
                                        <span class="vendor_ status_name">MONOKEI</span>
                                    </div>
                                    <span class="line_tt">|</span>
                                    <div class="top_sku first_status d-inline-block">Mã sản phẩm:
                                        <span class="sku_ status_name">Đang cập nhật</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-promotion rounded-sm" id="ega-salebox">
                            <h3 class="product-promotion__heading rounded-sm d-inline-flex align-items-center">
                                Lưu ý
                            </h3>
                            <ul>
                                <li><span style="color:#c0392b;"><strong>Để có sản phẩm hoàn chỉnh
                                            bạn vui lòng chọn toàn bộ tuỳ chọn, các đơn hàng không mua
                                            đầy đủ kit sẽ bị huỷ.</strong></span></li>
                                <li><span style="color:#c0392b;"><strong>Do sản phẩm có nhiều
                                            màu sắc tuỳ chọn bạn vui lòng tham khảo phối màu <a
                                                href="https://www.qwertykeys.com/collections/live-sales/products/neo80"
                                                target="_blank">tại đây</a></strong></span></li>
                                <li><strong><span style="color:#c0392b;">Tiêu chuẩn sản phẩm vui
                                            lòng tham khảo</span> <a
                                            href="https://qwertykeys.notion.site/Acceptable-Quality-Standard-90e3f81eea8140b3bb8f1f32114007be"
                                            target="_blank">tại đây</a></strong></li>
                            </ul>
                        </div> 
                        
                        <input type="hidden" id="qv-product-tags"
                            value="[&quot;Accessories&quot;,&quot;MONOKEI&quot;,&quot;Deskmat&quot;,&quot;Live&quot;]">

                        <div class="quickview-info clearfix">
                            <span class="prices price-box">
                                <span class="price product-price sale-price">540.000₫</span>
                                
                            </span>
                        </div>

                        <div class="product-description product-summary">
                            <div class="rte">

                            </div>
                        </div>

                        <form action="/cart/add" method="post" enctype="multipart/form-data"
                            class="quick_option variants form-ajaxtocart form-product" id="product-actions-34508041">
                            <span class="price-product-detail hidden" style="opacity: 0;">
                                <span class=""></span>
                            </span>

                            <div class="form-group form_product_content">
                                <div class="count_btn_style quantity_wanted_p">
                                    <div class="custom input_number_product soluong1">
                                        <button class="btn_num btn num_1 button button_qty"
                                            onclick="var result = document.getElementById('quantity-detail'); var qtyqv = result.value; if( !isNaN( qtyqv ) &amp;&amp; qtyqv > 1 ) result.value--;return false;">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                style="width: 11.2px;">
                                                <path fill="#b0b0b0"
                                                    d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-detail" name="quantity" value="1" maxlength="2"
                                            class="form-control prd_quantity"
                                            onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                            onchange="if(this.value == 0)this.value=1;">
                                        <button class="btn_num  btn num_2 button button_qty"
                                            onclick="var result = document.getElementById('quantity-detail'); var qtyqv = result.value; if( !isNaN( qtyqv )) result.value++;return false;">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                style="width: 11.2px;">
                                                <path fill="#b0b0b0"
                                                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="button_actions clearfix mb-0">
                                        <button type="submit"
                                            class="btn_cool btn fix_add_to_cart ajax_addtocart btn_add_cart btn-cart add_to_cart_detail">
                                            THÊM VÀO GIỎ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="id" value="34508041"><input type="hidden" name="variantId"
                                value="109510972">
                        </form>

                    </div>
                </div>
            </div>
            <a title="Close" class="quickview-close close-window" href="javascript:;"><i class="fas fa-times"></i></a>
        </div>
    </div>


@endsection

@section('script')
@endsection