/// <reference path="typings/node/node.d.ts"/>
"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass:compile',function(){
	return gulp.src('./public/styles/sass/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./public/styles/'))
});

gulp.task('watch',function(){
	gulp.watch('./public/styles/sass/*.scss',['sass:compile'])
});