'use strict';


// create document with 3 divs

var firstDiv = document.getElementById('box');
var firstList = firstDiv.children[1];
var childP = document.querySelectorAll('div>p');

console.log(document.head);
console.log(firstList);
console.log(childP);

for (var i = 1; i < document.querySelectorAll('div').length; i++) {
    console.log(document.querySelectorAll('div')[i].childNodes[1]);
}


// find in table

var labels = document.querySelectorAll('#age-table label');
var firstTd = document.querySelector('td');
var secondForm = document.querySelectorAll('form')[1];
var firstForm = document.querySelector('form');
var firstInput = document.querySelector('[name="search"]').querySelector('input');
var infoWithoutPosition = document.querySelector('[name="info[0]"]');
var infoFormPerson = document.querySelector('[name="search-person"]').querySelector('[name="info[0]"]');

console.log(labels);
console.log(firstTd);
console.log(secondForm);
console.log(firstForm);
console.log(firstInput);
console.log(infoWithoutPosition);
console.log(infoFormPerson);


// function showNotification()

var param = {
    top: 100,
    right: 500,
    color: 'green',
    className: 'perfect',
    html: 'this is a new message'
};

function showNotification(options) {
    var element = document.createElement('p');
    document.body.appendChild(element);
    element.style.top = options.top + 'px';
    element.style.right = options.right + 'px';
    element.style.color = options.color;
    element.className = options.className;
    element.innerHTML = options.html;
    setTimeout(function () {
        document.body.removeChild(element);
    }, 2000);
}

showNotification(param);