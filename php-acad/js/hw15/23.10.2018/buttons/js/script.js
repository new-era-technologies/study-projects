'use strict';


let main = document.getElementById('main');

for (let i = 1; i < 11; i++) {
    let button = document.createElement('button');
    button.innerHTML = i;
    main.appendChild(button);
    button.addEventListener('click', () => {alert(i)});
}