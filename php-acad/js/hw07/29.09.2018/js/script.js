'use strict';


// Implement the function partial(fn, a1, a2, ....) to fix one or few arguments

function add(a, b) {
    return a + b;
}

function partial(add, x) {
    return add.bind(null, x);
}

var add5 = partial(add,5);

console.log(add5(1));
console.log(add5(8));


// Implement the function partial() to fix any arguments

var testFunc = function(a, b, c) {
    return 'a=' + a + ',b=' + b + ',c=' + c;
};

var partialDeep = function(func) {
    var partArgs = arguments, addArgs = [];

    for (var i = 1; i < partArgs.length; i++) {
        addArgs[i-1] = partArgs[i];
    }

    return function(x) {
        for (var i = 0; i < addArgs.length; i++) {
            if (!addArgs[i]) {
                addArgs[i] = x;
            }
        }

        return func.apply(this, addArgs)
    }
};

var test1_3 = partialDeep(testFunc, 1, undefined, 3);

console.log(test1_3(2));


// Compile hamburger with price and calories

function Hamburger(type, ingredients) {
    this.type = type;
    this.ingredients = ingredients;
    this.totalCal = 0;
    this.totalPrice = 0;

    this.currentBurger = {
        small: false,
        big: false,
        cheese: false,
        salad: false,
        potato: false,
        spice: false,
        mayo: false
    };

    this.productInfo = {
        small: {price: 50, cal: 40},
        big: {price: 100, cal: 60},
        cheese: {price: 10, cal: 20},
        salad: {price: 20, cal: 5},
        potato: {price: 15, cal: 10},
        spice: {price: 15, cal: 0},
        mayo: {price: 20, cal: 5}
    };

    Hamburger.prototype.checkInfo = function() {
        var error = false;

        var necesProd = function (item) {
            return (item === 'salad' || item === 'cheese' || item === 'potato')
        };

        var unkProd = function (item) {
            return Object.keys(this.productInfo).every(function (ing) {
                return (item !== ing)
            })
        }.bind(this);

        switch (true) {
            case !this.type: return _errorMessage('choose burger size', error);
            case !(typeof this.type === 'string'): return _errorMessage('enter correct type size string', error);
            case this.type !== 'small' && this.type !== 'big': return _errorMessage('enter correct type size small or big', error);
            case !this.ingredients || !this.ingredients.length: return _errorMessage('choose ingredients', error);
            case !this.ingredients.some(necesProd): return _errorMessage('enter the ingredient', error);
            case this.ingredients.some(unkProd): return _errorMessage('unknown ingredient', error);
            case this.ingredients.some(function (item) {return !item}): return _errorMessage('empty ingredients field', error);
            default: return error
        }
    };

    this.compileBurger = function () {
      this.ingredients.forEach(function (item) {
          this.currentBurger[item] = true
      }.bind(this));
      this.currentBurger[this.type] = true;
    };

    this.orderBurger = function () {
        if (this.checkInfo()) {
            return
        } else {
            this.compileBurger();
            this.countPriceAndCal();
            this.showResult();
        }
    };

    this.countPriceAndCal = function () {
        Object.keys(this.currentBurger).forEach(function(item) {
            if (this.currentBurger[item]) {
                this.totalPrice += this.productInfo[item].price;
                this.totalCal += this.productInfo[item].cal;
            }
        }.bind(this));
    };

    this.showResult = function () {
        alert('You chose ' + this.type + ' burger. It costs ' + this.totalPrice + ' lirs and have ' + this.totalCal + ' calories');
    };

    var _errorMessage = function (str, error) {
        alert(str);
        return error = true;
    }
}

var myBurger = new Hamburger('small', ['cheese', 'salad', 'spice', 'potato', 'mayo']);

myBurger.orderBurger();