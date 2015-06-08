gulp = require('gulp')
browserSync = require "browser-sync"

# requirements end

gulp.task "browserReload", () ->
  browserSync.reload()
