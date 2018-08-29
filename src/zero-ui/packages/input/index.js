import input from './src/index.vue'

/* istanbul ignore next */
input.install = function (Vue) {
  Vue.component(input.name, input)
}

export default input
