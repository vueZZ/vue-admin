import button from '../packages/button/index.js'
import input from '../packages/input/index.js'

import top from '../packages/top/index.js'
import img from '../packages/img/index.js'
import preview from '../packages/preview/index.js'
import geetest from '../packages/geetest/index.js'

const components = [
  top,
  img,
  geetest,
  button,
  input
]

const install = function (Vue) {
  /* istanbul ignore next */
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$preview = preview
}

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  top
}
