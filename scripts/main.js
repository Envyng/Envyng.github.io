/*google maps*/
var map;
var map2;
var iconMain = '../images/main_marker.png';
function initMap() {
    map = new google.maps.Map(document.getElementById('googlemap'), {
        center: {lat: 44.709166, lng: 37.778454},
        zoom: 15,
        disableDefaultUI: true
    });
    
    map2 = new google.maps.Map(document.getElementById('googlemap2'), {
        center: {lat: 44.709166, lng: 37.778454},
        zoom: 15,
        disableDefaultUI: true
    });
    
    
    var mainMarker = new google.maps.Marker({
        position: {lat: 44.709166, lng: 37.778454},
        map: map,
        icon: iconMain
    });
    
    var mainMarker2 = new google.maps.Marker({
        position: {lat: 44.709166, lng: 37.778454},
        map: map2,
        icon: iconMain
    });
    
    var parkFrunze = new google.maps.Marker({
        position: {lat: 44.7194162, lng: 37.7773855},
        map: map,
        icon: '../images/ikon_park.png',
        title: 'Парк Фрунзе'
    });
    
    var parkFrunzeAktive = new google.maps.Marker({
        position: {lat: 44.7194162, lng: 37.7773855},
        icon: '../images/ikon_park_aktive.png',
        title: 'Парк Фрунзе'
    });
    
    var serebryakov = new google.maps.Marker({
        position: {lat: 44.7194162, lng: 37.7773855},
        map: map,
        icon: '../images/ikon_scl.png',
        title: 'Набережная Серебрякова'
    });


    var serebryakovAktive = new google.maps.Marker({
        position: {lat: 44.7194162, lng: 37.7773855},
        icon: '../images/ikon_scl_active.png',
        title: 'Набережная Серебрякова'
    });
    
    var buttonAll = document.querySelector(".all_categories");
    buttonAll.addEventListener('click', function() {
        parkFrunze.setMap(null);
        serebryakov.setMap(null);
        serebryakovAktive.setMap(map);
        parkFrunzeAktive.setMap(map);
    });
}



/*jquery functions*/
$(document).ready(function() {  
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
    
    

    
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    
    
});
