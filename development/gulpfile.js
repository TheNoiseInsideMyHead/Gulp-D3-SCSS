'use strict';

const gulp = require('gulp');
const pug  = require('gulp-pug');
const sass = require('gulp-sass');

gulp.task('pugCompile', function(){
    return gulp.src('templates/index.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('../build/templates'));
});

gulp.task('scssCompile', function(){
    return gulp.src('src/scss/styles.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('../build/src/css'));
});
gulp.task('default', gulp.series('pugCompile', 'scssCompile'));