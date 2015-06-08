

gulp = require "gulp"
config = require "../config"

gulp.task 'watch', ["browserSync"], () ->
  gulp.watch config.coffee.src, ["compile:coffee", "browserReload"]
  gulp.watch config.jade.src, ["compile:jade", "browserReload"]
  gulp.watch config.stylus.src, ["compile:stylus", "browserReload"]
