import geetest from './src/index.vue'

/* istanbul ignore next */
geetest.install = function (Vue) {
  Vue.component(geetest.name, geetest)
}

export default geetest
