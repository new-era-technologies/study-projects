'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	prefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	concatJS = require('gulp-concat-js'),
	concatCSS = require('gulp-concat-css'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	spritesmith = require("gulp.spritesmith"),
	gulpif = require("gulp-if"),
	rimraf = require('rimraf');

var path = {
	build: {
		css: 'build/css/',
		img: 'build/img/'
	},
	src: {
		style: 'src/sass/*.scss',
		img: 'src/img/**/*.*'
	},
	watch: {
		style: 'src/sass/*.scss',
		img: 'src/img/**/*.*'
	},
	clean: './build'
};

gulp.task('style:build', function () {
	gulp.src('src/sass/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		errLogToConsole: true
	}))
	.pipe(prefixer(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
	.pipe(concatCSS("main.css"))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/css'))
});

gulp.task('js:build', function () {
	gulp.src([
		'src/js/jquery-1.12.4.js',
		'src/js/jquery.jcarousel.js',
		'src/js/imagesloaded.pkgd.js',
		'src/js/masonry.pkgd.js',
		'src/js/script.js'
		])
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/js'))
});

gulp.task('sprite:build', function () {
  var spriteData = gulp.src('src/img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('build/img/sprite/'));
});

gulp.task('image:build', function () {
	gulp.src(path.src.img) 
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()],
		interlaced: true
	}))
	.pipe(gulp.dest(path.build.img))
});

gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});

gulp.task('build', [
	'style:build',
	'js:build',
	'sprite:build',
	'image:build'
	]);

gulp.task('watch', function(){
	watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
	watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
	watch([path.watch.img], function(event, cb) {
		gulp.start('image:build');
	});
});

gulp.task('default', ['build']);