/**
 * Created by pk on 06-Mar-16.
 */
var gulp=require('gulp');
var postcss=require('gulp-postcss');
var cssWring=require('csswring');
//var autoprefixer=require('autoprefixer-core');

gulp.task('convert',function(){
    var processors=[
        cssWring
    ];
    return gulp.src('./src/demo.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});

/*

gulp.task('watch',function(){
   gulp.watch('./src/*.css',['convert']);
});
*/

gulp.task('watch',function(){
    gulp.watch('./src/*.css',['convert']);
})
