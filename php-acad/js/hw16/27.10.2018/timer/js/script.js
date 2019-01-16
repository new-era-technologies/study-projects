'use strict';


let main = document.getElementById('main');
let removeEvent, divTimer, count = 1;

class Timer {
   constructor(id, s, ss) {
      this.id = id;
      this.s = s;
      this.ss = ss;
   }
   goTime() {
       let down = setInterval(() => {
             this.ss--;
          if (this.ss === 0) {
             this.s--;
             this.ss = 100;
          } else if (this.s === -1) {
             clearInterval(down);
             this.s = 0;
             this.ss = 0;
          }
       }, 10);
   }
}
let createTxtTimer = () => {
   let timer = new Timer(count++, 9, 100);
   divTimer = document.createElement('div');
   divTimer.id = timer.id;
   main.appendChild(divTimer);
   let pId = document.createElement('p');
   pId.style.display = 'none';
   pId.innerHTML = '#' + timer.id;
   divTimer.appendChild(pId);
   setTimeout(() => {
      pId.style.display = 'block';
   }, 10110);
   let pTimer = document.createElement('p');
   divTimer.appendChild(pTimer);
   setInterval(() => {
      pTimer.innerHTML = timer.s + ':' + timer.ss;
   }, 10);
   timer.goTime();
};
let createButDelete = () => {
    let butDel = document.createElement('button');
    butDel.id = divTimer.id;
    butDel.innerHTML = 'Delete';
    divTimer.appendChild(butDel);
    butDel.addEventListener('click', () => {
       let butThis = document.getElementById(butDel.id);
       butThis.remove();
    })
};
let addTimer = document.createElement('button');
addTimer.innerHTML = 'Add Timer';
main.appendChild(addTimer);
addTimer.addEventListener('click', removeEvent = (e) => {
    createTxtTimer();
    createButDelete();
    if (count > 100) {
        e.currentTarget.removeEventListener(e.type, removeEvent);
    }
});