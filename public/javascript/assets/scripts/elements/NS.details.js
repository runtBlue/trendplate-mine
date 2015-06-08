(function() {
  window.NS.details = function() {
    window.addEventListener('load', function() {
      var i, node, nodes;
      nodes = document.querySelectorAll('.details__block');
      for (i = nodes.length - 1; i >= 0; i += -1) {
        node = nodes[i];
        node.setAttribute('style', 'height:' + node.scrollHeight + 'px;');
      }
    }, false);
  };

}).call(this);
