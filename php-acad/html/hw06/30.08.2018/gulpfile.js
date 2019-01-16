'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');
const del = require('del');

var paths = {
    styles: {
        src: 'src/css/**/*.scss',
        dest: 'build/css/'
    }
};

function clean() {
    return del(['build']);
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(concatCss('bundle.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}

var build = gulp.series(clean, gulp.parallel(styles, watch));

gulp.task('build', build);

gulp.task('default', build);