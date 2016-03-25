var Delegator = require('dom-delegator');
var test = require('tape');
var invokeHandler = require('./index');
var clickEvent = require('value-event/click');

Delegator();

test('can invoke handlers', function (t) {
  var handle = Delegator.allocateHandle(callback);

  invokeHandler(handle);

  function callback (ev) {
    t.ok(true, 'Callback runs');
    t.equal(ev.type, 'click', 'Receives event data');
    t.end();
  }
});

test('value events work', function (t) {
  var value = 'A value!';
  var handle = Delegator.allocateHandle(callback);
  handle = clickEvent(handle, value);

  invokeHandler(handle, 'click');

  function callback (data) {
    t.ok(true, 'Callback runs');
    t.equal(data, value, 'Receives value-event data');
    t.end();
  }
});
