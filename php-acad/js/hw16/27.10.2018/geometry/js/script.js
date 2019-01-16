'use strict';


class Geometry {
    constructor() {
        this.first = Array.from(document.getElementsByClassName('first'));
        this.second = Array.from(document.getElementsByClassName('second'));
        this.third = Array.from(document.getElementsByClassName('third'));
        this.point = Array.from(document.getElementsByClassName('point'));
        this.coordinat = [];
        this.btnCheck = document.getElementById('check');
    }
    init() {
        this.btnCheck.addEventListener('click', () => {
           this.initValues();
        });
    }
    initValues() {
        this.coordinat.push(this.first.map(input => +input.value));
        this.coordinat.push(this.second.map(input => +input.value));
        this.coordinat.push(this.third.map(input => +input.value));
        this.coordPoint = this.point.map(input => +input.value);
        this.checkCoordinates();
    }
    checkCoordinates() {
        let firstForm = (this.coordinat[0][0] - this.coordPoint[0]) * (this.coordinat[1][1] - this.coordinat[0][1]) - (this.coordinat[1][0] - this.coordinat[0][0]) * (this.coordinat[0][1] - this.coordPoint[1]);
        let secondForm = (this.coordinat[1][0] - this.coordPoint[0]) * (this.coordinat[2][1] - this.coordinat[1][1]) - (this.coordinat[2][0] - this.coordinat[1][0]) * (this.coordinat[1][1] - this.coordPoint[1]);
        let thirdForm = (this.coordinat[2][0] - this.coordPoint[0]) * (this.coordinat[0][1] - this.coordinat[2][1]) - (this.coordinat[0][0] - this.coordinat[2][0]) * (this.coordinat[2][1] - this.coordPoint[1]);
        if ((firstForm >= 0 && secondForm >= 0 && thirdForm >= 0) || (firstForm <= 0 && secondForm <= 0 && thirdForm <= 0)) {
            alert('The point is in the triangle');
        } else {
            alert('The point is out of the triangle');
        }
    }
}

new Geometry().init();