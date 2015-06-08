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
