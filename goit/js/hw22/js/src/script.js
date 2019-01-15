'use strict';

$(() => {

	let getTest = localStorage.getItem ('questions');
	let parseTest = JSON.parse(getTest);

	let html = $('#main').html();
	let content = tmpl(html, {
		data: parseTest
	});

	$('body').append(content);

	let get = localStorage.getItem ('replies');
	let getRepl = JSON.parse(get);

	let userRepl;
	let corCounter = 0;
	let badCounter = 0;

	let checkArr = () => {

		let userRepl = new Array();
		$('input:checked').each(function() {
			userRepl.push($(this).parent().text());
		});

		if (JSON.stringify(userRepl) == JSON.stringify(getRepl)) {
			$('.modal').css({display: 'block'});
			$('#congr').text("NICE");
			$('.modal-overlay').css({display: 'block'});
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
			$('.modal').css({display: 'block'});
			$('.modal-overlay').css({display: 'block'});
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

		if (userRepl[0]== getRepl[0]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[1]== getRepl[1]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[2]== getRepl[2]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[3]== getRepl[3]) {
			corCounter++;
		} else {
			badCounter++;
		};
		if (userRepl[4]== getRepl[4]) {
			corCounter++;
		} else {
			badCounter++;
		};

		$('#correct_answers').text("Your correct answers =  " + JSON.stringify(corCounter));
		$('#bad_answers').text("Your incorrect answers =  " + JSON.stringify(badCounter));

	};

	let $close = $('#button_close');
	$close.on('click', () => {
		$('.modal-overlay').fadeOut(2000);
		setTimeout(close, 2100);
	});
	let close = () => {
		location.reload();
	};

	$('.input_sub').on('click', e => {
		e.preventDefault();
		checkArr();
	});
	
});