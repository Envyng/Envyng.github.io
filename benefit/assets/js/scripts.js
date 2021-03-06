window.onload=function(){
(function(d){
 var
 ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
 nm=true,sp={x:0,y:0},ep={x:0,y:0},
 touch={
  touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
  touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
  touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
  touchcancel:function(e){nm=false}
 };
 for(var a in touch){d.addEventListener(a,touch[a],false);}
})(document);

var l=function(e){
	console.log(e.type,e);
    if($('.lmenu_block').hasClass('visible')) {
        $('.lmenu_block').removeClass('visible'); 
    }
};
var r=function(e){
	console.log(e.type,e);
	if($('.vertical_menu').hasClass('visible')) {
	    $('.vertical_menu').removeClass('visible'); 
	}
};

document.getElementById('left-menu').addEventListener('swl',l,false);
document.getElementById('right-menu').addEventListener('swr',r,false);

}

$.fn.isolatedScroll = function() {
    this.bind('touchmove touchstart mousewheel DOMMouseScroll', function (e) {
        var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
            bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
            topOverflow = this.scrollTop <= 0;

        if ((delta < 0 && bottomOverflow && $(window).width() < 1000) || (delta > 0 && topOverflow && $(window).width() < 1000)) {
            e.preventDefault();
        }
    });
    return this;
};


/*
 * Owl Carousel slider
 *
 */
$('.top_slider').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    responsiveClass: true,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left' aria-hidden='true'></i>",
      "<i class='fa fa-angle-right' aria-hidden='true'></i>"
    ],
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    startPosition: '0',
    fluidSpeed: true,
    smartSpeed: 1000
});

/*organization slider*/
$('.organization_slider').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left' aria-hidden='true'></i>",
      "<i class='fa fa-angle-right' aria-hidden='true'></i>"
    ],
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    startPosition: '0',
    fluidSpeed: true,
    smartSpeed: 1000
});

/*
 * Owl Carousel products
 *
 */
$('.product_carousel').owlCarousel({
    loop: true,
    items:2,
    margin: 5,
    dots: false,
    autoWidth: false,
    responsiveClass: true,
    navText: [
      "<i class='fa fa-angle-left' aria-hidden='true'></i>",
      "<i class='fa fa-angle-right' aria-hidden='true'></i>"
    ],
    responsive:{
        0:{
            items:2,
            nav:false,
            margin: 0
        },
        480:{
            items:3,
            nav:false,
            margin: 0
        },
        720:{
            items:3,
            nav:false,
            margin: 0
        },
        800:{
            items:4,
            nav:false,
            margin: 0
        },
        1000:{
            items:4,
            nav:false
        },
        1001: {
            items: 2,
            nav: false
        },
        1130:{
            items:3,
            nav:true
        },
        1366:{
            items:4,
            nav:true
        },
        1560:{
            items:5,
            nav:true
        }
    }
});


/*
 * Sub Header Fixed
 *
 */

var winHeight = $(window).scrollTop();
var subheader = $( ".sub_header" );
var subheaderTopOffset = subheader.offset().top;

$(window).resize(function() {
    if(subheader.hasClass('fixed')) {

    } else {
        subheaderTopOffset = subheader.offset().top;
    }
});

$(window).scroll(function() {
    winHeight = $(window).scrollTop();
    if (winHeight >= (subheaderTopOffset)) {
		subheader.addClass('fixed');
		$('header').addClass('fixed');
    } else if (winHeight < subheaderTopOffset) {
		subheader.removeClass('fixed');
		$('header').removeClass('fixed');
    }

});


/*
* Search block toggle
*
*/
$('.togglesearch').click(function() {
    $('.position_block').removeClass('visible');
    $('.lmenu_block').removeClass('visible');
    $('.vertical_menu').removeClass('visible');
    $('.search_block').toggleClass('visible');

    over4menu();
});

/*
* Position block toggle
*
*/
$('.toggleposition').click(function() {
    $('.search_block').removeClass('visible');
    $('.lmenu_block').removeClass('visible');
    $('.vertical_menu').removeClass('visible');
    $('.position_block').toggleClass('visible');

    over4menu();
});


// var for subheader
var shh = 74;
if($(window).width() <= 767) {
    shh = 40;
} else if($(window).width() > 767) {
    shh = 74;
}
$(window).resize(function() {
    if($(window).width() <= 767) {
        shh = 40;
    } else if($(window).width() > 767) {
        shh = 74;
    }
});

/*
* Left menu toggle
*
*/
$('.togglerightmenu').click(function() {
    $('.search_block').removeClass('visible');
    $('.position_block').removeClass('visible');
    $('.lmenu_block').removeClass('visible');
    $('.vertical_menu').toggleClass('visible');

    over4menu();
});

$('.empty_over, header, .sub_header').on('touchmove mousewheel DOMMouseScroll', function (e) {
    if($('.vertical_menu').hasClass('visible')) {
        e.preventDefault();
    }
    if($('.lmenu_block').hasClass('visible')) {
        e.preventDefault();
    }
});

function over4menu () {
    if($('.vertical_menu').hasClass('visible')) {
        $('.empty_over').removeClass('hidden');
    } else if ($('.lmenu_block').hasClass('visible')) {
        $('.empty_over').removeClass('hidden');
    } else {
        $('.empty_over').addClass('hidden');
    }
}


$('.vertical_menu, .lmenu_block').isolatedScroll();

if($(window).width() <= 1000) {

    if(subheader.hasClass('fixed')) {
        $('.vertical_menu').css({
            'top': shh + 'px',
            'height': $(window).height() - shh + 'px'
        });
    } else {
        $('.vertical_menu').css({
            'top': subheader.offset().top + shh,
            'height': $(window).height() - subheader.offset().top - shh + 'px'
        });
        $('.vertical_menu').removeClass('fixed');
    }
}

$(window).scroll(function() {
    if($(window).width() <= 1000) {
        if(subheader.hasClass('fixed')) {
            $('.vertical_menu').addClass('fixed');
            $('.vertical_menu').css({
                'top': shh + 'px',
                'height': $(window).height() - shh + 'px'
            });
        } else {
            $('.vertical_menu').removeClass('fixed');
            $('.vertical_menu').css({
                'top': subheader.offset().top + shh,
                'height': $(window).height() - subheader.offset().top - shh + 'px'
            });
        }
    }
});


/*
* Left menu toggle
*
*/
$('.toggleleftmenu').click(function() {
    $('.search_block').removeClass('visible');
    $('.position_block').removeClass('visible');
    $('.vertical_menu').removeClass('visible');
    $('.lmenu_block').toggleClass('visible');

    over4menu();
});

if($(window).width() <= 1000) {
    if(subheader.hasClass('fixed')) {
        $('.lmenu_block').css({
            'top': shh + 'px',
            'height': $(window).height() - shh + 'px'
        });
    } else {
        $('.lmenu_block').css({
            'top': subheader.offset().top + shh,
            'height': $(window).height() - subheader.offset().top - shh + 'px'
        });
        $('.lmenu_block').removeClass('fixed');
    }
}

$(window).scroll(function() {
    if($(window).width() <= 1000) {
        if(subheader.hasClass('fixed')) {
            $('.lmenu_block').addClass('fixed');
            $('.lmenu_block').css({
                'top': shh + 'px',
                'height': $(window).height() - shh + 'px'
            });
        } else {
            $('.lmenu_block').removeClass('fixed');
            $('.lmenu_block').css({
                'top': subheader.offset().top + shh,
                'height': $(window).height() - subheader.offset().top - shh + 'px'
            });
        }
    }
});

/*
 * Login box
 *
 */
$('.login_links > a').click(function() {
    $('.login_box').addClass('visible');
    $('.lmenu_block').removeClass('visible');
    $('.login_box_over').removeClass('hidden');
});
$('.login_box_over, .login_box > .login_box_header > .close').click(function() {
    $('.login_box').removeClass('visible');
    $('.login_box_over').addClass('hidden');
});


 /* text input desctop */
$('.mega-dropdown').on('click', function (event) {
    $(this).parent().toggleClass('open');
});
$('body').on('click', function (e) {
    if (!$('.mega-dropdown').is(e.target) 
        && $('.mega-dropdown').has(e.target).length === 0 
        && $('.open').has(e.target).length === 0
    ) {
        $('.mega-dropdown').parent().removeClass('open');
    }
});
$(function() {
    var availableTags = [
      "Глазго",
      "Киев",
      "Братислава",
      "Берлин"
    ];
    $( ".select_place_input" ).autocomplete({
        source: availableTags
    });
});
$('.big_sugestions > span').click(function() {
    $('.select_place_input').val($(this).text());
    $('.big_sugestions').addClass('hidden');
});




// reset
$(window).resize(function() {
    if($(window).width() > 1000) {
        $('.lmenu_block').removeClass('fixed');
        $('.lmenu_block').attr('style', '');
        $('.vertical_menu').removeClass('fixed');
        $('.vertical_menu').attr('style', '');
		$('.vertical_menu ul li ul').attr('style', '');
    }
});

// tooltip
$('.battery').tooltip();

//structure table
$('.expand_close').on('click', function() {
    $(this).toggleClass('expand_close expand_open')
    $(this).parent().parent().children('ul').toggleClass('hidden');
});
$('.expand_open').on('click', function() {
    $(this).toggleClass('expand_close expand_open')
    $(this).parent().parent().children('ul').toggleClass('hidden');
});

var balls = $(".structure_table_balls");
jQuery.each(balls, function() {
    if(parseInt($(this).html()) >= 500) {
        $(this).addClass('green_color');
    }
});

var bonusLevel = $('.bonusLevel');
jQuery.each(bonusLevel, function() {
    var tmp = $(this).html().split(' ');
    if(tmp[0] === '-') {
        $(this).parent().addClass('pink');
    }
});

var structureLine = $('.structureLine');
jQuery.each(structureLine, function() {
    if($(this).html() === '1' || $(this).html() === 1) {
        $(this).parent().addClass('bg_pink');
    }else{
        $(this).parent().addClass('bg_grey');
    }
});

var today = new Date();
var currentYear =  today.getFullYear();
for(var i = 1901; i <= currentYear; i++) {
    var tmp;
    if(i === currentYear) {
        var tmp = '<option selected>' + i + '</option>';
    }else{
        var tmp = '<option>' + i + '</option>';
    }
    $('.bonuses_invitation_year').append(tmp);
    $('.structre_year').append(tmp);
}



/*organization slider*/
$('.grr').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    responsiveClass: true,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left' aria-hidden='true'></i>",
      "<i class='fa fa-angle-right' aria-hidden='true'></i>"
    ],
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    startPosition: '0',
    fluidSpeed: true,
    smartSpeed: 1000
});

/*product_description_amount*/
var productCurrentValue;

$('.product_description_amount_minus').on('click', function() {
    productCurrentValue = parseInt($('.product_description_amount').val());
    var newValue = productCurrentValue - 1;
    if(productCurrentValue <= 1) {
        return;
    }else{
        $('.product_description_amount').val(newValue);
    }
});

$('.product_description_amount_plus').on('click', function() {
        productCurrentValue = parseInt($('.product_description_amount').val());
        var newValue = productCurrentValue + 1;
        $('.product_description_amount').val(newValue);
    
});

/*product_modal_amount*/
$('.product_modal_minus').on('click', function() {
    var temp = $(this).parent().children('.product_modal_amount').val().split(',');
    productCurrentValue = parseFloat(temp.join('.'));
    if(productCurrentValue <= 1 && temp.length === 1) {
        return;
    }else if(temp.length > 1) {
        var fixed = (productCurrentValue - 0.01).toFixed(2).split('.').join(',');
        $(this).parent().children('.product_modal_amount').val(fixed);
    }else{
        $(this).parent().children('.product_modal_amount').val(productCurrentValue - 1);
    }
});

$('.product_modal_plus').on('click', function() {
    var temp = $(this).parent().children('.product_modal_amount').val().split(',').join('.');
    productCurrentValue = parseFloat(temp);
    if(temp.length > 1) {
        var fixed = (productCurrentValue + 0.01).toFixed(2).split('.').join(',');
        $(this).parent().children('.product_modal_amount').val(fixed);
    }else{
        $(this).parent().children('.product_modal_amount').val(productCurrentValue + 1);
    }
    
});

$('.product_modal_amount, .product_description_amount').blur(function () {
    var value = $(this).val();
    if (value !== '') {
        if (!this.value.match(/^[0-9-]+$/)) {
            $(this).val(1);
        }
    }
});




/*basket_modal_table delete product*/
$('.delete_product').on('click', function () {
    if($(this).parents('.basket_modal_td').is(':has(ul)')) {
        var parentRow = $(this).parents('.basket_modal_table_row');
        var index = $(this).parent().index();
        
        if(index === 0) {
            $(this).parents('.basket_modal_table_row').remove();
        }else{
            var newIndex =  index + 1;
            var tempStr = 'ul li:nth-child(' + newIndex + ')';
            $(this).parents('.basket_modal_table_row').find(tempStr).remove();
        }
    }else{
        $(this).parent().parent().remove();
    }
});

/*categories darcer background*/
$('#categories li, .header_categories_wrap li').on('mouseenter', function() {
    $('.darker, .darker_main').removeClass('hidden');
});

$('.darker, .darker_main, header, .sub_header').on('mouseenter', function() {
    setTimeout(function() {
        $('.darker_main').addClass('hidden');
    }, 650);
    $('.darker').addClass('hidden');
});


/*header categorias link*/
$('.header_categories_wrap .header_categories').on('click', function(e) {
    e.preventDefault();
});


/*8bootstrap carousel swipe*/
$(document).ready(function(){
	$(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
});

/*filter modal*/
$('.filter_modal_subtitle').on('click', function() {
    $('.filter_modal_main_list li:hover ul').css({'display' : 'none'});
});

$('.filter_modal_main_list li').on('mouseenter', function() {
    setTimeout(function() {
        $('.filter_modal_main_list li:hover ul').css({'display' : 'block'});
    }, 1000);
});


/*kabinet partnera finance mobile*/
$('.finance .profile_menu').on('click', function() {
    $('.partner_menu, .profile_menu, .finance_bonuses_mobile').addClass('finance_mobile_hidden');
    $('.tab-content').removeClass('finance_mobile_hidden');
});

$('.finance_tab_title').on('click', function() {
    $('.partner_menu, .profile_menu, .finance_bonuses_mobile').removeClass('finance_mobile_hidden');
    $('.tab-content').addClass('finance_mobile_hidden');
});