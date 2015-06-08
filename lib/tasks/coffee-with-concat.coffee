gulp = require('gulp')
coffee = require('gulp-coffee')
config = require('../config').coffee
concat = require('gulp-concat')
plumber = require('gulp-plumber')

# requirements end

gulp.task 'coffee:with_concat', () ->
  gulp.src config.src
    .pipe plumber()
    .pipe coffee()
    .pipe concat config.sage_name
    .pipe gulp.dest config.dest