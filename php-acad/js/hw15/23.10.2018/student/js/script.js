'use strict';


class Student {
    constructor(name, surname, grades) {
        this.name = name;
        this.surname = surname;
        this.grades = grades;
    }
    fullName() {
        return this.name + ' ' + this.surname;
    };
    gradesAverage() {
        if (!this.grades.length) {
            alert("Some student don't have a rating");
            return [];
        }
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += +this.grades[i];
        }
        return sum / this.grades.length;

    };
    static get group() {
        return count;
    }
    static get showAllStudents() {
        let compareAllStud = (a, b) => {
            return b.gradesAverage() - a.gradesAverage();
        };
        let sortedStudList = count.slice();
        sortedStudList.sort(compareAllStud);
        let modStudGroup = [];
        for (let i = 0; i < sortedStudList.length; i++) {
            modStudGroup.push(sortedStudList[i].fullName() + '. Average rating = ' + sortedStudList[i].gradesAverage().toFixed(2));
        }
        return modStudGroup;
    };
    static get showBestStudent() {
        return Student.bestStudent.fullName() + ' - best student. Average rating = ' + Student.bestStudent.gradesAverage().toFixed(2);
    };
    static get bestStudent() {
        let compareBestStud = (studentA, studentB) => {
            return studentA.gradesAverage() - studentB.gradesAverage();
        };
        let max = 0;
        for (let i = 0; i < count.length; i++) {
            if (compareBestStud(count[max], count[i]) < 0) max = i;
        }
        return count[max];
    };
}

let count = [];

var student1 = new Student('Ivan', 'Ivanov', [4,5,5]);
var student2 = new Student('Semen', 'Semenov', [3,5,5]);
var student3 = new Student('Petr', 'Petrov', [4,3,5]);

Student.group.push(student1);
Student.group.push(student2);
Student.group.push(student3);

console.log(Student.group);
console.log(Student.showAllStudents);
console.log(Student.showBestStudent);
console.log(Student.bestStudent);