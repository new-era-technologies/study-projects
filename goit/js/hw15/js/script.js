'use strict';

$(function() {
	
	function searchObj(word) {

		var request = new XMLHttpRequest();
		
		request.open('GET', 'https://pixabay.com/api/?key=3401085-01a522880906042e9a1cfaa9e&q='+word+'&image_type=photo', true);

		request.onreadystatechange = function() {
			
			if (request.status === 200 && request.readyState === 4) {

				var respText = JSON.parse(request.responseText);

				for (var i = 0; i < respText.hits.length; i++) {

					var imgSrc = respText.hits[i].webformatURL;
					$('.image').append('<a href="' + imgSrc + '" target="_blank"><img src="' + imgSrc + '"></a>');

				}

			} else if (request.status !== 200) {
				alert('Bad Request');
			}
		}
		request.send();
	};

	$('#input_submit').on('click', function(e) {
		e.preventDefault();
		var inputWord = $('#input_text').val();
		searchObj(inputWord);
	});

	$('#input_text').keydown(function(event) {
		if (event.which == 13) {
			var inputWord = $('#input_text').val();
			searchObj(inputWord);
		}
	});

	$('#button_clear').on('click', function() {
		location.reload();
	});

	$('body').keydown(function(event) {
		if (event.which == 27) {
			location.reload();
		}
	});
});