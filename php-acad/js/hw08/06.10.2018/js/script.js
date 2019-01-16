'use strict';


// Implement the class Employee

class Employee {
    constructor(firstName, secondName, rate, period) {
        var _firstName = firstName;
        var _secondName = secondName;
        var _rate = rate;
        var _period = period;
        this.getFirstName = function() {
            return _firstName;
        };
        this.getSecondName = function() {
            return _secondName;
        };
        this.setRate = function(value) {
            this._rate = value;
        };
        this.getRate = function() {
            return _rate;
        };
        this.setPeriod = function (value) {
            this._period = value;
        };
        this.getPeriod = function () {
            return _period;
        };

        this.getSalary = function(rate, period) {
            return _rate * _period;
        }
    }
}

var employee1 = new Employee('Kolya', 'Nikolaev', 200, 30);
var employee2 = new Employee('Vasya', 'Vaskin', 300, 15);

console.log(employee1.getSalary());
console.log(employee2.getSalary());


// Implement the class CustomString

class CustomString {
    constructor(str) {
        this.str = str;
        this.makeReverse = function() {
            var splitStr = str.split('');
            var reverseArray = splitStr.reverse();
            var reverseStr = reverseArray.join('');
            return reverseStr;
        };
        this.capitaliseFirst = function() {
            var splitStr = str.split('');
            var firstLetStr = splitStr[0];
            var capitFirstLetStr = firstLetStr.toUpperCase();
            splitStr.shift();
            splitStr.unshift(capitFirstLetStr);
            var capitStrFirstLet = splitStr.join('');
            return capitStrFirstLet;
        };
        this.capitaliseAllFirst = function() {
            var splitStr = str.split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
            }
            return splitStr.join(' ');
        }
    }
}

var customString1 = new CustomString('the first letter in string will be uppercase or this text will be reverse');

console.log(customString1.makeReverse());
console.log(customString1.capitaliseFirst());
console.log(customString1.capitaliseAllFirst());


// Implement the class CustomValidator

class CustomValidator {
    constructor(str) {
        this.str = str;
        this.checkEmail = function() {
            function validateEmail(str) {
                var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return exp.test(str);
            }
            if (validateEmail(str)) {
                return true
            } else {
                return false
            }
        };
        this.checkDomain = function() {
            function validateDomain(str) {
                var exp = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
                return exp.test(str);
            }
            if (validateDomain(str)) {
                return true
            } else {
                return false
            }
        };
        this.checkDate = function() {
            var monthField = str.split("/")[1];
            var dayField = str.split("/")[2];
            var yearField = str.split("/")[0];
            var dayObj = new Date(yearField, monthField-1, dayField);
            if ((dayObj.getMonth()+1!=monthField)||(dayObj.getDate()!=dayField)||(dayObj.getFullYear()!=yearField)) {
                return false
            } else {
                return true
            }
        };
        this.checkPhone = function() {
            function validatePhone(str) {
                var exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                return exp.test(str);
            }
            if (validatePhone(str)) {
                return true
            } else {
                return false
            }
        }
    }
}

var customValidator1 = new CustomValidator('cat@gmail.com');

console.log(customValidator1.checkEmail());
console.log(customValidator1.checkDate());
console.log(customValidator1.checkPhone());
console.log(customValidator1.checkDomain());