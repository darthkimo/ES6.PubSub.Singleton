# PubSub Singleton Class

A lightweight es6 PubSub class (Singleton).

## Usage
### Import the PubSub singleton

```javascript
import PubSub from './PubSub.js';

const subscription = PubSub.subscribe( 'event1', testSubscriber );
```

### Subscribe to new event with a custom callback
```javascript
PubSub.subscribe('event', callback)
```

### Publish/broadcast an event and pass optional arguments
```javascript
PubSub.publish('event', {data})
```

### Unsubscribe from a specific topic
```javascript

PubSub.unsubscribe(subscription);
```
