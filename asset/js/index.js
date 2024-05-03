// if($('.section_lookbook').length > 0){
// 	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e,i){var o=e.nodeName.toLowerCase();if(-1!==t.inArray(o,i))return-1!==t.inArray(o,r)?Boolean(e.nodeValue.match(p)||e.nodeValue.match(l)):!0;for(var n=t(i).filter(function(t,e){return e instanceof RegExp}),s=0,a=n.length;a>s;s++)if(o.match(n[s]))return!0;return!1}function i(i,o,n){if(0===i.length)return i;if(n&&"function"==typeof n)return n(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var r=document.implementation.createHTMLDocument("sanitization");r.body.innerHTML=i;for(var s=t.map(o,function(t,e){return e}),a=t(r.body).find("*"),p=0,l=a.length;l>p;p++){var h=a[p],f=h.nodeName.toLowerCase();if(-1!==t.inArray(f,s))for(var c=t.map(h.attributes,function(t){return t}),u=[].concat(o["*"]||[],o[f]||[]),d=0,v=c.length;v>d;d++)e(c[d],u)||h.removeAttribute(c[d].nodeName);else h.parentNode.removeChild(h)}return r.body.innerHTML}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),n="object"==typeof e&&e;!o&&/destroy|hide/.test(e)||(o||i.data("bs.tooltip",o=new h(this,n)),"string"==typeof e&&o[e]())})}var n=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],s=/^aria-[\w-]*$/i,a={"*":["class","dir","id","lang","role",s],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},p=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,h=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};h.VERSION="3.4.1",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:a},h.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),r=n.length;r--;){var s=n[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",p="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(p+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.getOptions=function(e){var o=this.$element.data();for(var r in o)o.hasOwnProperty(r)&&-1!==t.inArray(r,n)&&delete o[r];return e=t.extend({},this.getDefaults(),o,e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e.sanitize&&(e.template=i(e.template,e.whiteList,e.sanitizeFn)),e},h.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},h.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},h.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},h.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},h.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var o=this,n=this.tip(),r=this.getUID(this.type);this.setContent(),n.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&n.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,p=a.test(s);p&&(s=s.replace(a,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?n.appendTo(t(document).find(this.options.container)):n.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),f=n[0].offsetWidth,c=n[0].offsetHeight;if(p){var u=s,d=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+c>d.bottom?"top":"top"==s&&l.top-c<d.top?"bottom":"right"==s&&l.right+f>d.width?"left":"left"==s&&l.left-f<d.left?"right":s,n.removeClass(u).addClass(s)}var v=this.getCalculatedOffset(s,l,f,c);this.applyPlacement(v,s);var m=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",m).emulateTransitionEnd(h.TRANSITION_DURATION):m()}},h.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,r=o[0].offsetHeight,s=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var p=o[0].offsetWidth,l=o[0].offsetHeight;"top"==i&&l!=r&&(e.top=e.top+r-l);var h=this.getViewportAdjustedDelta(i,e,p,l);h.left?e.left+=h.left:e.top+=h.top;var f=/top|bottom/.test(i),c=f?2*h.left-n+p:2*h.top-r+l,u=f?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][u],f)},h.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},h.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=i(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},h.prototype.hide=function(e){function i(){"in"!=o.hoverState&&n.detach(),o.$element&&o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),e&&e()}var o=this,n=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",i).emulateTransitionEnd(h.TRANSITION_DURATION):i(),this.hoverState=null,this)},h.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},h.prototype.hasContent=function(){return this.getTitle()},h.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var r=window.SVGElement&&i instanceof window.SVGElement,s=o?{top:0,left:0}:r?null:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},p=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,p,s)},h.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},h.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,p=e.top+r-s.scroll+o;a<s.top?n.top=s.top-a:p>s.top+s.height&&(n.top=s.top+s.height-p)}else{var l=e.left-r,h=e.left+r+i;l<s.left?n.left=s.left-l:h>s.right&&(n.left=s.left+s.width-h)}return n},h.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},h.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},h.prototype.enable=function(){this.enabled=!0},h.prototype.disable=function(){this.enabled=!1},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled},h.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},h.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},h.prototype.sanitizeHtml=function(t){return i(t,this.options.whiteList,this.options.sanitizeFn)};var f=t.fn.tooltip;t.fn.tooltip=o,t.fn.tooltip.Constructor=h,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=f,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),r="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.popover",n=new i(this,r)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.4.1",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery);
// }



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