function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

                  function onQtyChange(){
    let qty = parseInt($('.pd-qtym').val())
    let variantId = parseInt($('#product-selectors').val()) || parseInt($('.details-product [name="variantId"]').val())
    let validQty = validateQty(currentProduct,variantId, qty)
    validQty && $('.pd-qtym').val(validQty)
}
function onQtyCRChange(){
let qty = parseInt($('.cr-qty-input').val())
console.log(qty)
let variantId = window.EGACRAddonSettings.variantId
let validQty = validateQty(currentProduct,variantId, qty)
if(validQty){
    window.EGACRAddon.updateQty(validQty)
}
}
var selectCallback = function (variant, selector) {
if (variant) {
    var form = jQuery('#' + selector.domIdPrefix).closest('form');

    for (var i = 0, length = variant.options.length; i < length; i++) {

        var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] + '"]');
     var valueText = form.find('.swatch[data-option-index="' + i + '"] .swatch-value').text(variant.options[i])
        if (radioButton.size()) {
            radioButton.get(0).checked = true;
        }
    }
}
var addToCart = jQuery('.form-product .add_to_cart'),
    buyNow = jQuery('.form-product .buynow'),
    group = jQuery('.form_product_content'),
    form = jQuery('.form-product .button_actions'),
    form2 = jQuery('.soluong .input_number_product'),
    product_sku = jQuery('.details-pro .product_sku .status_name'),
    productPrice = jQuery('.details-pro .special-price .product-price'),
    qty = jQuery('.first_status .availabel'),
    sale = jQuery('.details-pro .old-price .product-price-old'),
    comparePrice = jQuery('.details-pro .old-price .product-price-old'),
    discountLabel= jQuery('.details-pro .label_product'),
    savePrice = jQuery('.details-pro .save-price'),
    vat = jQuery('.form-group .vat');

/* SKU */
if (variant && variant.sku != "" && variant.sku != null) {
    product_sku.html(variant.sku);
    changeContactFormBody(variant.sku)

} else {
    product_sku.html('Đang cập nhật');
    changeContactFormBody('')

}
/*** VAT ***/
if (variant) {
    if (variant.taxable) {
        $('.form-group').removeClass('hidden').find('.vat').text('(Đã bao gồm VAT)');
    } else {
        $('.form-group').removeClass('hidden').find('.vat').text('(Chưa bao gồm VAT)');
    }
}

if (variant && variant.available) {
    if (variant.inventory_management == "bizweb" || variant.inventory_management == "sapo") {
        if (variant.inventory_quantity != 0  ) {
            qty.html('<link itemprop="availability" href="http://schema.org/OutOfStock" />Còn hàng');
        } else if (variant.inventory_quantity == '') {
            qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Hết hàng');
        }
    } else {
        qty.html('<link itemprop="availability" href="http://schema.org/OutOfStock" />Còn hàng');
    }

    group.removeClass('hidden');
    addToCart.html(`THÊM VÀO GIỎ`).removeAttr('disabled').removeAttr('disabled').removeClass('hidden');
buyNow.html(`MUA NGAY`).removeAttr('disabled');
$('#stock-notify').addClass('hidden')
if (variant.price == 0) {
    productPrice.html('Liên hệ');
    comparePrice.hide();
    discountLabel.hide();
    savePrice.hide();
    form.addClass('hidden');
    vat.addClass('hidden');
    form2.addClass('hidden');
    sale.removeClass('sale');
    group.addClass('hidden');
    $('#stock-notify').addClass('hidden')

    if (variant.inventory_management == "bizweb" || variant.inventory_management == "sapo") {
        if (variant.inventory_quantity != 0) {
            qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
        } else if (variant.inventory_quantity == '') {
            qty.html('<link itemprop="availability" href="http://schema.org/OutOfStock" />Hết hàng');
        }
    } else {
        qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
    }
} else {
    form.removeClass('hidden');
    productPrice.html(Bizweb.formatMoney(variant.price, moneyFormat));
                                         // Also update and show the product's compare price if necessary
  if (variant.compare_at_price > variant.price) {
                      let save = variant.compare_at_price - variant.price
                      let savePercent = Math.ceil(save / variant.compare_at_price * 100);
                      if(savePercent >= 100){
                          savePercent = 99;
                      }
                      if(savePercent < 1){
                          savePercent = 1;
                      }
                      discountLabel.html(`-${savePercent}%`).show()
savePrice.html(`(Tiết kiệm <span>${Bizweb.formatMoney(save, moneyFormat)}</span>)`).show();
         comparePrice.html(Bizweb.formatMoney(variant.compare_at_price,moneyFormat)).show();
         sale.addClass('sale');

if (variant.inventory_management == "bizweb" || variant.inventory_management == "sapo") {
    if (variant.inventory_quantity != 0) {
        qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
        form2.removeClass('hidden');
        form.removeClass('hidden');
        vat.removeClass('hidden');
    } else if (variant.inventory_quantity == '') {
        qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
        form2.removeClass('hidden');
        form.removeClass('hidden');
        vat.removeClass('hidden');
    }
} else {
    qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
    form2.removeClass('hidden');
    form.removeClass('hidden');
    vat.removeClass('hidden');
}

} else {
comparePrice.hide();
discountLabel.hide();
savePrice.hide();
sale.removeClass('sale');
form2.removeClass('hidden');
vat.removeClass('hidden');
if (variant.inventory_management == "bizweb" || variant.inventory_management == "sapo") {
    if (variant.inventory_quantity != 0) {
        qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
        form2.removeClass('hidden');
        form.removeClass('hidden');
    } else if (variant.inventory_quantity == '') {
        qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
        form2.removeClass('hidden');
        form.removeClass('hidden');
    }
} else {
    qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
    form2.removeClass('hidden');
    form.removeClass('hidden');
}
}
}

} else {
addToCart.html('<span class="text_1">Hết hàng</span>').attr('disabled', 'disabled');
addToCart.addClass('is-full')
buyNow.html('<span class="text_1">Hết hàng</span>').attr('disabled', 'disabled').addClass('hidden');

qty.html('Hết hàng');
$('#stock-notify').removeClass('hidden')
form.removeClass('hidden');
form2.addClass('hidden');
group.removeClass('hidden');
vat.removeClass('hidden');

if (variant) {
    if (variant.price != 0) {

        form.removeClass('hidden');
        productPrice.html(Bizweb.formatMoney(variant.price, moneyFormat));
                                             // Also update and show the product's compare price if necessary
                                             if (variant.compare_at_price > variant.price) {
                          form.addClass('hidden');
        let save = variant.compare_at_price - variant.price
        let savePercent = Math.ceil(save / variant.compare_at_price * 100);
                      if(savePercent >= 100){
                          savePercent = 99;
                      }
                      if(savePercent < 1){
                          savePercent = 1;
                      }
                      discountLabel.html(`-${savePercent}%`).show()
        savePrice.html(`(Tiết kiệm <span>${Bizweb.formatMoney(save, moneyFormat)}</span>)`).show();
                                                              comparePrice.html(Bizweb.formatMoney(variant.compare_at_price, moneyFormat)).show();
                                                              sale.addClass('sale');
                       addToCart.html('<span class="text_1">Hết hàng</span>').attr('disabled', 'disabled').removeClass('hidden');
        addToCart.addClass('is-full')
        buyNow.html('<span class="text_1">Hết hàng</span>').attr('disabled', 'disabled').addClass('hidden')
        $('#stock-notify').removeClass('hidden')
        if (variant.inventory_management == "bizweb" || variant.inventory_management == "sapo") {

            if (variant.inventory_quantity != 0 && variant.available) {
                qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
            } else {
                qty.html('<link itemprop="availability" href="http://schema.org/OutOfStock" />Hết hàng');
                form2.addClass('hidden');
                form.removeClass('hidden');
            }
        } else {
            qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
        }

    } else {
        discountLabel.hide();
        savePrice.hide();
        comparePrice.hide();
        vat.removeClass('hidden');
        sale.removeClass('sale');
        form.addClass('hidden');
        addToCart.html('<span class="text_1">Hết hàng</span>').attr('disabled', 'disabled').removeClass('hidden');
        addToCart.addClass('is-full')
        buyNow.html('<span class="text_1">Hết hàng</span>').attr('disabled', 'disabled')
        $('#stock-notify').removeClass('hidden')
        if (variant.inventory_management == "bizweb" || variant.inventory_management == "sapo") {
            if (variant.inventory_quantity != 0 && variant.available) {
                qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
            } else{
                form2.addClass('hidden');
                qty.html('<link itemprop="availability" href="http://schema.org/OutOfStock" />Hết hàng');
                form.removeClass('hidden');
            }
        } else {
            qty.html('<link itemprop="availability" href="http://schema.org/InStock" />Còn hàng');
        }
    }
} else {
    productPrice.html('Liên hệ');
    form2.addClass('hidden');
    vat.addClass('hidden');
    comparePrice.hide();
    discountLabel.hide();
    savePrice.hide();
    form.removeClass('hidden');
    sale.removeClass('sale');
    $('#stock-notify').addClass('hidden')
}
} else {
productPrice.html('Liên hệ');
form2.addClass('hidden');
vat.addClass('hidden');
comparePrice.hide();
discountLabel.hide();
savePrice.hide();
form.addClass('hidden');
sale.removeClass('sale');
$('#stock-notify').addClass('hidden')

}
}
/*begin variant image*/
let boolColorGroup = false;
if (variant && variant.image) {
var originalImage = jQuery(".large-image img");
var newImage = variant.image;
var element = originalImage[0];

        
Bizweb.Image.switchImage(newImage, element, function (newImageSizedSrc, newImage, element) {

    $('.slider-nav .slick-slide').each(function () {
        var $this = $(this);
        var imgThis = $this.find('img').attr('data-img');
        if (newImage.src.split("?")[0] == imgThis.split("?")[0]) {
            
            var pst = $this.attr('data-slick-index');
            jQuery("#gallery_1.slider-for").slick('slickGoTo', pst);
            $('.pict.image').attr('src',newImage.src)
        }
    });
});

    
setTimeout(function () {
    $('.checkurl').attr('href', $(this).attr('src'));

    if (ww >= 1200) {
        
    }
}, 200);

}

};
jQuery('.swatch .swatch-element  :radio').change(function() {
var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
var optionValue = jQuery(this).val();
$(`.single-option-selector[data-option="option${+optionIndex+1}"]`)
    .val(optionValue)
    .trigger('change');
});
$('#ega-sticky-addcart').on('change','.single-option-selector',function(e){
var optionIndex = jQuery(e.target).data('option')
var optionValue  = jQuery(e.target).val()
$(`.form-product .single-option-selector[data-option="${optionIndex}"]`)
    .val(optionValue)
    .trigger('change');
})
$(".dp-flex img").click(function(e){
e.preventDefault();
var hr = $(this).attr('data-src');
$('.checkurl ').attr('src',hr);
$('.large-image a').attr('data-href',hr);
});
function initGallery(){
$('#gallery_02').slick({
    slidesToShow: 5,
    vertical: true,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false
            }
        }
    ]
});

    
                $('#gallery_1').lightGallery({
        thumbnail: false,
        youtubePlayerParams: { autoplay: 1 }
    });

                let navFor = false;
    
    navFor = '#gallery_02';
        
    $('#gallery_1').slick({
        autoplay: false,
        autoplaySpeed: 6000,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: navFor,
        fade: true,
          cssEase: 'linear',
        responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true
            }
        }
    ]
    })
    let prevPos = 0
    $('#gallery_1 .item').on('mousedown', function(e){
        prevPos = e.pageX
        $(this).one('mouseup', function(e){
            $(this).off('mousemove');
            $('#gallery_1 .item').css('pointer-events','initial')

        }).on('mousemove', function(e){
            if(prevPos !== e.pageX){ 
                prev = e.pageX
                $('#gallery_1 .item').css('pointer-events','none')
                e.preventDefault()
            }
        });

    });
    $('#gallery_1').on('swipe', function(event, slick, currentSlide, nextSlide){

        $('#gallery_1 .item').css('pointer-events','none')
    });
    $('#gallery_1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('#gallery_1 .item').css('pointer-events','initial')
    });
    $('#gallery_1').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('#gallery_1 .item').css('pointer-events','initial')
    });
}
function setColorByGroup() {
if($("#add-to-cart-form .swatch .color").length > 0){
    const colorHandle = $("#add-to-cart-form .swatch .color input:checked").parent().data('vhandle');

    let newImagesArr = [];
    if (currentProduct.images && currentProduct.images.length > 1) {
        currentProduct.images.map(image => {
            if (image.src.indexOf(colorHandle) > -1 && image.src.indexOf(`color-${colorHandle}`) == -1) {
                newImagesArr.push(image.src);
            }
        })
    }

    if (newImagesArr.length) {
        if ($("#gallery_1").hasClass("slick-slider")) {
            $('#gallery_1').slick('unslick')
        }
        if ($("#gallery_02").hasClass("slick-slider")) {
            $('#gallery_02').slick('unslick')
        }

        $('#gallery_1').data('lightGallery').destroy(true);

        /* Gallery 1 */
        let htmlGallery1 = "";

        if ($("#gallery_1_clone").length == 0) {
            $('#gallery_1').clone().insertAfter('#gallery_1').attr("id", "gallery_1_clone").addClass("hidden");
        }
        $("#gallery_1_clone").find(".item").each(function(i, v) {
            if (newImagesArr.includes($(v).data().img)) {
                htmlGallery1 += $(v).wrap('<div/>').parent().html();
            }
        })

        $('#gallery_1').html(htmlGallery1);

        /* Gallery 2 */
        let htmlGallery2 = "";

        if ($("#gallery_2_clone").length == 0) {
            $('#gallery_02').clone().insertAfter('#gallery_02').attr("id", "gallery_2_clone").addClass("hidden");
        }
        $("#gallery_2_clone").find(".item").each(function(i, v) {
            if (newImagesArr.includes($(v).data().img)) {
                htmlGallery2 += $(v).wrap('<div/>').parent().html();
            }
        })

        $('#gallery_02').html(htmlGallery2);

        initGallery();
    }
}
}

var copyButton = {"copiedText": "", "copyText": ""};

function convertCouponItem(content) {
const regex = /\[(.*?)\]/gi
content = content.replace(regex, function (str, innerString) {
            let code = innerString.split('=')[1].replace(/"/g,'').trim();
            return `<span onClick="codeCopy(this)" class="smb-copy smb-cursor-pointer text-danger" 
            data-code="${code}" data-copied-text="${copyButton.copiedText}">${copyButton.copyText}</span>`
})
return content
}
function codeCopy(el){
const copyText = copyButton.copyText;
const copiedText = el.dataset.copiedText;
const coupon = el.dataset.code;


const _this = $(el);
_this.html(`<span>${copiedText}</span>`);
_this.addClass('disabled');
setTimeout(function() {
    _this.html(`<span>${copyText}</span>`);
    _this.removeClass('disabled');
}, 3000)
navigator.clipboard.writeText(coupon);
}



$(document).ready(function (e) {
initGallery();
$(window).on('scroll mousemove touchstart',()=>{
    
    if(isProductInit) return
    isProductInit = true
    var wDW = $(window).width();
    
    jQuery(function($) {
    if(currentProduct.variants.length > 1){
        if(navigator.userAgent.indexOf("Speed Insights") == -1){
        
            new Bizweb.OptionSelectors('product-selectors', {
                product: currentProduct,
                onVariantSelected: selectCallback, 
                enableHistoryState: true
            });   
        
        }

    }

          


        // Add label if only one product option and it isn't 'Title'. Could be 'Size'.
        if(currentProduct.options.length === 1 && currentProduct.options[0] != 'Title'){
            $('.selector-wrapper:eq(0)').prepend('<label></label>');
        }
                    
    if(currentProduct.variants.length === 1 && currentProduct.options[0].indexOf('Default') > -1){
                $('.selector-wrapper').hide();

            }// Hide selectors if we only have 1 variant and its title contains 'Default'.
        $('.selector-wrapper').css({
            'text-align':'left',
            'margin-bottom':'15px'
        });

        $('#ega-sticky-addcart .box-variant').append($('.selector-wrapper').clone())
    });

    // load more content
    const $contentWrapper = $('.js-content-wrapper');
    $contentWrapper.each(function (index, element) {
        const $proContent = $(element).find('.js-content');
        const $seeMore = $(element).find('.js-seemore');
        const $proGetContent = $(element).find('.js-product-getcontent');
        if($proContent.height() > 693){
            $seeMore.show();
            $seeMore.click(function() {
                $(this).toggleClass("show");
                if($(this).hasClass('show')) {
                    $proGetContent.css("maxHeight","none");
                    $(this).find('a').html('Thu gọn').attr("title","Thu gọn");
                } else {
                    $proGetContent.css("maxHeight","693px");
                    $(this).find('a').html('Xem thêm').attr("title","Xem thêm");
                    $('html, body').animate({
                        scrollTop: $proGetContent.offset().top - 100 //#DIV_ID is an example. Use the id of your destination on the page
                    }, 'slow');
                }
            })
        } else {
            $seeMore.hide();
        }
    })

    // set recent view
    function  setProductRecent(){
        try{
            let productUrl = currentProduct.alias;
            let storage =  JSON.parse(localStorage.getItem('recentProduct')) || []
            if(storage  && !storage.includes(productUrl) ){
                storage =	[productUrl].concat(storage)
                storage.length > 7 && storage.pop()
                localStorage.setItem('recentProduct', JSON.stringify(storage))
            }}catch(e){
                console.log(e)
            }
    }
    setProductRecent()
    $(document).on('change', '#qtym',onQtyChange)
    $(document).on('click', '.btn_num',onQtyChange)
    $(document).on('click', '.cr-qty-btn',onQtyCRChange)
    $(document).on('change','.cr-qty-input',onQtyCRChange)
    $(document).on('click','.sapo-product-reviews-badge', function(){ 
        $('html,body').animate({scrollTop: $('#section-review').offset().top},300)
    })
    
                var saleboxHtml = $("#ega-salebox .product-promotion__heading").siblings().clone().wrap("<div/>").parent().html()
    if (saleboxHtml) {
        var newContent = saleboxHtml;

        if(saleboxHtml.indexOf("[coupon=") >= 0){
            newContent = convertCouponItem(saleboxHtml);
        }

        $("#ega-salebox .product-promotion__heading").siblings().replaceWith(newContent);
    }
    
    initSizeChart()
    if(typeof	initProductsRelated == 'function' ){
        initProductsRelated()
    }
})
})