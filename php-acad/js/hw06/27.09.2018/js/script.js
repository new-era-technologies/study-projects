'use strict';


function Student(name, surname, grades) {
    this.name = name;
    this.surname = surname;
    this.grades = grades;

    Student.count.push(this);
}

Student.prototype.fullName = function() {
    return this.name + ' ' + this.surname;
};
Student.prototype.gradesAverage = function() {

    if (!this.grades.length) {
        alert("Some student don't have a rating");
        return [];
    }
    var sum = 0;
    for (var i = 0; i < this.grades.length; i++) {
        sum += +this.grades[i];
    }
    return sum/this.grades.length;

};

Student.count = [];

Student.group = function() {
    return this.count;
};

Student.showAllStudents = function() {
    var compareAllStud = function(a, b) {
        return b.gradesAverage() - a.gradesAverage();
    };
    var sortedStudList = Student.count.slice();
    sortedStudList.sort(compareAllStud);
    var modStudGroup = [];
    for (var i = 0; i < sortedStudList.length; i++) {
        modStudGroup.push(sortedStudList[i].fullName() + '. Average rating = ' + sortedStudList[i].gradesAverage().toFixed(2));
    }
    return modStudGroup;
};

Student.showBestStudent = function() {
    return Student.bestStudent().fullName() + ' - best student. Average rating = ' + Student.bestStudent().gradesAverage().toFixed(2);
};

Student.bestStudent = function() {
    var compareBestStud = function(studentA, studentB) {
        return studentA.gradesAverage() - studentB.gradesAverage();
    };
    var max = 0;
    for (var i = 0; i < Student.count.length; i++) {
        if (compareBestStud(Student.count[max], Student.count[i]) < 0) max = i;
    }
    return Student.count[max];
};


var student1 = new Student ('Ivan', 'Ivanov', [4,5,5]);
var student2 = new Student ('Semen', 'Semenov', [3,5,5]);
var student3 = new Student ('Petr', 'Petrov', [4,3,5]);


console.log(Student.group());
console.log(Student.showAllStudents());
console.log(Student.showBestStudent());
console.log(Student.bestStudent());