
# monitor-select

  emit events for selection and deselection of text for a given element.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/monitor-text-selection

## Example

```javascript
var el = document.querySelector('#text');
var monitor = require('monitor-text-selection')(el);
monitor.on('selected', function(e, el){
  console.log('selected');
});

monitor.on('deselected', function(e, el){
  console.log('deselected');
});
```



## License

  MIT
