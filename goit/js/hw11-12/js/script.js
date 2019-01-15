$(function() {
	console.log ('DOM is loaded');

	$('.carousel__list').carousel();

	var html = $('#homework').html();
	var data = {
		name: 'Радионов Владимир Владимирович',
		photo: '',
		info: 'Студент GoIT FrontEnd',
		likes: 'Хочу учиться, потому что:',
		point1: 'Люблю учиться',
		point2: 'Мечтаю овладеть всеми навыками программирования и создавать сайты',
		point3: 'Надеюсь стать продвинутым айти-меном',
		point4: 'Нравится покорять вершины',
		tel: 'Мой контактный телефон  +380634732823',
		page: 'Мой профиль в фейсбуке'
	};
	var content = tmpl(html, data);
	$('body').append(content);

	var $photoMe = $('.photo');
	$photoMe.on ('click', function(e) {
		e.preventDefault();
		var $img = $('.photo_img');
		$img.css('display', 'block');
		$img.animate({
			opacity: 1
		}, 5000);
	});
})