$(document).ready(function() {
    $('.subheader').hide();   
    $('.burger').on('click', function() {
        $('.subheader').slideDown();
    });
    $('.menu_close').on('click', function() {
        $('.subheader').slideUp();
    });
});