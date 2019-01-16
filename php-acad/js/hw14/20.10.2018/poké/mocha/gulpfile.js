'use strict';


const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');


function lint() {
    return gulp.src(['js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
}

function test() {
    return gulp.src('**/**/*.spec.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
}

const check = gulp.series(gulp.parallel(lint, test));


gulp.task('default', check);