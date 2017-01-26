$(document).ready(function() {
    /*input mask*/
    $("#writeCall").mask("+7(999)999-99-99");
    
    
    /*лайтбокс галереи*/
        $("a.fancyimage").fancybox(); 
    
    
    $('.burger').on('click', function() {
        $('.header_right').slideToggle();
    })
    
});
