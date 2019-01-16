'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');
const del = require('del');
const rigger =  require('gulp-rigger');

var paths = {
    styles: {
        src: 'src/css/**/*.scss',
        dest: 'build/css/'
    },
    html: {
        src: 'src/**/*.html',
        dest: 'build/'
    }
};

function clean() {
    return del(['build']);
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(rigger())
        .pipe(gulp.dest(paths.html.dest));
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
    gulp.watch(paths.html.src, html);
}

var build = gulp.series(clean, gulp.parallel(html, styles, watch));

gulp.task('build', build);

gulp.task('default', build);