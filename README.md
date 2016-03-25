# Invoke Handler
Manually invoke a dom-delegator handler, dominantly for use in test cases.


## Install

```
npm i --save-dev invoke-handler
```

## Usage
```js
var invokeHandler = require('invoke-handler');

// handler is from dom-delegator or similar, executed through dom-delegator
invokeHandler(handler);
```

# API
#### `invokeHandler (handler[, eventType][, eventData])`
Invoke a given handler reference.

**handler**

 * *Required*
 * Type: `event handler`
   * handler from `dom-delegator`
   * raw function
   * object with `handleEvent` property which is a function


**eventType**

The string name of the event type, defaults to `click`. This is passed to `dispatch-event`.

 * *Optional*
 * Type: `string`


**eventData**

Event data to passed directly to `dispatch-event`.

 * *Optional*
 * Type: `object`


## Testing

```
npm run test
```

## License
MIT
