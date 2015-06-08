
gulp = require('gulp')

# information from environments
mainBowerFiles = require "main-bower-files" # returns Dependency file paths

plumber = require('gulp-plumber')
gulpIf = require "gulp-if"
concat = require "gulp-concat"
config = require("../config").concat

# requirements end

gulp.task "concat_bower", () ->
  files = mainBowerFiles()
  gulp.src files
    .pipe plumber()
    .pipe gulpIf(
      (file) ->
        file.path.substr(-3) is '.js'
      , concat config.sage_name
    )
    .pipe gulp.dest config.dest
