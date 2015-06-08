(function() {
  window.NS.accordion = function(id) {
    var loaded;
    loaded = function() {
      var delay, i, node, nodes;
      nodes = document.querySelectorAll('.accordion__item__block');
      for (i = nodes.length - 1; i >= 0; i += -1) {
        node = nodes[i];
        node.setAttribute('style', 'height:' + node.scrollHeight + 'px;');
      }
      delay = function() {
        var j;
        for (j = nodes.length - 1; j >= 0; j += -1) {
          node = nodes[j];
          node.className += ' is-loaded';
        }
      };
      setTimeout(delay, 300);
    };
    window.addEventListener('load', loaded, false);
  };

}).call(this);
