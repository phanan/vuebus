import Vue from 'vue'

type EmitObjectBasedDeclaration = {
  [event: string]: Function
}

function isEmitDeclaration(value: string | string[] | EmitObjectBasedDeclaration): value is EmitObjectBasedDeclaration {
  return (value as EmitObjectBasedDeclaration) instanceof Object
}

class VueBus {
  private readonly bus: Vue

  constructor (vue?: Vue) {
    this.bus = vue ? vue : new Vue()
  }

  emit (event: string, ...args: any[]): VueBus {
    this.bus.$emit(event, ...args)

    return this
  }

  on (event: string | string[] | EmitObjectBasedDeclaration, callback?: Function): VueBus {
    if (!isEmitDeclaration(event)) {
      if (!callback) {
        throw new Error('[VueBus] Expected callback to be a function, got undefined')
      }

      this.bus.$on(event, callback)
    } else {
      Object.keys(event).forEach(key => this.bus.$on(key, event[key]))
    }

    return this
  }

  off (event?: string | string[], callback?: Function): VueBus {
    this.bus.$off(event, callback)

    return this
  }

  once (event: string | string[], callback: Function): VueBus {
    this.bus.$once(event, callback)

    return this
  }

  /**
   * @deprecated. Use attach() instead.
   */
  register (name: string = '$vuebus'): VueBus {
    return this.attach(name)
  }

  attach (name: string = '$vuebus'): VueBus {
    Vue.prototype[name] = this

    return this
  }
}

export default VueBus
