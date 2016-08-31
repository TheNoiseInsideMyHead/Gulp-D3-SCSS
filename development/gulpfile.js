'use strict';

const gulp = require('gulp');

gulp.task('default', function(){
    return gulp.src('src/**/*.*')
        .on('data', function(file){
            console.log({
                contents: file.contents,
                path:     file.path,
                cwd:      file.cwd,
                base:     file.base
            });
        })
        .pipe(gulp.dest(function(file){
            return file.extname == '.js' ? '../build' :
                   file.extname == '.scss' ? '../build/css' : '../build';
        }));
});

