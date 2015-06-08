(function() {
  (function() {
    return console.log("gpartial");
  })();

}).call(this);

(function() {
  (function() {
    return console.log("index");
  })();

}).call(this);

(function() {
  var ready;

  ready = function() {
    var scope;
    scope = document.getElementById('page--index');
    if (!scope) {
      return;
    }
  };

  document.addEventListener('DOMContentLoaded', ready, false);

}).call(this);

(function() {
  window.NS = window.NS || {};

}).call(this);

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

(function() {
  window.NS.accordionItem = function(id) {
    var radio;
    radio = document.getElementById(id);
    if (radio.checked) {
      radio.checked = false;
    } else {
      radio.checked = true;
    }
  };

}).call(this);

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

(function() {
  window.NS.label = function(obj) {
    var elem, id, input;
    id = obj["for"];
    if (!document.getElementById(id)) {
      return;
    } else {
      elem = document.getElementById(id);
    }
    if (elem.nodeName.toLowerCase() !== 'input') {
      return;
    } else {
      input = elem;
    }
    if (input.getAttribute('type') === 'radio') {
      if (!input.checked) {
        input.checked = true;
      }
    }
    if (input.getAttribute('type') === 'checkbox') {
      if (!input.checked) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    }
  };

}).call(this);

(function() {
  window.NS.rating = function(name) {
    var checkbox, checkboxes, halfStar, i, removeClass, removeEvent, scope;
    checkboxes = document.getElementsByName(name);
    scope = checkboxes[0].parentNode;
    halfStar = scope.querySelector('.is-half');
    if (!halfStar) {
      return;
    }
    removeEvent = function() {
      var checkbox, i;
      for (i = checkboxes.length - 1; i >= 0; i += -1) {
        checkbox = checkboxes[i];
        checkbox.removeEventListener('click', removeClass, false);
      }
    };
    removeClass = function() {
      var a;
      a = halfStar.className.split(' ');
      a = a.filter(function(x) {
        return x !== 'is-half';
      });
      halfStar.className = a.join(' ');
      removeEvent();
    };
    for (i = checkboxes.length - 1; i >= 0; i += -1) {
      checkbox = checkboxes[i];
      checkbox.addEventListener('click', removeClass, false);
    }
  };

}).call(this);

(function() {
  document.addEventListener('DOMContentLoaded', function() {
    return FastClick.attach(document.body);
  }, false);

}).call(this);

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

(function() {
  var smoothScroll;

  smoothScroll = function() {
    var $body, $html, $link, $links, clicked, i, id, options;
    if (!document.documentElement) {
      return;
    } else {
      $html = document.documentElement;
    }
    if (!document.body) {
      return;
    } else {
      $body = document.body;
    }
    if (!document.links.length) {
      return;
    } else {
      $links = document.links;
    }
    options = {
      totalTime: 500,
      refreshRate: 15,
      disableClass: '.disabled--smoothScroll'
    };
    clicked = function(e) {
      var $link, $target, currentScrollTop, equation, goal, id, ignoreTouch, scroll, startTime, targetScrollTop;
      $link = this;
      e.preventDefault();
      ignoreTouch = function(e) {
        e.preventDefault();
      };
      $body.addEventListener('touchstart', ignoreTouch, false);
      id = $link.hash.replace('#', '').replace(/\?.*/, '');
      $target = document.getElementById(id);
      targetScrollTop = function(elem) {
        var px;
        px = 0;
        while (elem) {
          px += elem.offsetTop || 0;
          elem = elem.offsetParent;
        }
        return px;
      };
      goal = targetScrollTop($target);
      if (goal > $html.scrollHeight - window.innerHeight) {
        goal = $html.scrollHeight - window.innerHeight;
      }
      if (goal < 0) {
        goal = 0;
      }
      equation = function(a, b, c, d) {
        return a * b / c + d;
      };
      currentScrollTop = function() {
        return $html.scrollTop || $body.scrollTop;
      };
      startTime = new Date();
      scroll = function() {
        var lapseTime, oneStep;
        lapseTime = new Date() - startTime;
        oneStep = equation(goal - currentScrollTop(), lapseTime, options.totalTime, currentScrollTop());
        if (options.totalTime > lapseTime + options.refreshRate) {
          window.scrollTo(0, parseInt(oneStep));
          setTimeout(scroll, options.refreshRate);
        } else {
          window.scrollTo(0, parseInt(goal));
          $body.removeEventListener('touchstart', ignoreTouch, false);
        }
      };
      scroll();
    };
    for (i = $links.length - 1; i >= 0; i += -1) {
      $link = $links[i];
      if ($link.getAttribute('href').substring(0, 1) !== '#') {
        continue;
      }
      if ($link.className.indexOf(options.disableClass.replace('.', '')) >= 0) {
        continue;
      }
      id = $link.hash.replace('#', '').replace(/\?.*/, '');
      if (id && document.getElementById(id)) {
        $link.addEventListener('click', clicked, false);
      }
    }
  };

  window.addEventListener('load', smoothScroll, false);

}).call(this);
