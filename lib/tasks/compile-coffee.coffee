gulp = require('gulp')
coffee = require('gulp-coffee')
config = require('../config').coffee
concat = require('gulp-concat')
plumber = require('gulp-plumber')

# requirements end

gulp.task 'compile:coffee', () ->
  gulp.src config.src
    .pipe plumber()
    .pipe coffee()
    .pipe gulp.dest config.dest
