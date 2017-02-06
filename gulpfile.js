var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
    gulp.src([
        'src/css/normalize.css',
        'src/css/style.css'
    ])
        .pipe(concatCss('styles.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/resource/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['serve','css'], function () {
    gulp.watch('src/css/style.css', ['css']);
    gulp.watch('src/default.htm').on('change', browserSync.reload);
});