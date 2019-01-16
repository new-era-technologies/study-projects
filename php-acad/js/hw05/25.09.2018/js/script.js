'use strict';


function foo() {
    [].forEach.call(arguments, function (item) {
            console.log(item);
        }
    );
}

foo(1, 'two', null, [33, true], {name: 'T', surname: '800'}, false, undefined);