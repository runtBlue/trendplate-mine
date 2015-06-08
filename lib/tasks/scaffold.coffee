gulp = require 'gulp'
rename = require "gulp-rename"
template = require "gulp-template"
argv = require("minimist")(process.argv.slice(2))

config = require('../config').scaffold.all

# requirements end

gulp.task "scaffold", () ->

  project_name = argv.s or "noname"

  for name, flight of config
    gulp.src flight.src
      .pipe rename("#{project_name}.#{name}")
      .pipe template(name: project_name)
      .pipe gulp.dest flight.dest
