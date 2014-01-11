var Emitter = require('emitter');
var selected = require('on-select');
var deselected = require('on-deselect');

module.exports = function(el){
  var emitter = new Emitter();
  var unbindSelect, unbindDeselect;

  unbindSelect = selected(el, function(e){
    emitter.emit('selected', e, el);
    unbindDeselect = deselected(el, function(e){
      emitter.emit('deselected', e, el);
      unbindDeselect();
    });
  });

  emitter.unbind = function(){
    if (unbindSelect) unbindSelect();
    if (unbindDeselect) unbindDeselect();
  }

  return emitter;
};


