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
