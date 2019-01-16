'use strict';


// Make 3 divs with event 'click'

var outer = document.querySelector('.outer__div');
var inner = document.querySelector('.inner__div');
outer.addEventListener('click', function () {
    this.style.color = 'green';
});
inner.addEventListener('click', function () {
    this.style.color = 'red';
});


// Implement event with enter only numbers

var input = document.getElementById('input');
input.addEventListener('keydown', function (event) {
    if ((!/[0-9]/.test(event.key)) || (event.ctrlKey && (event.keyCode === 86 ))) {
        event.returnValue = false;
    }
});


// Create function preloadImages(sources, callback)

var sources = [
    'https://images.pexels.com/photos/395132/pexels-photo-395132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/1482927/pexels-photo-1482927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
];
function preloadImages(sources, callback) {
    let counter = 0;
    function onLoad() {
        counter++;
        if (counter === sources.length) callback();
    }
    for(var t = 0; t < sources.length; t++) {
        var img = document.createElement('img');
        document.body.insertBefore(img, document.body.lastChild);
        img.onload = img.onerror = onLoad;
        img.src = sources[t];
    }
}
function allImagesLoaded() {
    console.log('images are ready');
}
preloadImages(sources, allImagesLoaded);


// Implement cycle with button's events

for (var g = 1; g < 11; g++) {
    var btn = document.createElement('button');
    btn.style.display = 'block';
    document.body.insertBefore(btn, document.body.lastChild);
    btn.innerHTML = g;
    btn.addEventListener('click', function () {
        alert(this.innerHTML);
    })
}