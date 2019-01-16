'use strict';

var firstNum = prompt('Введите первое число', 2);
    console.log('Вы ввели первое число ' + firstNum);
var secondNum = prompt('Введите второе число', 2);
    console.log('Вы ввели второе число ' + secondNum);


var addResultConfirm = confirm('Желаете выполнить сложение этих чисел?');

    if (addResultConfirm) {
        var addResult = Number(firstNum) + Number(secondNum);
        console.log('Результат сложения ' + addResult);
        alert('Ваш результат сложения ' + addResult);
    }

var subtractResultConfirm = confirm('Желаете также выполнить вычитание этих чисел?');

    if (subtractResultConfirm) {
        var subtractResult = Number(firstNum) - Number(secondNum);
        console.log('Результат вычитания ' + subtractResult);
        alert('Ваш результат вычитания ' + subtractResult);
    }

var divideResultConfirm = confirm('Желаете возможно выполнить деление этих чисел?');

    if (divideResultConfirm) {
        var divideResult = Number(firstNum) / Number(secondNum);
        console.log('Результат деления ' + divideResult);
        alert('Ваш результат деления ' + divideResult);
    }

var multiplyResultConfirm = confirm('Желаете наконец-таки выполнить умножение этих чисел?');

    if (multiplyResultConfirm) {
        var multiplyResult = Number(firstNum) * Number(secondNum);
        console.log('Результат умножения ' + multiplyResult);
        alert('Ваш результат умножения ' + multiplyResult);
    }