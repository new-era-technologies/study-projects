$ (function () {
	console.log ('DOM is loaded');

	var $body = $(document.body);
		$body.css({
			background: 'grey',
			fontFamily: 'Tahoma'
		});

	var $tabs = $('.tabs');
		$tabs.css ({
			margin: '100px 150px',
			color: 'black'
		});

	var $tabsControl = $('.tabs__control');
		$tabsControl.css ({
			width: '905px',
			margin: '0',
			padding: '5px 5px 0 5px',
			background: 'fuchsia',
			listStyle: 'none',
			borderBottom: '2px solid white'
		});

	var $tabsControlItem = $('.tabs__control-item');
		$tabsControlItem.css ({
			display: 'inline-block',
			fontSize: '20px',
			borderTop: '2px solid white',
			borderLeft: '2px solid white',
			borderRight: '2px solid white',
			background: 'grey'
		});

		$('.first')
			.css('background', 'black');

	var $tabsControlLink = $('.tabs__control-link');
		$tabsControlLink.css ({
			color: 'white',
			display: 'block',
			textDecoration: 'none',
			padding: '0 15px',
			lineHeight: '30px'
		});

		$tabsControlLink.on ('click', function(e) {
					e.preventDefault();
					var tabsItem = $(this).closest('.tabs__control-item'),
					tabsContent = $('.tabs__content-item'),
					tabsItemPosition = tabsItem.index();
						
					tabsContent.eq(tabsItemPosition)
					.css('display', 'block')
					.siblings()
					.css('display', 'none');
						
					tabsItem
						.css('background', 'black')
						.siblings()
						.css('background', 'grey');

		});

		$tabsControlLink.hover (
			function () {
				$(this).css('color', 'plum');
				console.log ('fedf');
			},
			function () {
				$(this).css('color', 'white')
			});

		$tabsControlItem.hover (
			function () {
				$(this).css({
					borderTop: '2px solid plum',
					borderLeft: '2px solid plum',
					borderRight: '2px solid plum',
				});
				console.log ('fedf');
			},
			function () {
				$(this).css({
					borderTop: '2px solid white',
					borderLeft: '2px solid white',
					borderRight: '2px solid white'
				})
			});

	var $tabsContent = $('.tabs__content');
		$tabsContent.css ({
			width: '905px',
			margin: '0',
			padding: '5px 5px 10px 5px',
			background: 'orange',
			listStyle: 'none',
			fontSize: '15px'
		});

	var $tabsContentItem = $('.tabs__content-item');
		$tabsContentItem.css ({
			display: 'none',
			textIndent: '20px'
		});

		$('.active')
			.css('display', 'block');
});