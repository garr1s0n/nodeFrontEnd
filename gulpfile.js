var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
    gulp.src('src/css/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/resource/css'));
});

gulp.task('default', ['css'], function () {
    gulp.watch('src/css/style.css', ['css']);
});