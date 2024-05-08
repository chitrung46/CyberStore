$(document).ready(()=>{
	/** Delivery **/
	$(document).on('click','.toggle-delivery',() => {
		$('.timedeli-modal').toggleClass('active')
		$('body').toggleClass('modal-open')
		if(window.matchMedia('(max-width: 767px)').matches) {
			$('body').addClass('overflow-hidden');
			if (!$('#cart-tab').hasClass('active')) {
				$('#cart-tab').addClass('active');
			}
		}
	})
	$(document).on('click' ,'.timedeli-overaly, .timedeli-modal .close',()=>{
		$('.timedeli-modal').removeClass('active')
		$('body').removeClass('modal-open')
  	    if(window.matchMedia('(max-width: 767px)').matches) {
			if ($('body').hasClass('overflow-hidden')) {
				$('body').removeClass('overflow-hidden');
			}
			if ($('#cart-tab').hasClass('active') && $('#product-tab').hasClass('active')) {
				$('#cart-tab').removeClass('active');
			}
		}
	})
	const getDeliveryValue = ()=>{
		let date = $('.ega-delivery__date').val().split('/')
		date.pop()
		let time = $('.ega-delivery__time').val()
		return time ?  date.join('/') + ' - ' + time : date.join('/')
	}

	$(document).on('focus','.ega-delivery__date', ()=>{
		$('.timedeli-cta').hide()
	})
	$(document).on('blur','.ega-delivery__date', ()=>{
		$('.timedeli-cta').show()
	})
	$(document).on('click','.timedeli-cta button',() => {
		let value =	getDeliveryValue();
		$('.toggle-delivery span').text(value);
		$('.timedeli-modal').removeClass('active')

	})
	/** coupon **/

	$(document).on('click', '.coupon-toggle-btn', ()=>{
		$('.cart-coupon').toggleClass('active')
		$('body').toggleClass('overflow-hidden')
	})
	/** product **/

	/** tab **/

	if(window.matchMedia('(max-width: 767px)').matches) {
		if($('.mobile-tab').length > 1) {
			$('#tab-header').addClass('tab-header')
			$('.mobile-tab').each(function(i){
				let id = 	$(this).attr('id')
				let title = $(this).data('title')
				$('#tab-header').append(`<a class="tab-header-item btn btn-main ${i == 0 ? 'active' : ''}" href="#${id}">${title}</a>`)
  		    })
		}
		$(document).on('click', '.tab-header-item', function(e){
			e.preventDefault()
			$('.tab-header-item').removeClass('active')
			$('.mobile-tab').removeClass('active')
			let id = $(e.currentTarget).attr('href')
			$(id).addClass('active')
			$(e.currentTarget).addClass('active')
		})
	}
})




var GLOBAL = {
	common: {
		init: function () {
			$(document).on('click', '.add_to_cart', addToCart)
			$(document).on('click', '.buynow', buynow)
		}
	},
	templateIndex: {
		init: function () {
		}
	},
	templateProduct: {
		init: function () {
		}
	},
	templateCart: {
		init: function () {
		}
	},
	money_format: "{{amount_no_decimals_with_comma_separator}}₫",
	urlMailChimp: "https://egany.us5.list-manage.com/subscribe/post?u=30fc9d9e428051fcf936d142c&id=8a0a96cc36",
	vendorUrl: "//bizweb.dktcdn.net/100/484/752/themes/920128/assets/vendors.js?1714359361508",
	newsletterFormAction: "https://egany.us5.list-manage.com/subscribe/post?u=30fc9d9e428051fcf936d142c&id=8a0a96cc36",
	bannerPopupShow: false
}
var UTIL = {
	fire: function (func, funcname, args) {
		var namespace = GLOBAL;
		funcname = (funcname === undefined) ? 'init' : funcname;
		if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function') {
			namespace[func][funcname](args);
		}
	},
	loadEvents: function () {
		var bodyId = document.body.id;
		UTIL.fire('common');
		$.each(document.body.className.split(/\s+/), function (i, classnm) {
			UTIL.fire(classnm);
			UTIL.fire(classnm, bodyId);
		});
	}
};
$(document).ready(UTIL.loadEvents);
Number.prototype.formatMoney = function (c, d, t) {
	var n = this,
		c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "." : t,
		s = n < 0 ? "-" : "",
		i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
function addToCart(e) {
	if (typeof e !== 'undefined') e.preventDefault();
	var $this = $(this);
	var form = $this.parents('form');
	$.ajax({
		type: 'POST',
		url: '/cart/add.js',
		async: false,
		data: form.serialize(),
		dataType: 'json',
		error: addToCartFail,
		beforeSend: function () {
		},
		success: addToCartSuccess,
		cache: false
	});
}
function buynow(e) {
	if (typeof e !== 'undefined') e.preventDefault();
	var $this = $(this);
	var form = $this.parents('form');
	const callback = (cart) => {
		location.href = '/checkout';
	}

	$.ajax({
		type: 'POST',
		url: '/cart/add.js',
		async: false,
		data: form.serialize(),
		dataType: 'json',
		error: addToCartFail,
		beforeSend: function () {
		},
		success: (jqXHR, textStatus, errorThrown) => {
			addToCartSuccess(jqXHR, textStatus, errorThrown, callback)
		},
		cache: false
	});
}
function qty() {
	var dqty = $('#qtym').val();
	if (dqty == undefined) {
		return 1;
	}
	return dqty;
}

function checkCartLimit(e, totalPrice) {
	e.preventDefault();

	location.href = '/checkout';

}
function addToCartSuccess(jqXHR, textStatus, errorThrown, callback) {
	$.ajax({
		type: 'GET',
		url: '/cart.js',
		async: false,
		cache: false,
		dataType: 'json',
		success: function (cart) {

			awe.hidePopup('.loading');
			var url_product = jqXHR['url'];
			var class_id = jqXHR['product_id'];
			var name = jqXHR['name'];
			var textDisplay = ('<i style="margin-right:5px; color:red; font-size:13px;" class="fa fa-check" aria-hidden="true"></i>Sản phẩm vừa thêm vào giỏ hàng');
			var id = jqXHR['variant_id'];
			var dataList = $(".item-name a").map(function () {
				var plus = $(this).text();
				return plus;
			}).get();
			$('.title-popup-cart .cart-popup-name').html('<a href="' + url_product + '" title="' + name + '">' + name + '</a> ');
			var nameid = dataList,
				found = $.inArray(name, nameid);
			var textfind = found;

			var src = '';
			if (Bizweb.resizeImage(jqXHR['image'], 'small') == null || Bizweb.resizeImage(jqXHR['image'], 'small') == "null" || Bizweb.resizeImage(jqXHR['image'], 'small') == '') {
				src = 'https://mixcdn.egany.com/themes/assets/thumb/large/noimage.gif'
			}
			else {
				src = Bizweb.resizeImage(jqXHR['image'], 'small')
			}
			$(".item-info > p:contains(" + id + ")").html('<span class="add_sus" style="color:#898989;"><i style="margin-right:5px; color:#3cb878; font-size:14px;" class="fa fa-check" aria-hidden="true"></i>Sản phẩm vừa thêm</span>');

			var va_title = jqXHR['variant_title'];

			if (va_title == 'Default Title') {
				va_title = "";
			} else {
				va_title = jqXHR['variant_title'];
			}
			var windowW = $(window).width();
			$('#popup-cart').addClass('opencart');
			$('body').addClass('opacitycart');
			$('#popup-cart').addClass('opencart');
			$('body').addClass('opacitycart');
			$('#popupCartModal').html('');
			const limit = Number(0)
			const cart_action = cart.total_price >= limit ? `
                        <a href="/checkout" class="btn btn-main btn-full">Thanh toán</a>
                        <a  href="/cart" class="btn btn-main checkout_button btn-full">Xem giỏ hàng</a>
                        `: `
                        <button type="button" class="btn btn-main" data-dismiss="modal" data-backdrop="false"
                                aria-label="Close" >Mua thêm</button>
                        <a  href="/cart" class="btn btn-main  checkout_button btn-full">Xem giỏ hàng</a>
                        `
			let limit_message = `Đơn hàng của bạn chưa đạt giá trị tối thiểu 1.500.000đ. 
            Vui lòng chọn mua thêm sản phẩm`
			limit_message = limit_message ? `<span class="mr-2"><i class="fa fa-info-circle" aria-hidden="true"></i></span> ${limit_message}` : ''
			var $popupMobile = `<div class="modal-dialog align-vertical">
                <div class="modal-content "><button type="button" class="close" data-dismiss="modal" data-backdrop="false"
                    aria-label="Close" style="z-index: 9;"><span aria-hidden="true">×</span></button>
                  <div class="row row-noGutter">
                    <div class="modal-left col-sm-12 col-lg-12 col-md-12">
                      <h3 class="modal-title"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00006 15.3803C12.0761 15.3803 15.3804 12.076 15.3804 7.99995C15.3804 3.92391 12.0761 0.619629 8.00006 0.619629C3.92403 0.619629 0.619751 3.92391 0.619751 7.99995C0.619751 12.076 3.92403 15.3803 8.00006 15.3803Z" fill="#2EB346"/>
                        <path d="M8 16C3.58916 16 0 12.4115 0 8C0 3.58916 3.58916 0 8 0C12.4115 0 16 3.58916 16 8C16 12.4115 12.4115 16 8 16ZM8 1.23934C4.27203 1.23934 1.23934 4.27203 1.23934 8C1.23934 11.728 4.27203 14.7607 8 14.7607C11.728 14.7607 14.7607 11.7273 14.7607 8C14.7607 4.27203 11.728 1.23934 8 1.23934Z" fill="#2EB346"/>
                        <path d="M7.03336 10.9434C6.8673 10.9434 6.70865 10.8771 6.59152 10.7582L4.30493 8.43438C4.06511 8.19023 4.06821 7.7986 4.31236 7.55816C4.55652 7.31898 4.94877 7.32145 5.18858 7.5656L7.0154 9.42213L10.7948 5.25979C11.0259 5.00635 11.4176 4.98838 11.6698 5.21766C11.9232 5.44757 11.9418 5.8392 11.7119 6.09326L7.49193 10.7408C7.3773 10.8672 7.21618 10.9403 7.04577 10.944C7.04143 10.9434 7.03771 10.9434 7.03336 10.9434Z" fill="white"/>
                        </svg>
                        <span>Thêm vào giỏ hàng thành công</span></h3>
                      <div class="modal-body">
                        <div class="media">
                          <div class="media-left thumb_img">
                            <div class="thumb-1x1"><img loading="lazy"
                                src="${src}"
                                alt="${jqXHR['title']}"></div>
                          </div>
                          <div class="media-body body_content">
                            <div class="product-title">${jqXHR['title']}</div>
                            <div class="variant_title font-weight-light"><span>${va_title}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-right margin-top-10 col-sm-12 col-lg-12 col-md-12">
                      <div class="title right_title d-flex justify-content-between" ><a href="/cart"> Giỏ hàng hiện có </a>
                    <div class="text-right">
                        <span class="price">${Bizweb.formatMoney(cart.total_price, '{{amount_no_decimals_with_comma_separator}}₫')}</span>
                        <div class="count font-weight-light">
                            (<span
                        class="cart-popup-count">4</span>) sản phẩm 
                        </div>
                    </div>
                        
                  
                      </div>
                        
                        ${cart.total_price < limit ? `  <div class="cart-message">${limit_message}</div>` : ''}
                          
                          <div class="cart-action">
                                        ${cart_action}
            
                          </div>
                    </div>
                  </div>
                </div>
              </div>`;
			$('#popupCartModal').html($popupMobile);

			if (typeof callback == 'function' && cart.total_price >= limit) {
				return callback(cart)
			}
			$('#popupCartModal').modal();
			Bizweb.updateCartFromForm(cart, '.top-cart-content .mini-products-list');
			Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');


		}
	});
}
function addToCartFail(jqXHR, textStatus, errorThrown) {
	var response = $.parseJSON(jqXHR.responseText);
	var $info = '<div class="error">' + response.description + '</div>';
}
function getDelivery() {
	if (!$('.ega-delivery').length && window.egaDeliveryValid) {
		var head = document.getElementsByTagName('head').item(0);
		var script = document.createElement('script');
		script.setAttribute('src', '//bizweb.dktcdn.net/100/484/752/themes/920128/assets/delivery-addon.js?1714359361508');
		head.appendChild(script);
	}

}
$(document).on('click', ".remove-item-cart", function () {
	var variantId = $(this).attr('data-id');
	removeItemCart(variantId);
});
$(document).on('click', ".items-count", function () {
	$(this).parent().children('.items-count').prop('disabled', true);
	var thisBtn = $(this);
	var variantId = $(this).parent().find('.variantID').val();
	var qty = $(this).parent().children('.number-sidebar').val();
	updateQuantity(qty, variantId);
});
$(document).on('change', ".number-sidebar", function () {
	var variantId = $(this).parent().children('.variantID').val();
	var qty = $(this).val();
	updateQuantity(qty, variantId);
});
function updateQuantity(qty, variantId) {
	var variantIdUpdate = variantId;
	$.ajax({
		type: "POST",
		url: "/cart/change.js",
		data: { "quantity": qty, "variantId": variantId },
		dataType: "json",
		success: function (cart, variantId) {
			Bizweb.onCartUpdateClick(cart, variantIdUpdate);
			cart_min();
		},
		error: function (qty, variantId) {
			Bizweb.onError(qty, variantId)
		}
	})
}
function removeItemCart(variantId) {
	var variantIdRemove = variantId;
	$.ajax({
		type: "POST",
		url: "/cart/change.js",
		data: { "quantity": 0, "variantId": variantId },
		dataType: "json",
		success: function (cart, variantId) {
			Bizweb.onCartRemoveClick(cart, variantIdRemove);
			$('.productid-' + variantIdRemove).remove();
			if ($('.tbody-popup>div').length == '0') {
				$('#popup-cart').removeClass('opencart');
				$('body').removeClass('opacitycart');
			}
			if ($('.list-item-cart>li').length == '0') {
				$('.mini-products-list').html('<div class="no-item"><p>Không có sản phẩm nào.</p></div>');
			}
			if ($('.cart-mobile .item-product').length == '0') {
				$('.page_cart').empty();
				$('.header-cart-content').empty();
				$('.cart-mobile .header-cart').hide()
				$('.title_cart_pc').html('<p class="hidden-xs-down">Không có sản phẩm nào. Quay lại <a href="/" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>');
				$('.cart-empty').show()
				$('.cart-sticky-cta').remove()
			}
			cart_min()
		},
		error: function (variantId, r) {
			Bizweb.onError(variantId, r)
		}
	})
}
function render(props) {
	return function (tok, i) {
		return (i % 2) ? props[tok] : tok;
	};
}
Bizweb.updateCartFromForm = function (cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.        
			jQuery.each(cart, function (key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);
					if (value.length) {
						jQuery('<ul class="list-item-cart"></ul>').appendTo(table);
						jQuery.each(value, function (i, item) {
							var buttonQty = "";
							if (item.quantity == '1') {
								buttonQty = 'disabled';
							} else {
								buttonQty = '';
							}
							var link_img0 = Bizweb.resizeImage(item.image, 'compact');
							if (link_img0 == "null" || link_img0 == '' || link_img0 == null) {
								link_img0 = 'https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif';
							}
							if (item.variant_title == 'Default Title') {
								var ItemDropCart = [{
									url: item.url,
									image_url: link_img0,
									price: Bizweb.formatMoney(item.price, '{{amount_no_decimals_with_comma_separator}}₫'),
									title: item.title,
									buttonQty: buttonQty,
									quanty: item.quantity,
									id_item: item.variant_id,
									variant_title: ''
								}]
							} else {
								var ItemDropCart = [{
									url: item.url,
									image_url: link_img0,
									price: Bizweb.formatMoney(item.price, '{{amount_no_decimals_with_comma_separator}}₫'),
									title: item.title,
									buttonQty: buttonQty,
									quanty: item.quantity,
									id_item: item.variant_id,
									variant_title: item.variant_title,
								}];
							}
							$(function () {
								var TemplateItemDropCart = $('script[data-template="ItemDropCart"]').text().split(/\$\{(.+?)\}/g);
								$('.list-item-cart').append(ItemDropCart.map(function (item) {
									return TemplateItemDropCart.map(render(item)).join('');
								}));
							});
						});
						jQuery('<div class="pd"><div class="top-subtotal">Tổng tiền tạm tính: <span class="price price_big">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></div></div>').appendTo(table);
						jQuery('<div class="pd right_ct"><a href="/cart" class="btn btn-white"><span>Tiến hành thanh toán</span></a></div>').appendTo(table);
					}
					else {
						jQuery('<div class="no-item"><p>Không có sản phẩm nào.</p></div>').appendTo(table);

					}
				}
			});
		}
	}
	updateCartDesc(cart);
	var numInput = document.querySelector('#cart-sidebar input.input-text');
	if (numInput != null) {
		// Listen for input event on numInput.
		numInput.addEventListener('input', function () {
			// Let's match only digits.
			var num = this.value.match(/^\d+$/);
			if (num == 0) {
				// If we have no match, value will be empty.
				this.value = 1;
			}
			if (num === null) {
				// If we have no match, value will be empty.
				this.value = "";
			}
		}, false)
	}
}

Bizweb.updateCartPageForm = function (cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.        
			jQuery.each(cart, function (key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);
					if (value.length) {

						var HeaderCartPc = $('script[data-template="HeaderCartPc"]').text().split(/\$\{(.+?)\}/g);
						var pageCartCheckout = $('script[data-template="pageCartCheckout"]').text().split(/\$\{(.+?)\}/g);

						$(table).append((function () {
							return HeaderCartPc.map(render()).join('');
						}));

						jQuery.each(value, function (i, item) {
							var buttonQty = "";
							if (item.quantity == '1') {
								buttonQty = 'disabled';
							} else {
								buttonQty = '';
							}
							var link_img1 = Bizweb.resizeImage(item.image, 'compact');
							if (link_img1 == "null" || link_img1 == '' || link_img1 == null) {
								link_img1 = 'https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif';
							}


							if (item.variant_title == 'Default Title') {
								var ItemCartPage = [{
									url: item.url,
									image_url: link_img1,
									price: Bizweb.formatMoney(item.price, '{{amount_no_decimals_with_comma_separator}}₫'),
									title: item.title,
									buttonQty: buttonQty,
									quanty: item.quantity,
									variant_title: item.variant_title,
									price_quanty: Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"),
									id_item: item.variant_id,
									variant_title: ''
								}]
							} else {
								var ItemCartPage = [{
									url: item.url,
									image_url: link_img1,
									price: Bizweb.formatMoney(item.price, '{{amount_no_decimals_with_comma_separator}}₫'),
									title: item.title,
									buttonQty: buttonQty,
									quanty: item.quantity,
									variant_title: item.variant_title,
									price_quanty: Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"),
									id_item: item.variant_id
								}]
							}

							$(function () {
								var pageCartItem = $('script[data-template="pageCartItem"]').text().split(/\$\{(.+?)\}/g);
								$(table.find('.cart-tbody')).append(ItemCartPage.map(function (item) {
									return pageCartItem.map(render(item)).join('');

								}));
							});

						});

						var PriceTotalCheckout = [{
							price_total: Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫")
						}];
						$(table.children('.cart')).append(PriceTotalCheckout.map(function (item) {
							return pageCartCheckout.map(render(item)).join('');
						}));
					} else {
						jQuery('<p class="hidden-xs-down ">Không có sản phẩm nào. Quay lại <a href="/collections/all" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>').appendTo(table);
						jQuery('.cart_desktop_page').css('min-height', 'auto');
					}
				}
			});
		}
	}
	updateCartDesc(cart);
	jQuery('#wait').hide();

}
Bizweb.updateCartPopupForm = function (cart, cart_summary_id, cart_count_id) {

	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.        
			jQuery.each(cart, function (key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);
					if (value.length) {
						jQuery.each(value, function (i, item) {
							var src = item.image;
							if (src == null) {
								src = "https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
							}
							var buttonQty = "";
							if (item.quantity == '1') {
								buttonQty = 'disabled';
							} else {
								buttonQty = '';
							}

							if (item.variant_title == 'Default Title') {
								var ItemPopupCart = [{
									url: item.url,
									image_url: src,
									price: Bizweb.formatMoney(item.price, '{{amount_no_decimals_with_comma_separator}}₫'),
									title: item.title,
									quanty: item.quantity,
									variant_title: '',
									price_quanty: Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"),
									id_item: item.variant_id
								}];
							} else {
								var ItemPopupCart = [{
									url: item.url,
									image_url: src,
									price: Bizweb.formatMoney(item.price, '{{amount_no_decimals_with_comma_separator}}₫'),
									title: item.title,
									quanty: item.quantity,
									variant_title: item.variant_title,
									price_quanty: Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"),
									id_item: item.variant_id
								}];
							}


							$(function () {
								var TemplateItemPopupCart = $('script[data-template="TemplateItemPopupCart"]').text().split(/\$\{(.+?)\}/g);
								$(table).append(ItemPopupCart.map(function (item) {
									return TemplateItemPopupCart.map(render(item)).join('');
								}));
							});

							$('.link_product').text();
						});
					}
				}
			});
		}
	}
	jQuery('.total-price').html(Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫"));
	updateCartDesc(cart);
}
Bizweb.updateCartPageFormMobile = function (cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.
			if (cart.items && cart.items.length) {
				var table = jQuery(cart_summary_id);
				jQuery('<div class="cart_page_mobile content-product-list"></div>').appendTo(table);
				jQuery.each(cart.items, function (i, item) {
					if (item.image != null) {
						var src = Bizweb.resizeImage(item.image, 'compact');
					} else {
						var src = "https://mixcdn.egany.com/themes/assets/thumb/large/noimage.gif";
					}
					var ItemCartPageMobile = [{
						url: item.url,
						image_url: src,
						price: Bizweb.formatMoney(item.price, '{{amount_no_decimals_with_comma_separator}}₫'),
						title: item.title,
						quanty: item.quantity,
						variant_title: item.variant_title !== 'Default Title' ? item.variant_title : '',
						price_quanty: Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"),
						id_item: item.variant_id
					}];

					var pageCartItemMobile = $('script[data-template="ItemCartMobile"]').text().split(/\$\{(.+?)\}/g);

					$(table.children('.content-product-list')).append(ItemCartPageMobile.map(function (item) {
						return pageCartItemMobile.map(render(item)).join('');
					}));

				})

				var pageCartCheckoutMobile = $('script[data-template="pageCartCheckoutMobile"]').text().split(/\$\{(.+?)\}/g);
				var PriceTotalCheckoutMobile = [{
					price_total: Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫")
				}];
				if (window.innerWidth < 767) {
					var stickyCartCheckout = $('script[data-template="templateStickyCheckout"]').text().split(/\$\{(.+?)\}/g);
					$('body').append(PriceTotalCheckoutMobile.map(function (item) {
						return stickyCartCheckout.map(render(item)).join('');
					}));
				}
				$(table).append(PriceTotalCheckoutMobile.map(function (item) {
					return pageCartCheckoutMobile.map(render(item)).join('');
				}));




				$('.cart_page_mobile').append(``)
			}

		}
	}
	updateCartDesc(cart);
}


function updateCartDesc(data) {
	var $cartPrice = Bizweb.formatMoney(data.total_price, "{{amount_no_decimals_with_comma_separator}}₫"),
		$cartMobile = $('#header .cart-mobile .quantity-product'),
		$cartDesktop = $('.count_item_pr, .count_sidebar, .cart-popup-count'),
		$cartDesktopList = $('.cart-counter-list'),
		$cartPopup = $('.cart-popup-count');

	switch (data.item_count) {
		case 0:
			$cartMobile.text('0');
			$cartDesktop.text('0');
			$cartDesktopList.text('0');
			$cartPopup.text('0');

			break;
		case 1:
			$cartMobile.text('1');
			$cartDesktop.text('1');
			$cartDesktopList.text('1');
			$cartPopup.text('1');

			break;
		default:
			$cartMobile.text(data.item_count);
			$cartDesktop.text(data.item_count);
			$cartDesktopList.text(data.item_count);
			$cartPopup.text(data.item_count);

			break;
	}
	$('.top-cart-content .top-subtotal .price, aside.sidebar .block-cart .subtotal .price, .popup-total .total-price').html($cartPrice);
	$('.popup-total .total-price').html($cartPrice);
	$('.shopping-cart-table-total .totals_price, .price_sidebar .price_total_sidebar').html($cartPrice);
	$('.totals_price_mobile').html($cartPrice);
	$('.cartCount, .cart-popup-count, #ega-cart-count').html(data.item_count);


}

Bizweb.onCartUpdate = function (cart) {
	Bizweb.updateCartFromForm(cart, '.mini-products-list');
	Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

};
Bizweb.onCartUpdateClick = function (cart, variantId) {
	jQuery.each(cart, function (key, value) {
		if (key === 'items') {
			jQuery.each(value, function (i, item) {
				if (item.variant_id == variantId) {
					$('.productid-' + variantId).find('.cart-price span.price').html(Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"));
					$('.productid-' + variantId).find('.items-count').prop("disabled", false);
					$('.productid-' + variantId).find('.number-sidebar').prop("disabled", false);
					$('.productid-' + variantId + ' .number-sidebar').val(item.quantity);
					$('.list-item-cart .item.productid-' + variantId).find('.quanlity').text('x ' + item.quantity)
					if (item.quantity == '1') {
						$('.productid-' + variantId).find('.items-count.btn-minus').prop("disabled", true);
					}
				}
			});
		}
	});
	updateCartDesc(cart);
}
Bizweb.onCartRemoveClick = function (cart, variantId) {
	jQuery.each(cart, function (key, value) {
		if (key === 'items') {
			jQuery.each(value, function (i, item) {
				if (item.variant_id == variantId) {
					$('.productid-' + variantId).remove();
				}
			});
		}
	});
	updateCartDesc(cart);
}
const initCart = () => {
	$.ajax({
		type: 'GET',
		url: '/cart.js',
		async: false,
		cache: false,
		dataType: 'json',
		success: function (cart) {
			Bizweb.updateCartFromForm(cart, '.mini-products-list');
			Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

			if (!cart.item_count) {

			}
		}
	});

	var wDWs = $(window).width();
	if (wDWs < 1199) {
		$('.top-cart-content').remove();

	}

}
$(window).ready(function () {


	$(window).one(' mousemove touchstart scroll', initCart)


});

//Check inventory
$(document).on('click', ".items-count", function () {
	$(this).parent().children('.items-count').prop('disabled', true);
	var variantId = $(this).parent().find('.variantID').val(),
		qty = $(this).parent().children('.number-sidebar').val(),
		url = $(this).parent().parent().parent().find('.product-name a').attr('href');
	CheckQtyCart(qty, variantId, url);
})
function CheckQtyCart(qty, variantId, url) {
	if (!url) return
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: "" + url + ".json",
		success: function (data) {
			locationData = data;
			for (var i = 0; i < locationData.variants.length; i++) {
				if (locationData.variants[i].id == variantId) {
					var maxS = locationData.variants[i].inventory_quantity,
						allow = locationData.variants[i].inventory_management,
						continues = locationData.variants[i].inventory_policy;
					if (allow == 'bizweb') {
						$('.productid-' + variantId + '').find('.items-count.btn-plus').css("pointer-events", "auto");
						if (continues == "deny") {
							$('.productid-' + variantId + '').find('.items-count.btn-plus').css("pointer-events", "none");
							if (qty >= maxS) {
								updateQuantity(maxS, variantId);
								$('.productid-' + variantId + '').find('.quanlity').text(`x ${maxS}`)
								$('.productid-' + variantId + '').find('.items-count.btn-plus').css("pointer-events", "none");
							} else {
								$('.productid-' + variantId + '').find('.items-count.btn-plus').css("pointer-events", "auto");
							}
						} else if (continues == "continue") {
							$('.productid-' + variantId + '').find('.items-count.btn-plus').css("pointer-events", "auto");
						} else {
							$('.productid-' + variantId + '').find('.items-count.btn-plus').css("pointer-events", "auto");
						}
					}
				}
			}
		}
	})
}
function alertInvalidQty(qty) {
	alert(`Bạn chỉ có thể mua tối đa ${qty} sản phẩm`)
}
function validateQty(product, variantId, qty) {
	let isInValidQty = false;
	/** check variant **/
	let variant = product && product.variants.find(item => item.id == variantId)
	if (variant && variant.inventory_management === "bizweb" && variant.inventory_policy == "deny") {
		isInValidQty = qty > variant.inventory_quantity
		isInValidQty && alertInvalidQty(variant.inventory_quantity)
		return isInValidQty ? variant.inventory_quantity : false
	}
	return isInValidQty

}
function cart_min() {
	var sts = true;
	$.ajax({
		type: 'GET',
		url: '/cart.js',
		async: false,
		success: function (data) {
			var cart = parseInt(data.total_price + '');
			var cart_compare = parseInt(0);
			if (cart < cart_compare) {
				$('.btn-proceed-checkout-mobile').addClass('disabled');
				$('.cart-limit-alert').css('display', 'block');
				$('#template-cart').removeClass('cart-available')
				sts = false;
			} else {
				$('.btn-proceed-checkout-mobile').removeClass('disabled');
				$('.cart-limit-alert').css('display', 'none');
				$('#template-cart').addClass('cart-available')
			}
		}
	})
	return sts;
}




// Lấy tất cả các nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll('.btn.add_to_cart');

// Gắn sự kiện click cho mỗi nút "Thêm vào giỏ hàng"
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        // Lấy thông tin sản phẩm từ phần tử cha của nút đã được nhấp vào
        var productThumbnail = this.closest('.item_product_main');

        var productName = productThumbnail.querySelector('.product-name a.link').textContent.trim(); // Tên sản phẩm
        var productPrice = productThumbnail.querySelector('.price').textContent.trim(); // Giá sản phẩm
        var productImage = productThumbnail.querySelector('.img-fetured').getAttribute('src'); // URL ảnh sản phẩm
        var variantId = productThumbnail.querySelector('input[name="variantId"]').value; // ID biến thể sản phẩm

		
        // Thêm sản phẩm vào giỏ hàng (ví dụ: lưu vào sessionStorage)
        var cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        var existingProductIndex = cart.findIndex(function(item) {
            return item.variantId === variantId;
        });
        if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng sản phẩm
            cart[existingProductIndex].quantity++;
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
            cart.push({ name: productName, price: productPrice, image: productImage, variantId: variantId, quantity: 1 });
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật giao diện người dùng
        updateCartUI();
    });
});

// Hàm cập nhật giao diện người dùng
function updateCartUI() {
    var cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    var numProducts = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    document.getElementById('num-products').textContent = numProducts;

    // Cập nhật danh sách sản phẩm đã thêm vào giỏ hàng
    var shoppingCartList = document.querySelector('.shopping__cart-list');
    var shoppingCartItems = '';

    if (cart.length === 0) {
        // Hiển thị thông báo khi không có sản phẩm trong giỏ hàng
        shoppingCartList.innerHTML = `
            <img src=".\\img\\empty-cart.svg" alt="" class="shopping__cart-list--no-cart-img">
            <p class="shopping__cart-list--no-cart-msg">Hổng cóa sản phẩm :<<< </p>`;
    } else {
        // Hiển thị danh sách sản phẩm trong giỏ hàng
        shoppingCartItems += '<h4 class="shopping__cart-heading">Sản phẩm đã thêm</h4>';
        shoppingCartItems += '<ul class="shopping__cart-list-item">';

        // Sử dụng Set để lọc các sản phẩm trùng lặp
        var uniqueProducts = new Set(cart.map(function(item) {
            return item.variantId;
        }));

        // Lặp qua các sản phẩm duy nhất và tạo HTML cho mỗi sản phẩm
        uniqueProducts.forEach(function(variantId) {
            var item = cart.find(function(item) {
                return item.variantId === variantId;
            });

            shoppingCartItems += `
                <li class="shopping__cart-item">
                    <img src="${item.image}" alt="" class="shopping__cart-img">
                    <div class="shopping__cart-item-info">
                        <div class="shopping__cart-item-head">
                            <h5 class="shopping__cart-item-name">${item.name}</h5>
							
                            <div class="shopping__cart-item-price-wrap">
                                <span class="shopping__cart-item-price">${item.price}</span>
                                <span class="shopping__cart-item-multiply">x</span>
                                <span class="shopping__cart-item-qnt">${item.quantity}</span>
                            </div>
                        </div>
                        <div class="shopping__cart-item-body">
                            <button class="shopping__cart-item-remove" data-variant="${item.variantId}">Xóa</button>
                        </div>
                    </div>
                </li>`;
        });

        shoppingCartItems += '</ul>';
        shoppingCartList.innerHTML = shoppingCartItems;

        // Gắn sự kiện click cho nút "Xóa"
        addClickEventToRemove();
    }
}

// Hàm gắn sự kiện click cho nút "Xóa"
function addClickEventToRemove() {
    var removeButtons = document.querySelectorAll('.shopping__cart-item-remove');
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var variantId = this.getAttribute('data-variant');
            removeFromCart(variantId);
        });
    });
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(variantId) {
    var cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    // Lọc ra các sản phẩm không trùng variantId
    var updatedCart = cart.filter(function(item) {
        return item.variantId !== variantId;
    });
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartUI();
}

// Gọi hàm để khởi tạo giao diện người dùng
updateCartUI();