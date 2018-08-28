import button from './src/index.vue'

/* istanbul ignore next */
button.install = function (Vue) {
  Vue.component(button.name, button)
}

export default button
