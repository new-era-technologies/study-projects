'use strict';

$(function() {
	var $links = $('.main__col2-link');

	$links.on('click', function(e) {

		var $submenu = $('.main__col2-sub-list');
		e.preventDefault();
		$submenu.slideUp();
		$('.main__col2-link').children('p').html('+');
		$('.main__col2-link').removeClass('active');

		if ($(this).next().is(':visible')) {
			$(this).next().slideUp();
			$(this).children('p').html('+');
			$(this).removeClass('active');
		} else {
			$(this).next().slideToggle();
			$(this).children('p').html('-');
			$(this).addClass('active');
		}
		
	});

	$('.owl-carousel').owlCarousel({
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	
});