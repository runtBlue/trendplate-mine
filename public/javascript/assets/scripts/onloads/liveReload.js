(function() {
  if (location.port === '3000') {
    document.addEventListener('DOMContentLoaded', function() {
      var script;
      script = document.createElement('script');
      script.src = '//localhost:35729/livereload.js';
      document.body.appendChild(script);
    }, false);
  }

}).call(this);
