
gulp = require('gulp')
copy = require('gulp-copy')

flights = require('../config').copy.bowers

# requirements end

gulp.task "copy:bower", () ->
  for name, flight of flights
    gulp.src flight.src
      .pipe gulp.dest flight.dest

