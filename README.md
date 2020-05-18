# VueBus

> A dead-simple event bus for Vue 2.

## Installation

Install VueBus with yarn or npm:
  
  ```bash
  yarn add @phanan/vuebus
  # or
  npm install @phanan/vuebus
  ```

## Usage

First, import and initialize a new VueBus instance:
  
  ```js
  import VueBus from '@phanan/vuebus'

  const bus = new VueBus()
  ```

### Emit an event

```js
bus.emit('userLoggedIn')
bus.emit('userLoggedIn', 'with', 'additional', data)
```

### Listen to events

With VueBus, you can listen and react to one event:

```js
bus.on('userLoggedIn', () => this.sayHello())
```

or an array of events:

```js
bus.on(['userLoggedIn', 'userLoggedBackIn'], () => this.sayHello())
```

By passing an object of `{ eventName: callbackFunction }` shape, you can listen to several events and react to each of them with a different callback:

```js
bus.on({
  userLoggedIn () {
    this.sayHello()
  },

  userLoggedOut () {
    this.sayGoodbye()
  }
})
```

### `once` and `off`

VueBus's `once` and `off` behave exactly like their [Vue](https://vuejs.org/v2/api/#vm-once) [counterparts](https://vuejs.org/v2/api/#vm-off).

### Attach to Vue.prototype

VueBus can attach itself to Vue.prototype and become available as an instance property with the `attach` function . By default, you can access VueBus as `this.$vuebus`, but the property name can be customized by passing a string as an argument. 

```js
(new VueBus()).attach()

// VueBus is now available as a Vue's instance property
this.$vuebus.emit('userLoggedIn')

// Use a custom property name
(new VueBus()).attach('$bus')
this.$bus.emit('userLoggedIn')
```

## License

MIT © [Phan An](https://phanan.net)