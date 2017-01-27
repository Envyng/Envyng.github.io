$(document).ready(function() {
    
    /*main menu mobile*/
    $('.burger').on('click', function() {
        $('.main_menu ul').toggleClass('hidden-xs');
        
    });
    
    /*Управление блоком услуг*/
    $('.services_block_item').on('click', function() {
        $('.services_block_content').removeClass('hidden');
        if($(this).hasClass('cort')) {
            $('.services_block_content_cort').removeClass('hidden');
        }
        if($(this).hasClass('dealings')) {
            $('.services_block_content_dealings').removeClass('hidden');
        }
        if($(this).hasClass('issuance')) {
            $('.services_block_content_issuance').removeClass('hidden');
        }
        if($(this).hasClass('consultation')) {
            $('.services_block_content_consultation').removeClass('hidden');
        }
        if($(this).hasClass('serv')) {
            $('.services_block_content_serv').removeClass('hidden');
        }
        if($(this).hasClass('audit')) {
            $('.services_block_content_audit').removeClass('hidden');
        }
    });
    
    $('.services_block_content_close').on('click', function() {
        $('.services_block_content').addClass('hidden');
        if($('.services_block_content_item') !== true) {
            $('.services_block_content_item').addClass('hidden');
        }
    });
    
    
    /*stories slider*/
    var width = $(document).width();
    
    /*скрытие меню при открытии страницы на мобильном устройстве*/
    if(width > 1199) {
        $('.stories_carousel').owlCarousel({
            nav: true,
            dots: false,
            items: 3
        });
    } 
    if(width < 1200 && width > 767) {
        $('.stories_carousel').owlCarousel({
            nav: true,
            dots: false,
            items: 2
        });
    }
    if(width < 768) {
        $('.stories_carousel').owlCarousel({
            nav: true,
            dots: false,
            items: 1
        });
    }
});
