'use strict';


QUnit.test('Output the number of properties in the object', function(assert) {
    assert.equal(getCount1({a: 1, b: 2, c: 3}), 3, "test1 is ok");
    assert.equal(getCount2(function () {}), 0, "test2 is ok");
    assert.equal(getCount3([1, 2, 3, 4]), 4, "test3 is ok");
    assert.equal(getCount4([100]), 1, "test4 is ok");
});

QUnit.test('Implement the function getField, which takes an array of objects and displays an array of requested values', function(assert) {
    assert.deepEqual(getField([{'firstName': 'test1','secondName': 'test3'},{'firstName': 'test2','secondName': 'test4'}], 'secondName'), ['test3', 'test4'], "result is ok");
});

QUnit.test('Implement the creation function of the counter createCounter (start, step) and add the pick (counter, x)', function(assert) {
    assert.deepEqual(pick(createCounter(10,3), 5), [10, 13, 16, 19, 22], "pickCounter1 is ok");
    assert.deepEqual(pick(createCounter(7,1), 10), [7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "pickCounter2 is ok");
});

QUnit.test('Implement the map (fn, array) function', function(assert) {
    assert.deepEqual(map(square, [1, 2, 3, 4, 5]), [1, 4, 9, 16, 25], "map is ok");
});

QUnit.test('Implement the filter function', function(assert) {
    assert.deepEqual(filter([1, 2, 3, 4, 5, 6], isOdd), [1, 3, 5], "filterResult is ok");
});

QUnit.test('Fibonacci numbers', function(assert) {
    assert.deepEqual(fibonacci(40), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986], "fibonacci is ok");
});

QUnit.test('Sum before', function(assert) {
    assert.equal(sum(100), 4950, "sum is ok");
    assert.equal(sumRecursion(100), 4950, "sumRecursion is ok");
});

QUnit.test('Binary function', function(assert) {
    assert.equal(binaryFunc(100), 1100100, "binary function is ok");
});

QUnit.test('Greatest common divisor function', function(assert) {
    assert.equal(divisorFunc(5,500), 5, "divisor function is ok");
});

QUnit.test('Simple numbers', function(assert) {
    assert.deepEqual(funcSimple(100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], "function simple numbers is ok");
});