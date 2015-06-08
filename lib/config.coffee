# idea
#   browserify and production unification
# plan
#   外部化の徹底

src = "public.resource/"
dest = "public/"

config = config or {}

config.browserSync =
  server:
    baseDir: "./public/"
    index: "index.html"

config.jade =
  src: [
    'public.resource/**/*.jade'
    '!public.resource/**/_*.jade'
    '!public.resource/assets/elements/**/*.jade'
    '!public.resource/assets/partials/**/*.jade'
  ]
  basedir: "public.resource/"
  dest: "public/"
  locals:
    data: (filepath) ->
      relativeRoot: filepath.replace(/[^\/]/g, '').replace(/\//g, '..\/')

config.coffee =
  src: ['public.resource/**/*.coffee']
  dest: "public/javascript/"
  sage_name: "app.js"

config.stylus =
  src: [
    "public.resource/css/*.stylus"
    "!public.resource/css/_*.stylus"
  ]
  dest: "public/css/"
  settings: []

config.concat =
  src: ""
  sage_name: "bower_components.js"
  dest: 'public/javascript/'

config.scaffold =
  all:
    jade:
      src: "scaffold/_template.jade"
      dest: "public.resource/"
    coffee:
      src: "scaffold/_template.coffee"
      dest: "public.resource/javascript/"
    stylus:
      src: "scaffold/_template.stylus"
      dest: "public.resource/css/"
  src:
    jade: "scaffold/_template.jade"
    coffee: "scaffold/_template.coffee"
    stylus: "scaffold/_template.stylus"
  dest:
    jade: "public.resource/"
    coffee: "public.resource/javascript/"
    stylus: "public.resource/css/"

config.copy =
  # 容赦なく実行
  bowers:
    normalize:
      src: 'bower_components/normalize.css/normalize.css'
      dest: 'public.resource/assets/styles/scaffolds/'
    nondestructiveReset:
      src: 'bower_components/nondestructive-reset.css/src/nondestructive-reset.styl'
      dest: 'public.resource/assets/styles/scaffolds/'
    nondestructiveResetJade:
      src: 'bower_components/nondestructive-reset.css/helper/nondestructive-reset.jade'
      dest: 'public.resource/assets/elements/resets/'
    legacyGradient:
      src: 'bower_components/legacy-gradient.styl/legacy-gradient.styl'
      dest: 'public.resource/assets/styles/mixins/'
    globalize:
      src: 'bower_components/globalize.css/dist/globalize.styl'
      dest: 'public.resource/assets/styles/utilities/'
    fastclick:
      src: 'bower_components/fastclick/lib/fastclick.js'
      dest: 'public.resource/assets/scripts/vendors/'

module.exports = config
