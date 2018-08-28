import img from './src/index.vue'

/* istanbul ignore next */
img.install = function (Vue) {
  Vue.component(img.name, img)
}

export default img
