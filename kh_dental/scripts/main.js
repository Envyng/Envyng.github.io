$(document).ready(function() {
    
    $('.burger').on('click', function() {
        $('.main_menu ul').toggleClass('hidden-xs');
    });
    
    if($(document).width() < 768) {
        $('.footer_column h2').on('click', function() {
            $(this).toggleClass('active');
            $(this).next('.mobile_footer_content').slideToggle();
        })
    }
});
