import Vue from 'vue'

class VueBus {
  constructor () {
    this.bus = new Vue()
  }

  emit (...args) {
    return this.bus.$emit(...args)
  }

  on (...args) {
    return this.trigger(this.bus.$on, ...args)
  }

  off (...args) {
    return this.bus.$off(...args)
  }

  once (...args) {
    return this.trigger(this.bus.$once, ...args)
  }

  trigger (func, ...args) {
    if (args.length === 2) {
      func.call(this.bus, args[0], args[1])
    } else {
      Object.keys(args[0]).forEach(key => func.call(this.bus, key, args[0][key]))
    }
    return this
  }

  register () {
    Vue.prototype.$vuebus = this
  }
}

export default new VueBus()
