$(document).ready(function() {
    
    /*main menu mobile*/
    var width = $(document).width();
    
    /*скрытие меню при открытии страницы на мобильном устройстве*/
    if(width < 768) {
        $('.subheader').hide(); 
    } 
    
    /*появление меню при нажатии на три черточки*/
    $('.burger').on('click', function() {
        $('.subheader').slideDown();
    });
    
    /*скрытие меню при нажатии на крестик*/
    $('.menu_close').on('click', function() {
        $('.subheader').slideUp();
    });
    
    /*скрытие и раскрытие меню при изменении ширины страницы*/
    $(window).resize(function() {
        if($(document).width() < 768) {
            $('.subheader').hide(); 
        }else{
            $('.subheader').show();
        } 
    });
});