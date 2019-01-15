requirejs.config({
	paths: {
		jquery: 'https://code.jquery.com/jquery-1.12.4.min',
		template: 'template'
	}
});

require(
	['controller', 'model', 'view', 'jquery'],

	function (Controller, Model, View) {
		var defaultToDoList = ['learn javascript', 'learn html', 'make coffee'];
		var model = new Model(defaultToDoList);
		var view = new View(model);
		var controller = new Controller(model, view);
	}

	);
