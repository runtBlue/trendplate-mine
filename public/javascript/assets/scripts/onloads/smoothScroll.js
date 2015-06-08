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
