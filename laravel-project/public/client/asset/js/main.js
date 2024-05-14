window.awe = window.awe || {};

function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;
awe.hidePopup = function (selector) {
	$(selector).removeClass('active');
}
function awe_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	str= str.replace(/đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.awe_convertVietnamese=awe_convertVietnamese;
function awe_category(){
	$('.nav-category .fa-caret-down').click(function(e){
		$(this).toggleClass('fa-caret-up');
		$(this).parent().toggleClass('active');
	});
} window.awe_category=awe_category;


function awe_backtotop() { 
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}

				if (scrollTop > ($(document).height() - 700) ) {
					$('.back-to-top').addClass('end');
				} else {
					$('.back-to-top').removeClass('end');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;
function awe_tab() {
	$(".e-tabs:not(.not-dqtab)").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');
		
		$(this).find('.tabs-title li').click(function(e){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			var tab_content = $(this).parents('.e-tabs').siblings('.e-tabs')
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			tab_content.find('.tab-content').removeClass('current');
			$(this).addClass('current');

			tab_content.find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab=awe_tab;


/********************************************************
# MENU MOBILE
********************************************************/
// 
/*Double click go to link menu*/
// 

function prefetchUrl (url){
	window.prefetchUrlArr= window.prefetchUrlArr || []
	if(!window.prefetchUrlArr.includes(url) && url && url.includes('/')){
		window.prefetchUrlArr.push(url)
		let prefetchLink = `<link rel="prefetch" href="${url}">`
		$('head').eq(0).append(prefetchLink)
	}
}
function horizontalNav () {
	return {
		wrapper: $('.navigation--horizontal .navigation-horizontal-wrapper'),
		navigation: $('.navigation--horizontal .navigation-horizontal'),
		item: $('.navigation--horizontal .navigation-horizontal .menu-item '),
		arrows: $('.navigation-arrows'),
		scrollStep: 0,
		totalStep: 0,
		transform: function(){
			return `translateY(-${this.scrollStep*100}%)` 
		},
		onCalcNavOverView: function(){
			let itemHeight = this.item.eq(0).outerHeight(),
				navHeight = this.navigation.height()
			return Math.ceil(navHeight/itemHeight)
		},
		handleArrowClick: function(e){
			this.totalStep = this.onCalcNavOverView()
			this.scrollStep = $(e.currentTarget).hasClass('prev') ? this.scrollStep - 1 : this.scrollStep + 1
			this.handleScroll()
		},
		handleScroll: function(){
			this.arrows.find('i').removeClass('disabled')
			if(this.totalStep - 1 <= this.scrollStep ){
				this.arrows.find('.next').addClass('disabled')
				this.scrollStep = this.totalStep - 1
			}
			if(this.scrollStep <= 0){
				this.arrows.find('.prev').addClass('disabled')
				this.scrollStep = 0
			}
			this.item.find('.menu-item__link').css('transform', this.transform())
		},
		init:function(){
			this.totalStep = this.onCalcNavOverView()
			if(this.totalStep > 1){
				this.wrapper.addClass('overflow')
			} 
			this.handleScroll()
			this.arrows.find('i').click((e)=>this.handleArrowClick(e))
		}
	}	
}

const searchIcon = document.getElementById('searchIcon');
const header = document.querySelector('.ega-header');
const headerLayer = document.querySelector('.ega-header-layer');

// Add event listener to the search icon
searchIcon.addEventListener('click', function(event) {
    // Toggle the visibility of the header
    header.classList.toggle('active');
    // Prevent the click event from propagating to the document
    event.stopPropagation();
});

// Add event listener to close the header when clicking outside of it
document.addEventListener('click', function(event) {
    if (!header.contains(event.target) && event.target !== searchIcon) {
        // Hide the header
        header.classList.remove('active');
    }
});

// Add event listener to close the header when clicking on the header layer
headerLayer.addEventListener('click', function() {
    // Hide the header
    header.classList.remove('active');
});
var is_renderd = 0

function renderLayout(){
	if(is_renderd) return 
	is_renderd = 1

	function awe_lazyloadImage() {
		var ll = new LazyLoad({
			elements_selector: ".lazyload",
			load_delay: 0,
			threshold: 0
		});
	} window.awe_lazyloadImage=awe_lazyloadImage;
	//<![CDATA[ 
	function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("footer")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }loadCSS("https://use.fontawesome.com/releases/v5.7.2/css/all.css");
	//]]> 
	//Bizweb
	function loadScript(src, defer, done, type) {
		var js = document.createElement('script');
		js.src = src;
		js.defer = defer;
		js.onload = function(){done();};
		js.type = type || '';
		js.onerror = function(){
			done(new Error('Failed to load script ' + src));
		};
		document.head.appendChild(js);
	}
	awe.init = function () {
		awe.showPopup();
		awe.hidePopup();	
	};
	$(document).ready(function ($) {
		"use strict";
		awe_backtotop();
		awe_category();
		awe_tab();
	});
	$('.close-pop').click(function() {
		$('#popup-cart').removeClass('opencart');
		$('body').removeClass('opacitycart');
	});
	$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
		hidePopup('.awe-popup'); 
		setTimeout(function(){
			$('.loading').removeClass('loaded-content');
		},500);
		return false;
	})
	$('.dropdown-toggle').click(function() {
		$(this).parent().toggleClass('open'); 	
	}); 
	$('.btn-close').click(function() {
		$(this).parents('.dropdown').toggleClass('open');
	}); 
	var wDWs = $(window).width();
	if (wDWs < 1199) {
		$('.ul_menu li:has(ul)' ).doubleTapToGo();
		$('.item_big li:has(ul)' ).doubleTapToGo();
	}
	$(document).on('keydown','#qty, .number-sidebar',function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
	$(document).on('click','.qtyplus',function(e){
		e.preventDefault();   
		fieldName = $(this).attr('data-field'); 
		var currentVal = parseInt($('input[data-field='+fieldName+']').val());
		if (!isNaN(currentVal)) { 
			$('input[data-field='+fieldName+']').val(currentVal + 1);
		} else {
			$('input[data-field='+fieldName+']').val(0);
		}
	});
	$(document).on('click','.qtyminus',function(e){
		e.preventDefault(); 
		fieldName = $(this).attr('data-field');
		var currentVal = parseInt($('input[data-field='+fieldName+']').val());
		if (!isNaN(currentVal) && currentVal > 1) {          
			$('input[data-field='+fieldName+']').val(currentVal - 1);
		} else {
			$('input[data-field='+fieldName+']').val(1);
		}
	});
	$(document).on('click','.open-filters', function(e){
		e.stopPropagation();
		$(this).toggleClass('openf');
		$('.dqdt-sidebar').toggleClass('openf');
		$('body').toggleClass('modal-open')
		$('.opacity_menu').toggleClass('open_opacity')
	}) 
	$(document).ready(function() {
		$('.btn-wrap').click(function(e){
			$(this).parent().slideToggle('fast');
		});


	});
	//$(document).ready(function(){
		var wDW = $(window).width();
		/*Footer*/
		if(wDW > 767){
			$('.toggle-mn').show();
		}else {
			$('.footer-click > .clicked').click(function(){
				$(this).toggleClass('open_');
				$(this).next('ul').slideToggle("fast");
				$(this).next('div').slideToggle("fast");
			});
		}
	//});
	$('.addthis_inline_share_toolbox').append(`<script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58589c2252fc2da4" ></script>`)
	/*MENU MOBILE*/
	var ww = $(window).width();
	if (ww < 992){
		$('.menu-bar').on('click', function(){
			$('.menu_mobile').slideToggle('400');
		});
	}
	$('.opacity_menu').click(function(e){
		$('.menu_mobile').removeClass('open_sidebar_menu');
		$('.opacity_menu').removeClass('open_opacity');
		$('.sidebar').removeClass('openf')
		$('body').toggleClass('modal-open')

	});

	if ($('.dqdt-sidebar').hasClass('openf')) {
		$('.wrapmenu_full').removeClass('open_menu');
	} 
	$('.ul_collections li > .fa').click(function(){
		$(this).parent().toggleClass('current');
		$(this).toggleClass('fa-angle-down fa-angle-up');
		$(this).next('ul').slideToggle("fast");
		$(this).next('div').slideToggle("fast");
	});
	$('.searchion').mouseover(function() {
		$('.searchmini input').focus();                    
	})
	$('.quenmk').on('click', function() {
		$('.h_recover').slideToggle();
	});

	$('a[data-toggle="collapse"]').click(function(e){
		if ($(window).width() >= 767) { 
			// Should prevent the collapsible and default anchor linking 
			// behavior for screen sizes equal or larger than 768px.
			e.preventDefault();
			e.stopPropagation();
		}    
	});
	/** custom **/

	initNavigation()
	$('[data-toggle-submenu]').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).parents('.menu-item').addClass('active')
	})
	$('.toggle-submenu').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('#mobile-menu .menu-item ').removeClass('active')
	})

	$('.toggle-nav').click(function(){
		$('#mobile-menu').addClass('active')
		$('body').addClass('modal-open')
	})
	$('.menu-overlay').click(function(){
		$('#mobile-menu').removeClass('active')
		$('body').removeClass('modal-open')
	})

	$.getScript(window.GLOBAL.vendorUrl).then(()=>{
		$('#mc-form').ajaxChimp({
			language: 'en',
			callback: (resp) => mailChimpResponse($('#mc-form'),resp),
			url: window.GLOBAL.newsletterFormAction
		});

		window.themeScripts.map((a,b)=>{
			if(b == window.themeScripts.length - 1){
				loadScript(a, false, function(){
					window.sectionScripts.map(src => loadScript(src, false, ()=>{}))

				})
			}else{
				loadScript(a, false, function(){})
			}

		})
		window.themeCss.map(src => {
			loadCSS(src)
		})
		$('#stock-notify-form').ajaxChimp({
			language: 'en',
			callback: (resp) => mailChimpResponse($('#stock-notify-form'),resp),
			url: window.GLOBAL.urlMailChimp
		});
		function mailChimpResponse(form,resp) {
			let alert = 	form.next()
			if (resp.result === 'success') {
				if(resp.msg == 'Thank you for subscribing!'){
					alert.find('.mailchimp-success').html('Cảm ơn bạn đã đăng ký!').fadeIn(900);
				}else{
					alert.find('.mailchimp-success').html('' + resp.msg).fadeIn(900);
				}
				$('.mailchimp-error').fadeOut(100);
			} else if (resp.result === 'error') {
				if(resp.msg == '0 - Please enter a value'){
					alert.find('.mailchimp-error').html('Vui lòng nhập các trường thông tin').fadeIn(900);
				}else if(resp.msg == '0 - An email address must contain a single @'){
					alert.find('.mailchimp-error').html('Địa chỉ email phải chứa ký tự @').fadeIn(900);
				}else if(resp.msg == 'This email cannot be added to this list. Please enter a different email address.'){
					alert.find('.mailchimp-error').html('Email này không thể được thêm vào danh sách này. Vui lòng nhập một địa chỉ email khác.').fadeIn(900);
				}else if(resp.msg.includes('0 - The domain portion of the email address is invalid')){
					alert.find('.mailchimp-error').html('Phần tên miền của địa chỉ email không hợp lệ').fadeIn(900);
				}else if(resp.msg.includes('0 - The username portion of the email address is empty')){
					alert.find('.mailchimp-error').html('Phần tên người dùng của địa chỉ email trống').fadeIn(900);
				}else if(resp.msg.includes('0 - The username portion of the email address is invalid')){
					alert.find('.mailchimp-error').html('Phần tên người dùng của địa chỉ email không hợp lệ').fadeIn(900);
				}else if(resp.msg == 'Thank you for subscribing!'){
					alert.find('.mailchimp-error').html('Cảm ơn bạn đã đăng ký!').fadeIn(900);
				}else{
					alert.find('.mailchimp-error').html('' + resp.msg).fadeIn(900);
				}
			}
		}
		let placeholderText =$('.auto-search').data('placeholder') ? $('.auto-search').data('placeholder').split(';').filter(Boolean) :[]
		placeholderText.length && $('.auto-search').placeholderTypewriter({text: placeholderText});

		if(window.GLOBAL.bannerPopupShow){
			let boolModalBanner = sessionStorage.getItem("ega-modal-banner");
			if( boolModalBanner == null || boolModalBanner == false){
				$('#ega-modal-banner').modal('show');
				sessionStorage.setItem("ega-modal-banner",true)
			}
		}


		$(document).on('click','.item-color-chosen .color-dot',function(e){
			$(this).addClass("selected").siblings().removeClass("selected");
			var $pdItem = $(this).parents('.item_product_main');

			var $price = $pdItem.find('.price'),
				$comparePrice = $pdItem.find('.compare-price'),
				$saleLabel= $pdItem.find('.price-box .label_product')

			let pdHandle = $pdItem.find(".image_thumb").attr("href").replace("/","");
			let variantId = $(this).data().variantId;

			$pdItem.find('input[name="variantId"]').val(variantId);

			Bizweb.getProduct(pdHandle,function(product) {
				let vChecked = product.variants.find(el => el.id === variantId);
				if(vChecked.featured_image != null){
					$pdItem.find(".img-fetured").attr("src",Bizweb.resizeImage(vChecked.featured_image.src,'large'));
				}
				$price.html(Bizweb.formatMoney(vChecked.price,GLOBAL.money_format));
				if (vChecked.compare_at_price > vChecked.price) {
					$comparePrice.html(Bizweb.formatMoney(vChecked.compare_at_price,GLOBAL.money_format)).show();

					let save = vChecked.compare_at_price - vChecked.price;
					let savePerCent = Math.ceil(save / vChecked.compare_at_price * 100);
					if(savePerCent > 99){
						savePerCent = 99;
					}
					if(savePerCent < 1){
						savePerCent = 1;
					}
					$saleLabel.html(`<div class="label_wrapper">-${savePerCent}%</div>`).show();
				} else {
					$comparePrice.hide();
					$saleLabel.hide();
				}
			})
		})
		$('a ,.group_action').one('mouseenter touchstart' ,(function(){
			let url =	$(this).attr('href') || $(this).data('url')
			prefetchUrl(url)
		}))


		$('.search-overlay').click(()=>{
			$('.search-overlay').removeClass('active')
		})
		if($(window).width() >= 1200){
			$("body:not(#template-index) .subheader .toogle-nav-wrapper").hover(function(){
				$("body").addClass("menu-is-hover");
			}, function(){
				$("body").removeClass("menu-is-hover");
			});
		}
		$(document).on('click','.group_action',function(e){
			let url = $(this).data('url')
			if(url && e.currentTarget == e.target){
				window.location.href= url
			}
		})
	})




	$('img').removeAttr('loading')
	try{
		localStorage.setItem('themeCached', true)
	}catch(e){
		console.log(e)
	}
}

$(document).ready(function ($) {
	try {
		let storage =localStorage.getItem('themeCached')
		if(storage){
			renderLayout()
		}
	}catch(e){
		console.log(e)
	}
	$(window).one(' mousemove touchstart',renderLayout)
	if(window.matchMedia('(min-width: 992px)').matches){
		horizontalNav().init()
		$(window).on('resize',()=>horizontalNav().init())
	}
});

// ajax section