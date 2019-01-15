$(function () {
	console.log ('DOM is loaded');

	$('.owl-carousel').owlCarousel({
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	
	$('select').uniform();

	$('.menu li').hover( function (e){
		$(this).children('ul').stop(false, true).fadeIn(1000);
		$(this).children('a').addClass('menu select');
	},
	function(e){
		$(this).children('ul').stop(false, true).fadeOut(1000);
		$(this).children('a').removeClass('menu select');
	});
});