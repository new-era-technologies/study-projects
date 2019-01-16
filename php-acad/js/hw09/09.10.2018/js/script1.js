'use strict';


// Implement the function hasClass, addClass, removeClass, toggleClass

var div = document.getElementById('div');

function hasClass(node, klass) {
    return node.classList.contains(klass);
}

function addClass(node, klass) {
    return node.classList.add(klass);
}

function removeClass(node, klass) {
    return node.classList.remove(klass)
}

function toggleClass(node, klass) {
    if (node.classList.contains(klass)) {
        return node.classList.remove(klass)
    } else {
        return node.classList.add(klass)
    }
}

console.log(hasClass(div, 'klass'));
addClass(div, 'klass');
removeClass(div, 'klass');
toggleClass(div, 'klass');
console.log(div);


// Make table 10x10

var table = document.createElement('table');
document.body.insertBefore(table, document.body.lastChild);

for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var j = 0; j < 10; j++) {
        var td = document.createElement('td');
        tr.appendChild(td);
        var tdCount = document.getElementsByTagName('td');
        for (var y = 0; y < tdCount.length; y++) {
            td.innerHTML = '' + tdCount.length;
        }
    }
}