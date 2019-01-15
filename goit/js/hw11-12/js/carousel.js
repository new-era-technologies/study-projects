(function($) {

	$.fn.carousel = function() {

		var leftArrow = $('.carousel__arrow-left');
		var rightArrow = $('.carousel__arrow-right');
		var elementsList = $('.carousel__list');

		var pxOffset = 500;
		var leftValue = 0;
		var elementsCounter = elementsList.find('li').length;
		var minOffset = - ((elementsCounter - 1) * pxOffset);
		var maxOffset = 0;

		leftArrow.click(function() {
			if (leftValue != maxOffset) {
				leftValue += 500;
				elementsList.animate({
					left: leftValue + "px"
				}, 2000);
			}
		});
		rightArrow.click(function() {
			if (leftValue !=minOffset) {
				leftValue -= 500;
				elementsList.animate({
					left: leftValue + "px"
				}, 2000);
			}
		});
	}
})(jQuery);