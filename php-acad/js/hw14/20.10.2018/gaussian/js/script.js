'use strict';


var matrixSizeInput = document.getElementById('matrix_size_input');
var btnDraw = document.getElementById('btn_draw');
var main = document.getElementById('main');
var outer;
var arrOf = [];


btnDraw.addEventListener('click', function once(e) {
    matrixDraw();
    e.currentTarget.removeEventListener(e.type, once);
});

function matrixDraw() {
    var sizeValue = matrixSizeInput.value;
    if ((!Number(sizeValue)) || sizeValue < 2 || sizeValue > 10) {
        alert('Please enter correct matrix size');
        window.location.reload();
        return;
    }
    for (var i = 0; i < sizeValue; i++) {
        var matrixDiv = document.createElement('div');
        main.appendChild(matrixDiv);
        var eqLabel = document.createElement('label');
        eqLabel.innerHTML = ' = ';
        matrixDiv.appendChild(eqLabel);
        var eqInput = document.createElement('input');
        eqInput.setAttribute('type', 'text');
        eqInput.id = 'eq' + i;
        eqLabel.setAttribute('for', eqInput.id);
        matrixDiv.appendChild(eqInput);
        validKeys(eqInput);
        for (var j = 0; j < sizeValue; j++) {
            var xInput = document.createElement('input');
            xInput.setAttribute('type', 'text');
            matrixDiv.insertBefore(xInput, eqLabel);
            xInput.id = 'x' + i + j;
            var xLabel = document.createElement('label');
            xLabel.innerHTML = ' x' + (j+1) + ' + ';
            if(j === sizeValue-1) {
                xLabel.innerHTML = ' x' + (j+1);
            }
            matrixDiv.insertBefore(xLabel, eqLabel);
            xLabel.setAttribute('for', xInput.id);
            validKeys(xInput);
        }
    }
    var btnCheck = document.createElement('button');
    btnCheck.innerHTML = 'Get results';
    document.body.insertBefore(btnCheck, document.body.lastElementChild);
    btnCheck.addEventListener('click', function() {
        getResultsFromInputs();
        validInputs();
        outer = document.createElement('div');
        outer.style.display = 'flex';
        outer.style.alignItems = 'center';
        document.body.insertBefore(outer, document.body.lastElementChild);
        resultsDraw(arrOf);
        getMaxAndBelowToZero(arrOf);
        resultsDraw(arrOf);
        solveAndDraw(arrOf);
    });
    function validKeys(input) {
        input.addEventListener('keydown', function (event) {
            if ((!/[0-9]/.test(event.key) && !(event.keyCode === 189) && !(event.keyCode === 190) && !(event.keyCode === 9) && !(event.keyCode === 8) && !(event.ctrlKey && (event.keyCode === 86)))) {
                event.returnValue = false;
            }
        });
    }
}

function getResultsFromInputs() {
    for (var k = 0; k < matrixSizeInput.value; k++) {
        var eqItem = document.getElementById('eq' + k);
        var arrOfInputs = [];
        for (var l = 0; l < matrixSizeInput.value; l++) {
            var xItem = document.getElementById('x' + k + l);
            arrOfInputs[l] = +xItem.value;
        }
        arrOfInputs[arrOfInputs.length] = +eqItem.value;
        arrOf[k] = arrOfInputs;
    }
    return arrOf;
}

function validInputs() {
    for (var o = 0; o < matrixSizeInput.value; o++) {
        for (var z = 0; z < matrixSizeInput.value; z++) {
            var x = document.getElementById('x' + o + z);
            redBorder(x);
        }
        var eq = document.getElementById('eq' + o);
        redBorder(eq);
    }
    function redBorder(item) {
        if (isNaN(item.value) || (item.value === '-0')) {
            alert('bad value in current position');
            item.style.border = '1px solid red';
            throw new Error('bad value in current position');
        } else {
            item.style.border = '1px solid grey';
        }
    }
}

function resultsDraw(array) {
    var resDiv = document.createElement('div');
    resDiv.style.display = 'flex';
    resDiv.style.alignItems = 'center';
    outer.appendChild(resDiv);
    var inner = document.createElement('div');
    inner.style.display = 'flex';
    inner.style.borderLeft = '1px solid black';
    inner.style.borderRight = '1px solid black';
    inner.style.borderRadius = '20px';
    resDiv.appendChild(inner);
    var til = document.createElement('div');
    til.innerHTML = '~';
    til.style.margin = '0 20px';
    til.style.fontSize = '30px';
    resDiv.appendChild(til);
    var xDiv = document.createElement('div');
    inner.appendChild(xDiv);
    var eqDiv = document.createElement('div');
    eqDiv.style.borderLeft = '1px solid black';
    inner.appendChild(eqDiv);
    for (var k = 0; k < array.length; k++) {
        var resRow = document.createElement('p');
        resRow.style.margin = '0 20px';
        resRow.style.fontSize = '20px';
        xDiv.appendChild(resRow);
        for (var l = 0; l < array[k].length - 1; l++) {
            var rowSpan = document.createElement('span');
            rowSpan.style.margin = '0 5px';
            rowSpan.innerHTML = array[k][l];
            resRow.appendChild(rowSpan);
        }
        var eqRow = document.createElement('p');
        eqRow.style.margin = '0 20px';
        eqRow.style.fontSize = '20px';
        eqRow.innerHTML = array[k][l];
        eqDiv.appendChild(eqRow);
    }
}

function getMaxAndBelowToZero(array) {
    for (var i = 0; i < array.length; i++) {
        var maxItem = Math.abs(array[i][i]);
        var maxRow = i;
        for(var k = i + 1; k < array.length; k++) {
            if (Math.abs(array[k][i]) > maxItem) {
                maxItem = Math.abs(array[k][i]);
                maxRow = k;
            }
        }
        for (var w = i; w < array.length + 1; w++) {
            var tempo = array[maxRow][w];
            array[maxRow][w] = array[i][w];
            array[i][w] = tempo;
        }
        for (w = i + 1; w < array.length; w++) {
            var c = -array[w][i] / array[i][i];
            for(var j = i; j < array.length + 1; j++) {
                if (i === j) {
                    array[w][j] = 0;
                } else {
                    array[w][j] += c * array[i][j];
                }
            }
        }
    }
}

function solveAndDraw(array) {
    var finalArr = new Array(array.length);
    for (var i = array.length - 1; i > -1; i--) {
        finalArr[i] = array[i][array.length] / array[i][i];
        for (var k = i - 1; k > - 1; k--) {
            array[k][array.length] -= array[k][i] * finalArr[i];
        }
    }
    var resDiv = document.createElement('div');
    resDiv.style.borderLeft = '1px solid black';
    outer.appendChild(resDiv);
    for (var p = 0; p < finalArr.length; p++) {
        var res = document.createElement('p');
        res.style.margin = '0 20px';
        res.style.fontSize = '20px';
        resDiv.appendChild(res);
        res.innerHTML = ' x' + (p+1) + ' = ' + finalArr[p];
    }
}