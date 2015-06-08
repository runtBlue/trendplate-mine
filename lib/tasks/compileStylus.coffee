gulp = require('gulp')
stylus = require('gulp-stylus')
config = require('../config').stylus
plumber = require('gulp-plumber')

# requirements end

gulp.task 'compile:stylus', () ->
  gulp.src config.src
    .pipe plumber()
    .pipe stylus()
    .pipe gulp.dest config.dest