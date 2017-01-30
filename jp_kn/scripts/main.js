$(document).ready(function() {
    $('[data-mask="true"]').inputmask({ greedy: false, placeholder: '' });
    
    
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


    $('body').on('click', '.promotion_video > .youtube-launcher', function() {
        $(this).hide();
        var ifr = $(this).closest('.promotion_video').find('iframe');
        ifr[0].src += '&autoplay=1';
        ifr.show();
    });

    var regMail = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

    $('body').on('submit', '#contactForm', function(e) {
        e.preventDefault();
        var cForm = $(this);
        var cFormData = cForm.serialize();


        if($(this).find('input[name="first_name"]').val().length < 2) {
            $(this).find('input[name="first_name"]').css({'background-color':'rgba(255, 137, 130, 1)'});
            setTimeout(function(){
                cForm.find('input[name="first_name"]').removeAttr('style');
            },500);
        } else {
            $(this).find('input[name="first_name"]').removeAttr('style');
        }

        if($(this).find('input[name="last_name"]').val().length < 2) {
            $(this).find('input[name="last_name"]').css({'background-color':'rgba(255, 137, 130, 1)'});
            setTimeout(function(){
                cForm.find('input[name="last_name"]').removeAttr('style');
            },500);
        } else {
            $(this).find('input[name="last_name"]').removeAttr('style');
        }

        if($(this).find('input[name="phone"]').val().length < 5) {
            $(this).find('input[name="phone"]').css({'background-color':'rgba(255, 137, 130, 1)'});
            setTimeout(function(){
                cForm.find('input[name="phone"]').removeAttr('style');
            },500);
        } else {
            $(this).find('input[name="phone"]').removeAttr('style');
        }

        if($(this).find('input[name="email"]').val().match(regMail)) {
            $(this).find('input[name="email"]').removeAttr('style');
        } else {
            $(this).find('input[name="email"]').css({'background-color':'rgba(255, 137, 130, 1)'});
            setTimeout(function(){
                cForm.find('input[name="email"]').removeAttr('style');
            },500);
        }
        if(
            $(this).find('input[name="first_name"]').val().length >= 2 &&
            $(this).find('input[name="last_name"]').val().length >= 2 &&
            $(this).find('input[name="phone"]').val().length >= 5 &&
            $(this).find('input[name="email"]').val().match(regMail)
        ) {
            $.ajax({
                type: "POST",
                url: "./",
                data: cFormData,
                success: function(data) {
                    if(data == 'ok') {
                        $('#thanksModal').modal('show');
                    }
                },
                error: function() {
                }
            });
        }
    });

});
