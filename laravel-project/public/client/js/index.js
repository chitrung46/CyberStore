
var is_load = 0 

function changeSliderBackground(index){
		const item = $('.home-slider .items').eq(index)
		if(item.length){
			const color = item.data('color');
			$('.section_slider').css('background', color)
		}
}

function productsCallback (){
	if(window.BPR && window.BPR.loadBadges){
		 window.BPR.init()
	}
}

function getRandomNumber(max) {
	return Math.floor(Math.random() * max) + 1;
}

function getOrderIndex(ranArray,limit){
	if(ranArray.length < limit){
		let orderNumber = getRandomNumber(limit);
		if(!ranArray.includes(orderNumber)){
			return orderNumber;
		}else{
			getOrderIndex(ranArray,limit);
		}
	}
}

function load_after_scroll(){
	const autoplay = true;
	if(is_load) return 
	is_load = 1
 const homeSlider =	$('.home-slider').slick({
		lazyLoad: 'ondemand',
		autoplay,
		autoplaySpeed: 7000,
		fade: true,
		cssEase:'linear',
		dots: true,
		arrows: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				}
			}
		]
	});
homeSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
   changeSliderBackground(nextSlide)
}); 
	$('[data-coll]').one('touchstart mouseover ',function(){
		if($(this).hasClass('js-loaded')) return
		let id = $(this).attr('data-tab')
		let tabContent = $(`#${id}`).find('.row')
		let collHandle = $(this).data('coll')
		let limit = +$(this).data('limit')
		tabContent.find('.item_skeleton').parent().remove()
		$.ajax({
			url: `/collections/${collHandle}?view=home_tab`,
			success: function(data){
				tabContent.html(data)
				productsCallback()
			}
		})
	})
	$('[data-coll]').mouseover()

	$('[data-section]').each(function(){
		let sectionName =	$(this).data('section')
		$(this).find('.item_skeleton').parent().remove()
		let content = $(this).find('[data-template]')
		$(this).append(content.html())
		content.remove();
		productsCallback()
	})
	$('.flashsale__news-list').slick({
		speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false
	});

	
	let brandsItem =  $('.section_brand .row .item').length
	$('.section_brand .row').slick({
		autoplay: false,
		autoplaySpeed: 6000,
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: brandsItem > 5 ? 5 : brandsItem,
		slidesToScroll: brandsItem > 5 ? 5 : brandsItem,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: brandsItem > 5 ? 5 : brandsItem,
					slidesToScroll: brandsItem > 5 ? 5 : brandsItem
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}				   
		]
	});
	
	
	if(window.matchMedia('(min-width: 992px)').matches){
		$('.slick-new').removeClass('row')
		$('.slick-new').slick({
			autoplay: false,
			autoplaySpeed: 6000,
			dots: false,
			arrows: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
			]
		})
		let productItem = $('.slick-pro-banner .item_product_main').length;
		let productLimit = 5
		let hasbanner = $('.slick-pro-banner').hasClass('has_banner')
		if(hasbanner){
			productLimit = window.innerWidth < 992 ? 2  : 3
		}
		let slidetoscroll = productLimit
		console.log(slidetoscroll,productLimit,productItem ,productLimit)
		productItem >productLimit && $('.slick-pro-banner').slick({
			autoplay: false,
			autoplaySpeed: 6000,
			dots: false,
			arrows: true,
			infinite: false,
			speed: 300,
			slidesToShow: slidetoscroll,
			slidesToScroll: slidetoscroll,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: slidetoscroll,
						slidesToScroll: slidetoscroll
					}
				},

				{
					breakpoint: 991,
					settings: {
						slidesToShow: slidetoscroll,
						slidesToScroll: slidetoscroll
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: slidetoscroll,
						slidesToScroll: slidetoscroll
					}
				}
			]
		})
		
		let collsItem =  $('.section_collections .row .item').length
		$('.section_collections .row').slick({
			autoplay: false,
			autoplaySpeed: 6000,
			dots: false,
			arrows: true,
			infinite: false,
			speed: 300,
			slidesToShow: collsItem,
			slidesToScroll: collsItem,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: collsItem,
						slidesToScroll: collsItem
					}
				},
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 8,
						slidesToScroll: 8
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
			]
		});
		
		let seasonItem = $('.section_ss_collection .row .ss_item').length;
		let numItem = 6;

		$('.section_ss_collection .row').slick({
			autoplay: false,
			autoplaySpeed: 6000,
			dots: false,
			arrows: true,
			infinite: false,
			speed: 300,
			slidesToShow: seasonItem > numItem ? numItem : seasonItem,
			slidesToScroll: seasonItem > numItem ? numItem : seasonItem,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: seasonItem > numItem ? numItem : seasonItem,
						slidesToScroll: seasonItem > numItem ? numItem : seasonItem
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
			]
		});
	}
	
	if($('.section_lookbook').length > 0){
		if(window.matchMedia('(max-width: 991px)').matches){
			egaLookBook.slider();
		}
		egaLookBook.getLookBook('#lookbooks-stick-product');
		egaLookBook.popover();
	}

		
	let feedbackItem = $('.section_feedback .row .feedback_item').length
	
	if(feedbackItem > 0){
		feedbackProduct();

		$('.section_feedback .row').slick({
			autoplay: false,
			autoplaySpeed: 6000,
			dots: false,
			arrows: true,
			infinite: false,
			speed: 300,
			slidesToShow: feedbackItem > 3 ? 3 : feedbackItem,
			slidesToScroll: feedbackItem > 3 ? 3 : feedbackItem,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: feedbackItem > 3 ? 3 : feedbackItem,
					slidesToScroll: feedbackItem > 3 ? 3 : feedbackItem
				}
			},
						 {
							 breakpoint: 1024,
							 settings: {
								 slidesToShow: 4,
								 slidesToScroll: 4
							 }
						 },
						 {
							 breakpoint: 991,
							 settings: {
								 slidesToShow: 2,
								 slidesToScroll: 2
							 }
						 },
						 {
							 breakpoint: 767,
							 settings: {
								 slidesToShow: 1,
								 slidesToScroll: 1
							 }
						 }
						]
		});	
	}
	
	if($('.section_video').length > 0){
		$('.section_video > div').lightGallery({
			thumbnail: false,
			youtubePlayerParams: { autoplay: 1 }
		});
	}
	
	}

$(document).ready(function ($) {
	!is_load && setTimeout(load_after_scroll, 10000)
	$(window).one('mousemove touchstart scroll',load_after_scroll)
		changeSliderBackground(0)

	$(".heading-bar.heading-style2 .tabs-select").click(function(){
		$(this).parent().toggleClass("select-hide");
	})
	$(".heading-bar.heading-style2 .tabs-group .tab-link").click(function(){
		let tabName = $(this).text().trim();
		$(this).parents(".tabs-select-wrap").find("span").text(tabName);
				$(this).parents('.tabs-select-wrap ').toggleClass("select-hide");

	})
});