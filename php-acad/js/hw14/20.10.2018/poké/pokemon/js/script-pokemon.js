'use strict';


var query = window.location.hash.split('#')[1];
fetch('https://pokeapi.co/api/v2/pokemon/' + query + '/')
    .then(function(result) {
        return result.json()
    })
    .then(function(response) {
        return text(response);
    });


function text(array) {

    var outer = document.getElementById('outer');
    outer.style.margin = '30px 0 0 30px';
    var inner = document.createElement('div');
    inner.style.display = 'flex';
    outer.appendChild(inner);
    var innerPic = document.createElement('div');
    inner.appendChild(innerPic);
    var pic = document.createElement('img');
    pic.style.width = '250px';
    pic.style.height = '250px';
    pic.setAttribute('src', '../img/' + query + '/img.png');
    innerPic.appendChild(pic);
    var innerText = document.createElement('div');
    innerText.style.marginLeft = '50px';
    inner.appendChild(innerText);
    var title = document.createElement('h1');
    title.style.textTransform = 'capitalize';
    innerText.appendChild(title);
    title.innerHTML = array.name;
    var exp = document.createElement('p');
    innerText.appendChild(exp);
    exp.innerHTML = 'base experience: ' + array.base_experience;
    var height = document.createElement('p');
    innerText.appendChild(height);
    height.innerHTML = 'height: ' + array.height;
    var weight = document.createElement('p');
    innerText.appendChild(weight);
    weight.innerHTML = 'weight: ' + array.weight;
    var abil = document.createElement('p');
    innerText.appendChild(abil);
    abil.innerHTML = 'abilities:';
    var abilList = document.createElement('ul');
    abil.appendChild(abilList);
    for (var i = 0; i < array.abilities.length; i++) {
        var abilName = document.createElement('li');
        abilList.appendChild(abilName);
        abilName.innerHTML = array.abilities[i].ability.name;
    }
    var mov = document.createElement('p');
    innerText.appendChild(mov);
    mov.innerHTML = 'moves:';
    var movList = document.createElement('ul');
    mov.appendChild(movList);
    for (var j = 0; j < array.moves.length; j++) {
        var movName = document.createElement('li');
        movList.appendChild(movName);
        movName.innerHTML = array.moves[j].move.name;
    }

}