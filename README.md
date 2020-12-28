# PubSub Singleton Class

A lightweight es6 PubSub class (Singleton).

## Usage
### Import the PubSub singleton

```javascript
import PubSub from './PubSub.js';
```

### Subscribe to new event with a custom callback
```javascript
const topic = PubSub.subscribe( 'event', callback );
// or if you don't need to unsubscribe
PubSub.subscribe('event', callback)
```

### Publish/broadcast an event and pass optional arguments
```javascript
PubSub.publish('event', {data})
```

### Unsubscribe from a specific topic
```javascript
PubSub.unsubscribe(topic );
```
