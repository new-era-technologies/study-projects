'use strict';

$(function () {

	var getTest = localStorage.getItem('questions');
	var parseTest = JSON.parse(getTest);

	var html = $('#main').html();
	var content = tmpl(html, {
		data: parseTest
	});

	$('body').append(content);

	var get = localStorage.getItem('replies');
	var getRepl = JSON.parse(get);

	var userRepl = void 0;
	var corCounter = 0;
	var badCounter = 0;

	var checkArr = function checkArr() {

		var userRepl = new Array();
		$('input:checked').each(function () {
			userRepl.push($(this).parent().text());
		});

		if (JSON.stringify(userRepl) == JSON.stringify(getRepl)) {
			$('.modal').css({ display: 'block' });
			$('#congr').text("NICE");
			$('.modal-overlay').css({ display: 'block' });
			$('.modal-overlay').animate({
				opacity: 1
			}, 1000);
			$('.modal').animate({
				left: '+=-230',
				top: '+=-150'
			}, 1500, 'easeOutBack');
			$('#correct_answers').animate({
				opacity: 1
			}, 7500);
			$('#bad_answers').animate({
				opacity: 1
			}, 3500);
		} else {
			$('.modal').css({ display: 'block' });
			$('.modal-overlay').css({ display: 'block' });
			$('.modal-overlay').animate({
				opacity: 1
			}, 1000);
			$('.modal').animate({
				left: '+=-230',
				top: '+=-150'
			}, 1500, 'easeOutExpo');
			$('#correct_answers').animate({
				opacity: 1
			}, 3500);
			$('#bad_answers').animate({
				opacity: 1
			}, 7500);
		}

		if (userRepl[0] == getRepl[0]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[1] == getRepl[1]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[2] == getRepl[2]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[3] == getRepl[3]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[4] == getRepl[4]) {
			corCounter++;
		} else {
			badCounter++;
		};

		$('#correct_answers').text("Your correct answers =  " + JSON.stringify(corCounter));
		$('#bad_answers').text("Your incorrect answers =  " + JSON.stringify(badCounter));
	};

	var $close = $('#button_close');
	$close.on('click', function () {
		$('.modal-overlay').fadeOut(2000);
		setTimeout(close, 2100);
	});
	var close = function close() {
		location.reload();
	};

	$('.input_sub').on('click', function (e) {
		e.preventDefault();
		checkArr();
	});
});
