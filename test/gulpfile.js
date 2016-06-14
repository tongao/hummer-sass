'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: './'
    });
    gulp.watch("./src/css/*.scss", ['sass']);
    gulp.watch("./dist/css/*.css").on('change', reload);
    gulp.watch("./*.html").on('change', reload);
});

gulp.task('sass', function() {
    sass('./src/css/*.scss', {sourcemap: true, style: 'compressed'})
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 1 version', 'Firefox > 0', 'Opera > 0' , 'Android >= 4.0','iOS 7']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'));
});
gulp.task('default', ['serve']);
