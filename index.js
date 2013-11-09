var Emitter = require('emitter');
var selected = require('on-select');
var deselected = require('on-deselect');

module.exports = function(el){
  var emitter = new Emitter();
  selected(el, function(e){
    emitter.emit('selected', e, el);
    deselected(el, function(e){
      emitter.emit('deselected', e, el);
    });
  });
  return emitter;
};


