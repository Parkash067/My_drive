var gulp=require('gulp');
var less=require('gulp-less');
var minifyCSS = require('gulp-minify-css');
gulp.task('convert',function()
{
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dest/'));
});


