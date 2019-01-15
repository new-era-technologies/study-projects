'use strict';

$(function() {

	$(function() {

		var jcarousel = $('.jcarousel');
		jcarousel.on('jcarousel:reload jcarousel:create', function() {
			var carousel = $(this),
			width = carousel.innerWidth();
			carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
		})
		.jcarousel({
			wrap: 'circular'
		});
		$('.slider-prev').jcarouselControl({
			target: '-=1'
		});
		$('.slider-next').jcarouselControl({
			target: '+=1'
		});

	});

	$(function() {
		function crossDomainAjax (url) {
			var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
			var xhr = new XHR();
			xhr.open('GET', url, false);
			xhr.onload = function() {
				var obj = $.parseJSON(this.responseText)
				var imgs = $('.grid-img');
				var titles = $('.grid-title');
				for (var i = 0; i < imgs.length; i++) {
					imgs[i].setAttribute('src', obj.hits[i].webformatURL);
					titles[i].innerHTML = obj.hits[i].tags;
				}
			}
			xhr.onerror = function() {
				console.log('Error' + this.status);
			}
			xhr.send();
		}

		function getImages() {
			var word = $('.search-input').val();
			if (word.length === 0) {
				var arr = ['star trek'];
				var rand = Math.floor(Math.random() * arr.length);
				word = (arr[rand]);
			}
			var request = (document.all && document.querySelector && !document.addEventListener) ? 'http' : 'https';
			crossDomainAjax(request + '://pixabay.com/api/?key=3401085-01a522880906042e9a1cfaa9e&q=' + word + '&image_type=photo', true);
			$('.search-input').val('');

			var $grid = $('.grid').imagesLoaded(function() {
				$grid.masonry({
					columnWidth: ".grid-sizer",
					itemSelector: ".grid-item"
				});
			});
		}

		$('#search-form').submit(function(e) {
			e.preventDefault();
			getImages();
		});

		getImages();
	});

});