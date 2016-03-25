var EvStore = require('ev-store');
var dispatchEvent = require('dispatch-event');
var document = require('global/document');

module.exports = invokeHandler;

function invokeHandler (handler, ev, data) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  EvStore(div).event = handler;

  dispatchEvent(div, ev || 'click', data);
  document.body.removeChild(div);
}
