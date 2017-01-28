$(document).ready(function() {
    
    /*Управление блоком услуг*/
    $('.services_block_jur, .services_block_fiz, .services_block_type').on('click', function() {
        $('.services_block_jur, .services_block_fiz, .services_block_type').toggleClass('active');
    });
    
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
    
    $('.services_block_content_close, .services_block_jur, .services_block_fiz, .services_block_type').on('click', function() {
        $('.services_block_content').addClass('hidden');
        if($('.services_block_content_item.hidden') !== true) {
            $('.services_block_content_item').addClass('hidden');
        }
    });
    
   /*page up*/
    $('.page_up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
    
    /*menu mobile*/
    $('.burger').on('click', function() {
        $('.main_menu_wrap').removeClass('hidden-xs');
    });
    
    $('.menu_close').on('click', function() {
        $('.main_menu_wrap').addClass('hidden-xs');
    }); 
    
    /*Управление страницей услуг*/
    $('.services_list_controls').on('click', function() {
        if($(this).parent('.services_list_item').hasClass('active')) {
            $('.services_list_item').removeClass('active');
        }else{
            $('.services_list_item').removeClass('active');
            $(this).parent('.services_list_item').addClass('active');
        }
        
    }); 
    
    /*анимации*/
    
    
    $(".services_block_item").hover(
        function() {
            $(this).children('.services_block_icon, .services_block_item_title').animate({top: "-200px"}, 0);
            $(this).children('.services_block_icon, .services_block_item_title').animate({top: "0"}, 1000);
    },
        function() {
            $(this).children('.services_block_icon, .services_block_item_title').animate({top: "-200px"}, 0);
            $(this).children('.services_block_icon, .services_block_item_title').animate({top: "0"}, 1000);

    });
    
    /*$(".services_block_item").mouseover(function() {
        $(this).children('.services_block_icon').animate({top: "-200px"}, 0);
        $(this).children('.services_block_icon').animate({top: "0"}, 1000);
    });
    $(".services_block_item").mouseover(function() {
        $(this).children('.services_block_icon').animate({top: "-200px"}, 0);
        $(this).children('.services_block_icon').animate({top: "0"}, 1000);
    });*/
    
    
    
});
