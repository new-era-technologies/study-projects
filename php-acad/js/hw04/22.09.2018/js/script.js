'use strict';


// Output the number of properties in the object

var test1 = {a: 1, b: 2, c: 3};

var getCount = function (test1) {
    return Object.keys(test1).length
};

console.log(getCount(test1));


var test2 = function () {
};

var getCount = function (test2) {
    return Object.keys(test2).length
};

console.log(getCount(test2));


var test3 = [1, 2, 3, 4];

var getCount = function (test3) {
    return Object.keys(test3).length
};

console.log(getCount(test3));


var test4 = [];

test4[100] = 1;

var getCount = function (test4) {
    return Object.keys(test4).length
};

console.log(getCount(test4));


// Implement the function getField, which takes an array of objects and displays an array of requested values

var test = [
    {
        'firstName': 'test1',
        'secondName': 'test3'
    },
    {
        'firstName': 'test2',
        'secondName': 'test4'
    }
];

var getField = function (array, property) {

    var currentArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i][property]) {
            currentArray.push(array[i][property]);
        }
    }

    return currentArray;

};

var result = getField(test, 'secondName');

console.log(result);


// Implement the creation function of the counter createCounter (start, step). Also, add the pick (counter, x)

function createCounter(start, step) {

    function* gen(start, step) {
        while (true) {
            yield start;
            start += step;
        }
    }

    var generate = gen(start, step);

    return function () {
        return generate.next().value;
    }

}

var counter = createCounter(10, 3);
var counter2 = createCounter(7, 1);

function pick(counter, x) {

    var currentArray = [];

    for (var i = 0; i < x; i++) {
        currentArray.push(counter())
    }

    return currentArray;

}

console.log(pick(counter, 5));
console.log(pick(counter2, 10));


// Implement the map (fn, array) function

function square(x) {
    return x * x;
}

function map(square, array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray.push(square(array[i]))
    }

    return newArray;

}

console.log(map(square, [1, 2, 3, 4, 5]));


// Implement the filter function

var input = [1, 2, 3, 4, 5, 6];

function isOdd(x) {
    return x % 2 == 1;
}

function filter(input, func) {

    var newArray = [];

    for (var i = 0; i < input.length; i++) {
        if (func(input[i])) {
            newArray.push(input[i])
        }
    }

    return newArray

}

var filterResult = filter(input, isOdd);

console.log(filterResult);


// Fibonacci numbers

var num = prompt('Введите колличество чисел Фибоначчи (до 40)');

function fibonacci(num) {

    var fibonacciArray = [];

    if (num <= 2) {
        for (var i = 0; i < num; i++) {
            fibonacciArray.push(i);
        }
    } else if (num > 40) {
        alert('Ошибка! Вы ввели недопустимое колличество');
    } else {
        fibonacciArray = [0, 1];
        for (var i = 2; i < num; i++) {
            fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
        }
    }

    return fibonacciArray;

}

console.log(fibonacci(num));


// Sum before

var numbers = prompt('Введите число');

function sum(numbers) {

    var sum = 0;

    for (var i = 0; i < numbers; i++) {
        sum += i;
    }

    return sum;

}

function sumRecursion(numbers) {

    if (numbers < 1) {
        return 0;
    } else {
        return +numbers - 1 + sumRecursion(numbers - 1);
    }

}

console.log(sum(numbers));
console.log(sumRecursion(numbers));


// Binary function

var binary = prompt('Введите число');

function binaryFunc(binary) {

    var out = "";
    var bit = 1;
    while (binary >= bit) {
        out = (binary & bit ? 1 : 0) + out;
        bit <<= 1;
    }

    return out || "0";

}

console.log(binaryFunc(binary));


// Greatest common divisor function

var divisorOne = prompt('Введите число');
var divisorTwo = prompt('Введите число');

function divisorFunc(divisorOne, divisorTwo) {

    if (!divisorTwo) {
        return divisorOne;
    }

    return divisorFunc(divisorTwo, divisorOne % divisorTwo);

}

console.log(divisorFunc(divisorOne, divisorTwo));


// Simple numbers

var numberSimple = prompt('Введите число');


function funcSimple(numberSimple) {

    var arraySimple = [];


    if (numberSimple <= 1) {
        return arraySimple;
    }

    for (var i = 2; i < numberSimple; i++) {
        if (isSimple(i)) {
            arraySimple.push(i);
        }
    }

    function isSimple(number) {
        for (var i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    return arraySimple;

}

console.log(funcSimple(numberSimple));