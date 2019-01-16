'use strict';


var chai = require('chai');
var expect = chai.expect;
var Student = require('./script');


describe('Student', function() {

    var student1 = new Student ('Ivan', 'Ivanov', [4,5,5]);
    var student2 = new Student ('Semen', 'Semenov', [3,5,5]);
    var student3 = new Student ('Petr', 'Petrov', [4,3,5]);

    describe('should be return fullName and gradesAverage', function() {
        it('fullName student1', function() {
            expect(student1.fullName()).to.equal('Ivan Ivanov');
        });
        it('fullName student2', function() {
            expect(student2.fullName()).to.equal('Semen Semenov');
        });
        it('fullName student3', function() {
            expect(student3.fullName()).to.equal('Petr Petrov');
        });
        it('gradesAverage student1', function () {
            expect(student1.gradesAverage()).to.equal(4.666666666666667);
        });
        it('gradesAverage student2', function () {
            expect(student2.gradesAverage()).to.equal(4.333333333333333);
        });
        it('gradesAverage student3', function () {
            expect(student3.gradesAverage()).to.equal(4);
        });
    });

    describe('should be return students group', function() {
        it('group of students', function() {
            expect(Student.group()).to.deep.equal([student1, student2, student3]);
        });
    });

    describe('should be return best student with grades in string', function() {
        it('best student with grades', function () {
            expect(Student.showBestStudent()).to.equal('Ivan Ivanov - best student. Average rating = 4.67');
        });
    });

    describe('should be return best student object', function() {
        it('best student object', function() {
            expect(Student.bestStudent()).to.equal(student1)
        });
    });

});