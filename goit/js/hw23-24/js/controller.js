define(
	'controller',
	[],
	function () {

		function Controller(model, view) {
			var self = this;
			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.li-item', changeItem);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}

			function changeItem() {
				var item = $(this).html();
				$('.changes').css('opacity', '1');
				$('.change-value').val(item);
				view.elements.changeBtn.on('click', function() {
					var newText = $('.change-value').val();
					model.changeItem(item, newText);
					view.renderList(model.data);
					$('.changes').css('opacity', '0');
				});
			}
		}

		return Controller;
	}
	);