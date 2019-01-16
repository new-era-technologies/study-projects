'use strict';


// Implement the application to generate simple arithmetic examples

var div, span, input, firstNumber, secondNumber, randomOperator;

var operatorsArray = ['+', '-', '*', '/'];

var divCreate = function() {
    div = document.createElement('div');
    div.style.marginTop = '10px';
    div.style.marginLeft = '100px';
    document.body.insertBefore(div, document.body.lastElementChild);
    var previous = document.body.lastElementChild.previousElementSibling.previousElementSibling;
    var previousDiv = document.querySelector('div');
    if (previous === previousDiv) {
        document.body.removeChild(previous);
    }
};

var spanCreate = function() {
    span = document.createElement('span');
    span.style.marginLeft = '10px';
    div.appendChild(span);
};

var inputCreate = function() {
    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.style.width = '50px';
    div.appendChild(input);
};

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var result = function(a, b) {
    if (randomOperator === '+') {
        return Number(a) + Number(b);
    } else if (randomOperator === '-') {
        return Number(a) - Number(b);
    } else if (randomOperator === '*') {
        return Number(a) * Number(b);
    } else {
        return Number(a) / Number(b);
    }
};

var setOperatorsArray = function(array, value) {
    var index = array.indexOf(value);
    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
};

var operatorsItems = document.querySelectorAll('.operators__list__item');
for (var i = 0; i < operatorsItems.length; i++) {
    operatorsItems[i].addEventListener('click', function () {
        var text = this.innerText;
        setOperatorsArray(operatorsArray, text);
        if (this.style.backgroundColor === 'black') {
            this.style.backgroundColor = 'white';
        } else {
            this.style.backgroundColor = 'black';
        }
    });
}

var test = document.querySelector('.test');
test.addEventListener('click', function() {
    randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    if (!(randomOperator === undefined)) {
        divCreate();
        spanCreate();
        inputCreate();
        firstNumber = randomNumber(1,9);
        secondNumber = randomNumber(1,9);
        span.innerHTML = firstNumber + ' ' + randomOperator + ' ' + secondNumber + ' = ';
    } else {
        alert('Choose Operator in Settings');
        document.body.removeChild(div);
    }
});

var settings = document.querySelector('.settings');
settings.addEventListener('click', function () {
    var operators = document.querySelector('.operators');
    if (operators.style.display === 'block') {
        operators.style.display = 'none';
    } else {
        operators.style.display = 'block';
    }
});

var check = document.querySelector('.check');
check.addEventListener('click', function() {
    if (!span) {
        alert('Push the button TEST at first');
    } else {
        spanCreate();
        if (result(firstNumber, secondNumber) === Number(input.value)) {
            span.innerHTML = 'True';
        } else {
            span.innerHTML = 'False';
        }
    }
});