var gulp = require('gulp');
var preen = require('preen');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();
  
gulp.task('css', function() {
    gulp.src('src/css/*.css')
        .pipe(concatCss('styles.css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/resource/css'))
        .pipe(browserSync.stream());
  });

gulp.task('js', function () {
    gulp.src('src/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/resource/js'))
        .pipe(browserSync.stream());
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('bowersource', function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src(['dist/resource/vendor/**/dist/*.js'], {read: false});
 
    return target.pipe(inject(sources))
        .pipe(gulp.dest('./src'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./dist/"
    });
});

// Build Tasks
gulp.task('default', ['serve','css','js','bowersource','copy'], function () {
    gulp.watch('src/index.html', ['bowersource','copy']);
    gulp.watch('src/js/script.css', ['js']);
    gulp.watch('src/css/style.css', ['css']);
    gulp.watch('src/**/*.*').on('change', browserSync.reload);
});

//Update Bower Plugins
gulp.task('bower', ['preen', 'bowercopy'], function () {
    gulp.watch('bower.json', ['preen', 'bowercopy']);
});
gulp.task('preen', function (cb) {
    preen.preen({}, cb);
});
gulp.task('bowercopy', function () {
    gulp.src('bower_components/*/dist/*.min.js')
        .pipe(gulp.dest('dist/resource/js/vendor'))
});