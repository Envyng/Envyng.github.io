$('.x-closed-popup').on('click', function () {
    $(this).parents('.x-popup-container').hide();
    $('.x-popup-bg').hide();
    $('.x-blur').removeClass('b--amcp-popup-bg');
});
$('.x-popup-open').on('click', function (e) {
    e.preventDefault();
    $('.x-popup-container').show();
    $('.x-popup-bg').show();
});
//$('.x-popup-bg').on('click', function () {
//    $('.x-popup-container').hide();
//    $(this).hide();
//});
$('.x-sent-validate').on('click', function (e) {
    e.preventDefault();
    var phone = $(this).parents('.x-form').find('.x-phone').val();
    var thisInputPhone = $(this).parents('.x-form').find('.x-phone');
    var email = $(this).parents('.x-form').find('.x-email').val();
    var thisInputEmail = $(this).parents('.x-form').find('.x-email');
    var patternEmail = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var patternPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
    if(email != ''){
        if(email.search(patternEmail) == 0){
            thisInputEmail.removeClass('x--error').addClass('x-true');
        }else{
            thisInputEmail.removeClass('x-true').addClass('x--error');
        }
    }else{
        thisInputEmail.removeClass('x-true').addClass('x--error');
    }
    if(phone != ''){
        if(phone.search(patternPhone) == 0){
            thisInputPhone.removeClass('x--error').addClass('x-true');
        }else{
            thisInputPhone.removeClass('x-true').addClass('x--error');
        }
    }else{
        thisInputPhone.removeClass('x-true').addClass('x--error');
    }
});
$('.x-label').on('change', function () {
    $(this).toggleClass('b--label-active');
});
$('.b-nav-open').on('click', function () {
    $(this).toggleClass('b-nav-open-closed');
    $('.b-nav-open').not(this).parents('.x-form-block').removeClass('b--form-select-active');
    $('.b-nav-open').not(this).parents('.x-form-block').find('.b-nav-list').removeClass('x-show');
    $(this).parents('.x-select-wrapper').find('.b-nav-list').toggleClass('x-show');
    $(this).parents('.x-form-block').toggleClass('b--form-select-active');
});
$('.b-nav-list a').on('click', function () {
    $('.b-nav-list').removeClass('x-show');
    $('.x-form-block').removeClass('b--form-select-active');
});
$('.b-nav-list a').on('click', function (e) {
    e.preventDefault();
    var text = $(this).text();
    $(this).parents('.x-select-wrapper').find('.x-nav-button').text(text);
});
$("body").click(function(e) {
    if($(e.target).closest(".x-select-wrapper").length==0){
        $('.b-nav-list').removeClass('x-show');
        $('.x-form-block').removeClass('b--form-select-active');
    }
});
function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    $('.x-file-text').text(filename)
}
$('.x-tab-block').on('click', function () {
    $(this).parents('.x-tab').find('.x-tab-block').removeClass('b--tab-active');
    $(this).addClass('b--tab-active');
});
$('.x-checkbox').on('click', function () {
    $(this).parents('.x-rapper').toggleClass('b--label-active2');
});
$('.x-point').on('click', function () {
    $(this).toggleClass('b--point-active');
    $(this).parents('.x-rapper').toggleClass('b--label-active1');
});
$('.x-blur-add').on('click', function () {
    $('.x-blur').addClass('b--amcp-popup-bg');
});
//$('.x-blur-remove').on('click', function () {
//    $('.x-blur').removeClass('b--amcp-popup-bg');
//});
$('.x--popup-op1').on('click', function (e) {
    e.preventDefault();
    $('.x-popup-bg').show();
    var height = $('.x-adf-popup').height();
    var windowWidth = $(window).height();
    var top = (windowWidth / 2) - (height / 2);

    if(height < windowWidth){
        $('.x-adf-popup').show().css('top', top).addClass('b--style-popup');
    }else{
        $('.x-adf-popup').show().css('top', '30px').removeClass('b--style-popup');
        $('html,body').scrollTop(0);
    }
});
function bgSlider(){
    var item = 1;
    setInterval(function () {
        if(item >= 10){
            item = 0;
        }
        item++;

        $('#x-bg-slider').animate({opacity:0},500,function(){
            $(this).removeClass().addClass('b--main-bg' + item +  ' b-main-bg').animate({opacity:1},500)
        })
    },3000);
}
bgSlider();
$('.x-bg-slider').on('click', function () {

});


$('.x-sent-validate-form').on('click', function (e) {
    e.preventDefault();
    $(this).parents('form').find('input[type="text"],textarea').each(function(i, el){
        if( $.trim( $(el).val() ) == '' ) {
            $(el).addClass('x--error').next('div.x--alert-error').show();
        }else{
            $(el).removeClass('x--error').next('div.x--alert-error').hide()
        }
    });
});

$('.x-letter').limit('5000','.charsLeft');



/* ez */

$("#upload").change(function(){
    bgupload(this);
});

function bgupload(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            $('#uploadedimg').attr('src', e.target.result);
            $('#uploadedimg').css('display', 'block');
            $('#uploadedimg').closest('.st-photo').find('a').css('display', 'block');
        }

        reader.readAsDataURL(input.files[0]);
    }
}
$('#uploadedimg').closest('.st-photo').find('a').click(function() {
    $('#uploadedimg').attr('src', '');
    $('#uploadedimg').css('display', 'none');
    $('#uploadedimg').closest('.st-photo').find('a').css('display', 'none');
});