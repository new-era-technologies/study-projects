'use strict';


// Deep Cloning Function

function deepCopyObj(obj) {

    var copy;

    if (!obj || "object" !== typeof obj) return obj;

    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    if (obj instanceof Array) {
        copy = [];
        for (var i = 0; i < obj.length; i++) {
            copy[i] = deepCopyObj(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = deepCopyObj(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}

var obj = {a: 'name', b:2, c: [1,2,3,4,5], d: true, e: {a: 'surname', b: 'name'}, f: new Date(2018, 8, 19), g: {a: {a: 'name'}, b: 1}};

var objCopy = deepCopyObj(obj);

console.log(objCopy);


// Sort Array by method bubble

var m = [17, 2, 24, 4, 0, 6, 9, 8, 1, 5];

var count = m.length-1;

for (var i = 0; i < count; i++) {

    for (var j = 0; j < count - i; j++) {

        if (m[j] > m[j + 1]) {
            var max = m[j];
            m[j] = m[j + 1];
            m[j + 1] = max;
        }
    }
}

console.log(m);


// Lodash - flattenDeep method

var mas = _.flattenDeep([1, [2, [3, [4]], 5], [6 ,[10, 8]], [9]]);

console.log(mas);
