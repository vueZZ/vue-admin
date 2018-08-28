import top from './src/main.vue'

/* istanbul ignore next */
top.install = function (Vue) {
  Vue.component(top.name, top)
}

export default top
