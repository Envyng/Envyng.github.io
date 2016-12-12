/*google maps*/
var map;
var map2;

var buttonAll = document.querySelector(".all_categories");
var buttonParks = document.querySelector(".parks");
var buttonKindergartens = document.querySelector(".kindergartens");
var buttonSchools = document.querySelector(".schools");
var buttonVuz = document.querySelector(".vuz");
var buttonYacht = document.querySelector(".yacht_club");
var buttonFrunze = document.querySelector(".frunze");
var buttonSerebryakov = document.querySelector(".serebryakov");
var buttonAbrau = document.querySelector(".abrau");
var mapObjctsLi = document.querySelectorAll(".map_sobjects li");

var removeLiclass = function() {
    for(var i = 0; i < mapObjctsLi.length; i++) {
        mapObjctsLi[i].classList.remove('active');
    }       
};

var mapPopup = document.querySelector(".map_popup");


var iconMain = 'images/main_marker.png';

var scl = 'images/ikon_scl.png';
var sclActive = 'images/ikon_scl_active.png';
var park = 'images/ikon_park.png';
var parkActive = 'images/ikon_park_aktive.png';
var ship = 'images/ikon_ship.png';
var shipActive = 'images/ikon_ship_active.png';

window.initMap = function() {
    /*Инициализация карт*/
    /*Основная карта*/
    map = new google.maps.Map(document.getElementById('googlemap'), {
        center: {lat: 44.7164734, lng: 37.7768169},
        zoom: 14,
        disableDefaultUI: true,
        scrollwheel : false,
        draggable: false
    });
    
    /*Карта с адресом*/
    map2 = new google.maps.Map(document.getElementById('googlemap2'), {
        center: {lat: 44.709166, lng: 37.778454},
        zoom: 15,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false
    });
    
    
    /*Установка кастомных маркеров*/
    var mainMarker = new google.maps.Marker({
        position: {lat: 44.709166, lng: 37.778454},
        map: map,
        icon: iconMain,
        title: 'Резиденция',
        zIndex: 1
    });
    
    var mainMarker2 = new google.maps.Marker({
        position: {lat: 44.709166, lng: 37.778454},
        map: map2,
        icon: iconMain,
        title: 'Резиденция',
        zIndex: 1
    });
    
    var parkFrunze = new google.maps.Marker({
        position: {lat: 44.7123338, lng: 37.7800083},
        map: map,
        icon: park,
        title: 'Парк Фрунзе',
        zIndex: 2
    });
    
    var parkFrunzeAktive = new google.maps.Marker({
        position: {lat: 44.7123338, lng: 37.7800083},
        
        icon: parkActive,
        title: 'Парк Фрунзе',
        zIndex: 7
    });
    
    var serebryakov = new google.maps.Marker({
        position: {lat: 44.7083238, lng: 37.7854153},
        map: map,
        icon: scl,
        title: 'Набережная Серебрякова',
        zIndex: 3
    });

    var serebryakovAktive = new google.maps.Marker({
        position: {lat: 44.7083238, lng: 37.7854153},
        
        icon: sclActive,
        title: 'Набережная Серебрякова',
        zIndex: 8
    });
    
    var marineStation = new google.maps.Marker({
        position: {lat: 44.7211398, lng: 37.7808233},
        map: map,
        icon: ship,
        title: 'Морской вокзал',
        zIndex: 4
    });

    var marineActive = new google.maps.Marker({
        position: {lat: 44.7211398, lng: 37.7808233},
        
        icon: shipActive,
        title: 'Морской вокзал',
        zIndex: 9
    });
    
    var horseAndDolphin = new google.maps.Marker({
        position: {lat: 44.706387, lng: 37.7860805},
        map: map,
        icon: scl,
        title: 'Ресторан Конь и дельфин',
        zIndex: 5
    });

    var horseActive = new google.maps.Marker({
        position: {lat: 44.706387, lng: 37.7860805},
        
        icon: sclActive,
        title: 'Ресторан Конь и дельфин',
        zIndex: 11
    });
    
    var yachtClub = new google.maps.Marker({
        position: {lat: 44.7108168, lng: 37.7823363},
        map: map,
        icon: ship,
        title: 'Яхт-клуб',
        zIndex: 6
    });

    var yachtActive = new google.maps.Marker({
        position: {lat: 44.7108168, lng: 37.7823363},
        
        icon: shipActive,
        title: 'Яхт-клуб',
        zIndex: 10
    });
    
    /*Управление маркерами на карте*/
    buttonAll.addEventListener('click', function() {
        removeLiclass();
        buttonAll.classList.add('active');
        
        parkFrunze.setMap(null);
        serebryakov.setMap(null);
        marineStation.setMap(null);
        horseAndDolphin.setMap(null);
        yachtClub.setMap(null);
        serebryakovAktive.setMap(map);
        parkFrunzeAktive.setMap(map);
        yachtActive.setMap(map);
        marineActive.setMap(map);
        horseActive.setMap(map); 
    });
    
    buttonParks.addEventListener('click', function() {
        removeLiclass();
        buttonParks.classList.add('active');
        
        parkFrunze.setMap(nul);
        serebryakov.setMap(map);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(map);
        serebryakovAktive.setMap(null);
        parkFrunzeAktive.setMap(map);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(null);     
    });
    
    buttonKindergartens.addEventListener('click', function() {
        removeLiclass();
        buttonKindergartens.classList.add('active');
        
        parkFrunze.setMap(map);
        serebryakov.setMap(map);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(map);
        serebryakovAktive.setMap(null);
        parkFrunzeAktive.setMap(null);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(null);   
    });
    
    buttonSchools.addEventListener('click', function() {
        removeLiclass();
        buttonSchools.classList.add('active');
        
        parkFrunze.setMap(map);
        serebryakov.setMap(map);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(map);
        serebryakovAktive.setMap(null);
        parkFrunzeAktive.setMap(null);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(null);
    });
    
    buttonVuz.addEventListener('click', function() {
        removeLiclass();
        buttonVuz.classList.add('active');
        
        parkFrunze.setMap(map);
        serebryakov.setMap(map);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(map);
        serebryakovAktive.setMap(null);
        parkFrunzeAktive.setMap(null);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(null);
    });
    
    buttonYacht.addEventListener('click', function() {
        removeLiclass();
        buttonYacht.classList.add('active');
        
        parkFrunze.setMap(map);
        serebryakov.setMap(map);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(null);
        serebryakovAktive.setMap(null);
        parkFrunzeAktive.setMap(null);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(map);
    });
    
    buttonFrunze.addEventListener('click', function() {
        removeLiclass();
        buttonFrunze.classList.add('active');
        
        parkFrunze.setMap(null);
        serebryakov.setMap(map);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(map);
        serebryakovAktive.setMap(null);
        parkFrunzeAktive.setMap(map);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(null);
    });
    
    buttonSerebryakov.addEventListener('click', function() {
        removeLiclass();
        buttonSerebryakov.classList.add('active');
        
        parkFrunze.setMap(map);
        serebryakov.setMap(null);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(map);
        serebryakovAktive.setMap(map);
        parkFrunzeAktive.setMap(null);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(null);
    });
    
    buttonAbrau.addEventListener('click', function() {
        removeLiclass();
        buttonAbrau.classList.add('active');
        
        parkFrunze.setMap(map);
        serebryakov.setMap(map);
        marineStation.setMap(map);
        horseAndDolphin.setMap(map);
        yachtClub.setMap(map);
        serebryakovAktive.setMap(null);
        parkFrunzeAktive.setMap(null);
        marineActive.setMap(null);
        horseActive.setMap(null);
        yachtActive.setMap(null);
    });
    
    
    /*Управления событиями при клике на иконки*/
    var popupShow = function() {
        mapPopup.classList.remove('hidden');
    };
    
    var slideParks = document.getElementById('map_carousel_parks');
    var slideSerebrykov = document.getElementById('map_carousel_serebrykov');
    var slideMarine = document.getElementById('map_carousel_kindergartens');
    var slideHorse = document.getElementById('map_carousel_schools');
    var slideYacht = document.getElementById('map_carousel_yacht');
    
    
    parkFrunze.addListener('click', function() {
        popupShow();
        slideParks.classList.remove('hidden');
    });
    
    parkFrunzeAktive.addListener('click', function() {
        
        popupShow();
        slideParks.classList.remove('hidden');
    });
    
    serebryakov.addListener('click', function() {
        popupShow();
        slideSerebrykov.classList.remove('hidden');
    });
    
    serebryakovAktive.addListener('click', function() {
        popupShow();
        slideSerebrykov.classList.remove('hidden');
    });
    
    marineStation.addListener('click', function() {
        popupShow();
        slideMarine.classList.remove('hidden');
    });
    
    marineActive.addListener('click', function() {
        popupShow();
        slideMarine.classList.remove('hidden');
    });
    
    horseAndDolphin.addListener('click', function() {
        popupShow();
        slideHorse.classList.remove('hidden');
    });
    
    horseActive.addListener('click', function() {
        popupShow();
        slideHorse.classList.remove('hidden');
    });
    
    yachtClub.addListener('click', function() {
        popupShow();
        slideYacht.classList.remove('hidden');
    });
    
    yachtActive.addListener('click', function() {
        popupShow();
        slideYacht.classList.remove('hidden');
    });

    
}



/*jquery functions*/
$(document).ready(function() {
    
    /*Управление меню*/
    $('.burger').on('click', function() {
        $(this).addClass('hidden');
        $('.menu_hiden_wrap, .menu_close.desctop_hidden').removeClass('hidden');
    });
    
    $('.menu_close').on('click', function() {
        $('.menu_hiden_wrap, .menu_close.desctop_hidden').addClass('hidden');
        $('.burger').removeClass('hidden');
    });
    
    
    /*блок над картой*/
    $('.map_up').on('click', function() {
        $('.map_structura').addClass('hidden');
        $('.map_down').removeClass('mobile_hidden');
    });
    
    $('.map_down').on('click', function() {
        $(this).addClass('mobile_hidden');
        $('.map_structura').removeClass('hidden');
    });
    
    $('popup_question:not(.question_wrap)').on('click', function() {
        $('.popup_question.dop').addClass('hidden');
    });
    
    
    /*выключение попапов при клике на пустом пространстве*/
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".question_wrap"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.popup_question,  .popup_bg').addClass('hidden'); // скрываем его
                 
            }
        });
    });
    
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".thanks_wrap"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.popup_thanks, .popup_bg').addClass('hidden'); // скрываем его
            }
        });
    });
    
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".main_popup .carousel-inner, .main_popup .carousel-control.right, .main_popup .carousel-control.left"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.main_popup, .popup_bg').addClass('hidden'); // скрываем его
            }
        });
    });
    
    
    /*Инициализация карусели на карте*/
    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:30,
        autoWidth:true,
        responsive:{
            600:{
                items:5
            }
        }
    });
    
    /*Инициализация карусели в меню раздела actions*/
    $('.actions_menu').owlCarousel({
        
        items:2,
        loop:true,
        margin:30,
        responsive:{
            600:{
                items:2
            }
        }
    });
    
    $('.owl-carousel').owlCarousel();
    
    /*Управление каруселью в меню раздела actions*/
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    
    var count = 1;
    var size = $('.actions_menu .owl-item').size() - 4;
    $('.prev_tab').click(function() {
        owl.trigger('prev.owl.carousel');
        if(count === 1) {
            count = size;
        }else{
            count--;
        }
        var selektor = 'a[data-number = ' + count + ']';
        $(selektor).tab('show');
    });
    $('.next_tab').click(function() {
        owl.trigger('next.owl.carousel');
        if(count === size) {
            count = 1;
        }else{
            count++;
        }
        var selektor = 'a[data-number = ' + count + ']';
        $(selektor).tab('show');
    });
    $('.actions_menu .owl-item a').click(function() {
        owl.trigger('next.owl.carousel');
        count++;
    })
    
    
    /*Слайдеры*/
    /*Слайдеры на карте*/
    $('#map_carousel_parks').carousel();
    $('#map_carousel_kindergartens').carousel();
    $('#map_carousel_schools').carousel();
    
    /*Слайдер банки партнеры*/
    $('#myCarousel2').carousel();
    
    /*Слайдеры планов квартир*/
    $('#main_descr_studio').carousel();
    $('#main_descr_room1').carousel();
    $('#main_descr_room2').carousel();
    $('#main_descr_room3').carousel();
    $('#main_descr_room4').carousel();
    $('#main_descr_room5').carousel();
    $('#plans_plan1').carousel();
    $('#plans_plan2').carousel();
    $('#plans_plan3').carousel();
    $('#plans_plan4').carousel();
    
    
    /*слайдер ход строительства на мобильной версии сайта*/
    if($('html').width() < 769) {
        $('#june16').carousel();
        $('#may16').carousel();
        $(".proseed_gallery .item").removeAttr('data-toggle');
        $("#june16 .item").on('click', function(event) {
            event.preventDefault();
            $("#june16").carousel("next");
        });
        
        $("#may16 .item").on('click', function(event) {
            event.preventDefault();
            $("#may16").carousel("next");
        });
    };
    
    /*кнопки меню ход строительства*/
    $('.proseed ul li a').on('click', function() {
        $('.proseed ul li a').removeClass('active');
        $(this).addClass('active');
    });
    
    
    /*Счетчик слайдов на слайдере парков*/
    var mapCarouselCountPark = 1;
    var mapCarouselLengthPark = $('#map_carousel_parks .item').size();
    
    $('#map_carousel_parks .current_photo').text(mapCarouselCountPark);
    $('#map_carousel_parks .amount_photo').text(mapCarouselLengthPark);
    
    $('.carousel-control.left').on('click', function() {
        
        if(mapCarouselCountPark === 1) {
            mapCarouselCountPark = mapCarouselLengthPark;
        }else{
            mapCarouselCountPark--;
        }
         
        $('#map_carousel_parks .current_photo').text(mapCarouselCountPark);
        $('#map_carousel_parks .amount_photo').text(mapCarouselLengthPark);
        
    });
    $('.carousel-control.right').on('click', function() {
        if(mapCarouselCountPark === mapCarouselLengthPark) {
            mapCarouselCountPark = 1;
        }else{
            mapCarouselCountPark++;
        }
         
        $('#map_carousel_parks .current_photo').text(mapCarouselCountPark);
        $('#map_carousel_parks .amount_photo').text(mapCarouselLengthPark);
    });
    
    
    /*Счетчик слайдов на слайдере детских садов*/
    var mapCarouselCountDS = 1;
    var mapCarouselLengthDS = $('#map_carousel_kindergartens .item').size();
    
    $('#map_carousel_kindergartens .current_photo').text(mapCarouselCountDS);
    $('#map_carousel_kindergartens .amount_photo').text(mapCarouselLengthDS);
    
    $('.carousel-control.left').on('click', function() {
        if(mapCarouselCountDS === 1) {
            mapCarouselCountDS = mapCarouselLengthDS;
        }else{
            mapCarouselCountDS--;
        }
         
        $('map_carousel_kindergartens .current_photo').text(mapCarouselCountDS);
        $('#map_carousel_kindergartens .amount_photo').text(mapCarouselLengthDS);
        
    });
    $('.carousel-control.right').on('click', function() {
        if(mapCarouselCountDS === mapCarouselLengthDS) {
            mapCarouselCountDS = 1;
        }else{
            mapCarouselCountDS++;
        }
         
        $('#map_carousel_kindergartens .current_photo').text(mapCarouselCountDS);
        $('#map_carousel_kindergartens .amount_photo').text(mapCarouselLengthDS);
    });
    
    
    /*Счетчик слайдов на слайдере школ*/
    var mapCarouselCountSchool = 1;
    var mapCarouselLengthSchool = $('#map_carousel_schools .item').size();
    
    $('#map_carousel_schools .current_photo').text(mapCarouselCountSchool);
    $('#map_carousel_schools .amount_photo').text(mapCarouselLengthSchool);
    
    $('.carousel-control.left').on('click', function() {
        
        if(mapCarouselCountSchool === 1) {
            mapCarouselCountSchool = mapCarouselLengthSchool;
        }else{
            mapCarouselCountSchool--;
        }
         
        $('#map_carousel_schools .current_photo').text(mapCarouselCountSchool);
        $('#map_carousel_schools .amount_photo').text(mapCarouselLengthSchool);
        
    });
    $('.carousel-control.right').on('click', function() {
        if(mapCarouselCountSchool === mapCarouselLengthSchool) {
            mapCarouselCountSchool = 1;
        }else{
            mapCarouselCountSchool++;
        }
         
        $('#map_carousel_schools .current_photo').text(mapCarouselCountSchool);
        $('#map_carousel_schools .amount_photo').text(mapCarouselLengthSchool);
    });
    
    
    /*Закрытие попапа на карте*/
    $('.map_popup_close').on('click', function() {   
        $('.map_popup, #main_descr_studio, #main_descr_room1, #main_descr_room2, #main_descr_room3,  #main_descr_room4, #main_descr_room5, #plans_plan1, #plans_plan2, #plans_plan3, #plans_plan4').addClass('hidden');
        $('.map_popup .slide').addClass('hidden');
        $('.popup_bg').addClass('hidden');
        mapCarouselCountPark = 1;
        mapCarouselCountDS = 1;
        mapCarouselCountSchool = 1;
        $('#map_carousel_parks .current_photo').text(mapCarouselCountPark);
        $('#map_carousel_kindergartens .current_photo').text(mapCarouselCountDS);
        $('#map_carousel_schools .amount_photo').text(mapCarouselLengthSchool);
    });
    
    
    
    /*Лайтбоксы*/
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    
    $('.studio').on('click', function(event) {
        event.preventDefault();
        $('#main_descr_studio, .popup_bg').removeClass('hidden');        
    });
    
    $('.room1').on('click', function(event) {
        event.preventDefault();
        $('#main_descr_room1, .popup_bg').removeClass('hidden');
    });
    
    $('.room2').on('click', function(event) {
        event.preventDefault();
        $('#main_descr_room2').removeClass('hidden');
    });
    
    $('.room3').on('click', function(event) {
        event.preventDefault();
        $('#main_descr_room3, .popup_bg').removeClass('hidden');
    });
    
    $('.room4').on('click', function(event) {
        event.preventDefault();
        $('#main_descr_room4, .popup_bg').removeClass('hidden');
    });
    
    $('.room5').on('click', function(event) {
        event.preventDefault();
        $('#main_descr_room5, .popup_bg').removeClass('hidden');
    });
    
    $('.plans_item1 .look').on('click', function(event) {
        event.preventDefault();
        $('#plans_plan1, .popup_bg').removeClass('hidden');
    });
    
    $('.plans_item2 .look').on('click', function(event) {
        event.preventDefault();
        $('#plans_plan2, .popup_bg').removeClass('hidden');
    });
    
    $('.plans_item3 .look').on('click', function(event) {
        event.preventDefault();
        $('#plans_plan3, .popup_bg').removeClass('hidden');
    });
    
    $('.plans_item4 .look').on('click', function(event) {
        event.preventDefault();
        $('#plans_plan4, .popup_bg').removeClass('hidden');
    });
    
    
    /*Плавная прокрутка меню*/
    $(".menu1").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 200);
    });
    
    $(".menu2").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
    
    $(".menu3").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
    
    $(".menu4").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
    
    $(".menu5").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $(".menu6").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
    
    $(".menu7").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1400);
    });
    
    $(".menu8").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1600);
    });

    
    /*Закрытие модальных окон*/
    /*Закрытие модального окно по клику на крестик*/
    $('.question_close').on('click', function() {
        $('#header_request_call, #main_descr_popup, #about_request_call, #submit_application, #actions_reservation, #option_offers_more, #hypothec_specialist_order, #aye_question').modal("hide"); 
    });
    
    /*Закрытие модального окна по клику на кнопку*/
    $('.modal_button').on('click', function(event) {
        
        /*Прекращение выполнения действия кнопки по умолчанию. Раскомментировать если необходимо*/
        /*event.preventDefault();*/
        
        $('#header_request_call, #main_descr_popup, #about_request_call, #submit_application, #actions_reservation, #option_offers_more, #hypothec_specialist_order, #aye_question').modal("hide"); 
    });
});
