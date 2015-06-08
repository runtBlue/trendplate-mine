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
