#######################################
# 'gulp help'
#######################################
gulp = require("gulp")
taskListing = require('gulp-task-listing')
gulp.task('help', taskListing)
#######################################
# aliasis
# TaskName with "_ or : or etc.." is regarded as SubTask
#######################################
# gulp.task "alias01", ["default"]
#######################################
# partials loading
#######################################
requireDir = require('require-dir')
requireDir './tasks', recurse: true
