'use strict';


var dataUrlPage = 'https://pokeapi.co/api/v2/pokemon/';

var apiRequestLoop = function(input) {
    var promiseArray = [];
    for (var i = 1; i <= input; i++) {
        var dataUrlLoop = dataUrlPage + i + '/';
        promiseArray.push(fetch(dataUrlLoop).then(function(response) {
            return response.json();
        }));
    }
    return Promise.all(promiseArray);
};
apiRequestLoop(10).then(function(response) {
    return text(response);
});


function text(array) {

    var div = document.getElementById('main');
    var list = document.createElement('ul');
    list.style.fontSize = '14px';
    div.appendChild(list);

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.style.margin = '10px';
        list.appendChild(item);
        var url = array[i].species.url.split('/');
        var hash = url[url.length-2];
        var a = document.createElement('a');
        a.setAttribute('href', './pokemon/pokemon.html#' + hash);
        item.appendChild(a);
        a.style.textTransform = 'uppercase';
        a.innerHTML = array[i].name;
        var p = document.createElement('p');
        item.appendChild(p);
        p.style.marginLeft = '30px';
        p.innerHTML = ' base exp: ' + array[i].base_experience;
    }

}