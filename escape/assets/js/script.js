var carouselopt = {
	items:1,
	margin:30,
	nav:true,
	loop:true,
};
var test;

$(document).ready(function(){
	
	$('button#morecrew').on('click',function(){$('.more-crew-block').slideToggle('slow'); $(this).toggleClass('closed')})
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href") // activated tab
		$(target+' .slider').owlCarousel(carouselopt);
	});
	
	
	$('.slider').each(function(){
		var tab= $(this).parents('.tab-pane');
		var scrolldiv = tab.find('.scroll');
		var images = $(this).children();
		
		images.each(function(){
			scrolldiv.append('<div class="photo-small" style="background-image: url('+$(this).find('img').attr('src')+')"></div>');
		})
		
		//$(this).owlCarousel(carouselopt);
	});
	
	$('.tab-pane.active .slider').owlCarousel(carouselopt);
	
	var scroll1 = $(".col-md-2.scroll").niceScroll({
		autohidemode:false,
		background:"url(./assets/images/scrollback.png) no-repeat center center/ 100% 100%"
	});
	
	$('.col-md-2.scroll').on('click','.photo-small',function(){
		var images = $(this).find('img');
		var slider = test = $(this).parents('.tab-pane').find('.slider');
		slider.trigger('to.owl.carousel',$(this).index());
		//slider.append(images.clone());
		
		//slider.trigger('refresh.owl.carousel');
	});
	
	var topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});
	
	//console.log(topMenu[0],topMenuHeight,menuItems[0],scrollItems.length);
	
	// Bind to scroll
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight;
		
		//console.log(fromTop);
		
		// Get id of current scroll item
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
			return this;
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		//console.log(cur);
		
		var id = cur && cur.length ? cur[0].id : "";
		if(!(cur && cur.length)){
			topMenu.addClass('hidden');
		}else{
			topMenu.removeClass('hidden');
		}
		// Set/remove active class
		menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
	});
});



