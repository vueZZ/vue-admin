import magnifier from './src/index.vue'

/* istanbul ignore next */
magnifier.install = function (Vue) {
  magnifier.component(magnifier.name, magnifier)
}

export default magnifier
