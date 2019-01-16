'use strict';


// Work with DOM

var div = document.getElementById('test');
div.classList.add('lala');
div.classList.remove('lala');
div.classList.toggle('lala');

console.log(div.classList.contains('lala'));
console.log(div.classList.length);

for (var i = 0; i < div.classList.length; i++) {
    alert(div.classList[i]);
}


div.style.color = 'red';
div.style.fontSize = '30px';
div.style.border = '1px solid black';

var classCallingLala = document.getElementsByClassName('lala');
for (var j = 0; j < classCallingLala.length; j++) {
    classCallingLala[j].innerHTML += classCallingLala[j].tagName;
    classCallingLala[j].style.textTransform = 'lowercase';
}


var oList = document.querySelector('ol');
var oItem = document.createElement('li');
oItem.innerHTML = '.';
oList.appendChild(oItem);

var uList = document.querySelector('ul');
var uListArray = ['test', 'test1', 'test2', 'test3'];

for (var k = 0; k < uListArray.length; k++) {
    var uItem = document.createElement('li');
    uItem.innerHTML += uListArray[k];
    uList.appendChild(uItem);
    uItem.addEventListener('click', function() {
        alert(this.innerHTML);
    });
}

var liTest = document.getElementById('test1');
var newLi = document.createElement('li');
newLi.innerHTML = 'сделано';
uList.insertBefore(newLi, liTest);


var linkTest = document.getElementById('test2');
var newSpan = document.createElement('span');
newSpan.innerHTML = 'сделано';
document.body.insertBefore(newSpan, linkTest);
var newSpan2 = newSpan.cloneNode(true);
document.body.insertBefore(newSpan2,linkTest.nextElementSibling);
var newSpan3 = newSpan.cloneNode(true);
linkTest.insertBefore(newSpan3, linkTest.firstChild);
var newSpan4 = newSpan.cloneNode(true);
linkTest.insertBefore(newSpan4, linkTest.lastChild);

var firstChildLinkTest = linkTest.children[0];
firstChildLinkTest.style.color = 'red';


var lastChildLinkTest = linkTest.lastChild;
lastChildLinkTest.style.color = 'red';
for (var w = 0; w < linkTest.children.length; w++) {
    linkTest.children[w].innerHTML += '?';
}
var previousLinkTest = linkTest.previousElementSibling;
previousLinkTest.innerHTML += '?';
var nextLinkTest = linkTest.nextElementSibling;
nextLinkTest.innerHTML += '?';
linkTest.nextElementSibling.nextElementSibling.innerHTML += '?';