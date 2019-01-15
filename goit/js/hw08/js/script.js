$(function (forms) {
	console.log ('DOM is loaded');

	var $title = $('.title');

	$title.keydown(function(event) {
		if (event.which === 9) {
			$spanName.css('opacity', '1'),
			$spanName.css('display', 'block');
		}
	});
	
	var $firstName = $('#first_name');
	var $spanName = $('.f_name');

	$firstName.hover (
		function () {
			$spanName.css('opacity', '1'),
			$spanName.css('display', 'block');
		},
		function() {
			$spanName.css('opacity', '0'),
			$spanName.css('display', 'none');
		}
		);

	$firstName.keydown(function(event) {
		if (event.which === 9) { 
			$spanSurname.css('opacity', '1'),
			$spanSurname.css('display', 'block');
			$spanName.css('opacity', '0'),
			$spanName.css('display', 'none');
		}
	});

	var $lastName = $('#last_name');
	var $spanSurname = $('.l_name');
	
	$lastName.hover (
		function () {
			$spanSurname.css('opacity', '1'),
			$spanSurname.css('display', 'block');
		},
		function() {
			$spanSurname.css('opacity', '0'),
			$spanSurname.css('display', 'none');
		}
		);

	$lastName.keydown(function(event) {
		if (event.which === 9) { 
			$spanSurname.css('opacity', '0'),
			$spanSurname.css('display', 'none');
			$spanAdress.css('opacity', '1'),
			$spanAdress.css('display', 'block');
		}
	});

	var $adress = $('#adress');
	var $spanAdress = $('.adr');
	
	$adress.hover (
		function () {
			$spanAdress.css('opacity', '1'),
			$spanAdress.css('display', 'block');
		},
		function() {
			$spanAdress.css('opacity', '0'),
			$spanAdress.css('display', 'none');
		}
		);

	$adress.keydown(function(event) {
		if (event.which === 9) { 
			$spanAdress.css('opacity', '0'),
			$spanAdress.css('display', 'none');
		}
	});

	var $button = $('.help');

	$button.on ('click', function(e) {
		e.preventDefault();
		$spanName.css({opacity: 1, display: 'block'}, 1000);
		$spanSurname.css({opacity: 1, display: 'block'}, 1000);
		$spanAdress.css({opacity: 1, display: 'block'}, 1000);
	})
})