var createDom = {

	createWrapper: function (tagName, tagClass) {

		var wrapper = document.createElement ('div');
			wrapper.classList.add ('wrapper');
			wrapper.style.maxWidth = '960px';
			wrapper.style.height = 'auto';
			wrapper.style.marginLeft = 'auto';
			wrapper.style.marginRight = 'auto';
			wrapper.style.paddingBottom = '1000000px';
			wrapper.style.marginBottom = '-1000000px';
			wrapper.style.overflow = 'hidden';
			wrapper.style.backgroundColor = "white";
		var body = document.getElementsByClassName ('body');
			document.body.bgColor = '#cae4fb';
			document.body.style.margin = '0';
			document.body.style.padding = '0';
			document.body.style.overflow = 'hidden';
			document.body.appendChild (wrapper);

		var h1 = document.createElement ('h1');
			h1.classList.add ('name');
			h1.innerHTML = 'Тест по программированию';
			h1.style.textAlign = 'center';
			h1.style.fontFamily = 'Arial';
			h1.style.fontWeight = 'normal';
			document.getElementsByClassName ('wrapper');
			wrapper.insertBefore (h1, wrapper.children[0]);

		var form = document.createElement ('form');
			form.setAttribute ('method', 'post');
			document.getElementsByClassName ('wrapper');
			wrapper.appendChild (form);

		var list = document.createElement ('ul');
			list.classList.add ('menu__wrapper');
			list.style.marginLeft = '100px';
			list.style.listStyleType = 'decimal';
			document.getElementsByClassName ('form');
			form.insertBefore (list, form.children[0]);

		var element = document.createElement ('li');
			element.classList.add ('menu__element');
			element.innerHTML = 'Вопрос №3';
			element.style.fontFamily = 'Arial';
			element.style.fontSize = '24px';
			document.getElementsByClassName ('menu__wrapper');
			list.insertBefore (element, list.children[0]);

		var subList = document.createElement ('ul');
			subList.classList.add ('sub_menu__wrapper');
			subList.style.listStyle = 'none';
			subList.style.marginLeft = '-40px';
			document.getElementsByClassName ('menu__element');
			element.insertBefore (subList, element.children[0]);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingTop = '15px';
			subElement.style.paddingBottom = '5px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.insertBefore (subElement, subList.children[0]);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №1';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingBottom = '5px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.appendChild (subElement);

		var label = document.createElement ('label');
			document.getElementsByClassName ('sub_menu__element');
			label.style.cursor = 'pointer';
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №2';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingBottom = '15px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.appendChild (subElement);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №3';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var element = document.createElement ('li');
			element.classList.add ('menu__element');
			element.innerHTML = 'Вопрос №2';
			element.style.fontFamily = 'Arial';
			element.style.fontSize = '24px';
			document.getElementsByClassName ('menu__wrapper');
			list.insertBefore (element, list.children[0]);

		var subList = document.createElement ('ul');
			subList.classList.add ('sub_menu__wrapper');
			subList.style.listStyle = 'none';
			subList.style.marginLeft = '-40px';
			document.getElementsByClassName ('menu__element');
			element.insertBefore (subList, element.children[0]);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingTop = '15px';
			subElement.style.paddingBottom = '5px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.insertBefore (subElement, subList.children[0]);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №1';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingBottom = '5px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.appendChild (subElement);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №2';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingBottom = '15px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.appendChild (subElement);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №3';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var element = document.createElement ('li');
			element.classList.add ('menu__element');
			element.innerHTML = 'Вопрос №1';
			element.style.fontFamily = 'Arial';
			element.style.fontSize = '24px';
			element.style.paddingTop = '20px';
			document.getElementsByClassName ('menu__wrapper');
			list.insertBefore (element, list.children[0]);

		var subList = document.createElement ('ul');
			subList.classList.add ('sub_menu__wrapper');
			subList.style.listStyle = 'none';
			subList.style.marginLeft = '-40px';
			document.getElementsByClassName ('menu__element');
			element.insertBefore (subList, element.children[0]);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingTop = '15px';
			subElement.style.paddingBottom = '5px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.insertBefore (subElement, subList.children[0]);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №1';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingBottom = '5px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.appendChild (subElement);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №2';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var subElement = document.createElement ('li');
			subElement.classList.add ('sub_menu__element');
			subElement.style.paddingBottom = '15px';
			subElement.style.fontSize = '18px';
			document.getElementsByClassName ('menu__element');
			subList.appendChild (subElement);

		var label = document.createElement ('label');
			label.style.cursor = 'pointer';
			document.getElementsByClassName ('sub_menu__element');
			subElement.insertBefore (label, subElement.children[0]);

		var checkBox = document.createElement ('input');
			checkBox.setAttribute ('type', 'checkbox');
			checkBox.style.cursor = 'pointer';
			document.getElementsByTagName (label);
			label.insertBefore (checkBox, label.children[0]);

		var span = document.createElement ('span');
			span.innerHTML = 'Вариант ответа №3';
			document.getElementsByTagName (label);
			label.appendChild (span);

		var submit = document.createElement ('input');
			submit.setAttribute ('type', 'submit');
			submit.setAttribute ('value', 'Проверить мои результаты');
			submit.style.marginLeft = '300px';
			submit.style.padding = '10px 30px';
			submit.style.fontSize = '20px';
			submit.style.backgroundColor = "#cae4fb";
			submit.style.border = '3px solid #000107';
			submit.style.cursor = 'help';
			document.getElementsByClassName ('form');
			form.appendChild (submit);

	}

}

createDom.createWrapper ('div', 'wrapper');


console.log (document.body.childNodes);
console.log (document);