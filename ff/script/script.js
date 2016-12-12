$('.x-city-header-select,.x-city-news-select').on('click', function () {
    $(this).parents('.b-city-select').find('.x-city-header-select-list').toggleClass('b-city-select-list-open');
    $(this).parents('.b-city-select').find('.b-city-select-btn').toggleClass('b-city-select-active');
});
$("body").click(function(e) {
    if($(e.target).closest(".b-city-select").length==0){
        $(".x-city-header-select").removeClass('b-city-select-active');
        $(".x-city-header-select-list").removeClass('b-city-select-list-open');
    }
});
$('.x-city-header-select-list .b-csl').on('click', function () {
    var text = $(this).text();
    $(this).parents('.b-city-select').find('.b-city-select-btn').text(text).removeClass('b-city-select-active');
    $('.x-city-header-select-list').removeClass('b-city-select-list-open');
});
$('.panel_open, .panel_close').on('click', function() {
    $(this).parents('.panel_normal').toggleClass('panel_active');
    $(this).parents('.panel_wrap').find('.tab_panel').toggleClass('tab_panel_hidden');
    $(this).parents('.panel_wrap').find('.panel_open').toggleClass('panel_close');
});

$('.apply_block_close').on('click', function() {
    $(this).parents('.panel_wrap').find('.panel_normal').removeClass('panel_active');
    $(this).parents('.panel_wrap').find('.tab_panel').addClass('tab_panel_hidden');
    $(this).parents('.panel_wrap').find('.panel_close').addClass('panel_open').removeClass('panel_close');
});
