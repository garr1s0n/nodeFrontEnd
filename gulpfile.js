var gulp = require('gulp');

gulp.task('css', function() {
    gulp.src('src/css/style.css')
        .pipe(gulp.dest('dist/resource/css'));
});