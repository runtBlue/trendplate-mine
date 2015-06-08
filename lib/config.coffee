# idea
#   browserify and production unification
# plan
#   外部化の徹底

src = "public.src/"
dest = "public/"

exclude = (string) ->
  return "!#{string}"

config = config or {}

config.browserSync =
  server:
    baseDir: dest
    index: "index.html"

config.jade =
  src: [
    "#{src}**/*.jade"
    exclude("#{src}**/_*.jade")
    exclude("#{src}assets/elements/**/*.jade")
    exclude("#{src}assets/partials/**/*.jade")
  ]
  basedir: src
  dest: dest
  locals:
    data: (filepath) ->
      relativeRoot: filepath.replace(/[^\/]/g, '').replace(/\//g, '..\/')

config.coffee =
  src: ["#{src}**/*.coffee"]
  dest: "#{dest}javascript/"
  sage_name: "app.js"

config.stylus =
  src: [
    "#{src}css/*.stylus"
    exclude("#{src}css/_*.stylus")
  ]
  dest: "#{dest}css/"
  settings: []

config.concat =
  src: ""
  sage_name: "bower_components.js"
  dest: "#{dest}javascript/"

config.scaffold =
  all:
    jade:
      src: "scaffold/_template.jade"
      dest: "#{src}"
    coffee:
      src: "scaffold/_template.coffee"
      dest: "#{src}javascript/"
    stylus:
      src: "scaffold/_template.stylus"
      dest: "#{src}css/"
  src:
    jade: "scaffold/_template.jade"
    coffee: "scaffold/_template.coffee"
    stylus: "scaffold/_template.stylus"
  dest:
    jade: "#{src}"
    coffee: "#{src}javascript/"
    stylus: "#{src}css/"

config.copy =
  # 容赦なく実行
  bowers:
    normalize:
      src: "bower_components/normalize.css/normalize.css"
      dest: "#{src}assets/styles/scaffolds/"
    nondestructiveReset:
      src: "bower_components/nondestructive-reset.css/src/nondestructive-reset.styl"
      dest: "#{src}assets/styles/scaffolds/"
    nondestructiveResetJade:
      src: "bower_components/nondestructive-reset.css/helper/nondestructive-reset.jade"
      dest: "#{src}assets/elements/resets/"
    legacyGradient:
      src: "bower_components/legacy-gradient.styl/legacy-gradient.styl"
      dest: "#{src}assets/styles/mixins/"
    globalize:
      src: "bower_components/globalize.css/dist/globalize.styl"
      dest: "#{src}assets/styles/utilities/"
    fastclick:
      src: "bower_components/fastclick/lib/fastclick.js"
      dest: "#{src}assets/scripts/vendors/"

module.exports = config
