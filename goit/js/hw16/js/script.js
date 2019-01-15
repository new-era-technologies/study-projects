'use strict';

var Human = {
	title: 'Vasya',
	age: 30,
	gender: 'male',
	height: '1.80 cm',
	weight: '80 kg'
};

function Worker1() {
	this.placeOfWork = 'Factory';
	this.salary = '500 $';
	this.work = function() {
		this.placeOfWork = 'Factory';
		this.salary = '500 $';
	}
};

Worker1.prototype = Human;
var Workerer = new Worker1();

function Worker2() {
	this.placeOfWork = 'Railway';
	this.salary = '300 $';
	this.work = function() {
		this.placeOfWork = 'Railway';
		this.salary = '300 $';
	}
};

Worker2.prototype = Human;
var newWorkerer = new Worker2();

function Student1() {
	this.placeOfStudy = 'Kiev';
	this.scholarship = '50 $';
	this.watchTvShows = function() {
		this.placeOfStudy = 'Kiev';
		this.scholarship = '50 $';
	}
}

Student1.prototype = Human;
var Studenter = new Student1();

function Student2() {
	this.placeOfStudy = 'Donetsk';
	this.scholarship = '75 $';
	this.watchTvShows = function() {
		this.placeOfStudy = 'Donetsk';
		this.scholarship = '75 $';
	}
}

Student2.prototype = Human;
var newStudenter = new Student2();

console.log(Workerer);
console.log(newWorkerer)
console.log(Studenter);
console.log(newStudenter);