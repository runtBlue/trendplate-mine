gulp = require('gulp')
gulpJade = require('gulp-jade')
jade = require "jade"

config = require('../config').jade
plumber = require('gulp-plumber')

# requirements end

gulp.task 'jade', () ->
  gulp.src config.src, {base: config.basedir}
    .pipe plumber()
    .pipe gulpJade
      jade: jade
      pretty: true
      basedir: config.basedir
      # jade 内で、コンパイル前の変数に与える。cf. data
      locals: config.locals
    .pipe gulp.dest config.dest
