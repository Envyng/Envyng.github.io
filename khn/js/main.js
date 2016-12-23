$(document).ready(function() {
    var width = $(document).width();
    if(width < 768) {
        $('.subheader').hide(); 
    } 
    $('.burger').on('click', function() {
        $('.subheader').slideDown();
    });
    $('.menu_close').on('click', function() {
        $('.subheader').slideUp();
    });
});