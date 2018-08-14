'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const paths = {
  styles: 'src/scss/**/*.scss',
  stylesLibs: ['src/libs/css/normalize.css'],
  scripts: 'src/js/**/*.js',
  images: 'src/img/**/*.svg',
};

gulp.task('styles', function () {
	return gulp.src(paths.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(rename({
    		suffix: ".min",
  		}))
  		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('stylesLibs', function () {
	return gulp.src(paths.stylesLibs)
        .pipe(concat({
			path: 'libs.min.css'
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function () {
	return gulp.src(paths.scripts)
	.pipe(concat({
		path: 'script.min.js'
	}))
	.pipe(uglify().on('error', function(e){
    console.log(e);
  }))
	.pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('clean', function () {
	return del(['dist']);
});

gulp.task('watch', function () {
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts', 'styles', 'stylesLibs', 'images']);