import button from '../packages/button/index.js'
import input from '../packages/input/index.js'
import form from '../packages/form/index.js'
import formItem from '../packages/form-item/index.js'

import top from '../packages/top/index.js'
import img from '../packages/img/index.js'
import preview from '../packages/preview/index.js'
import geetest from '../packages/geetest/index.js'
import magnifier from '../packages/magnifier/index.js'

const components = [
  // 通用组件
  input,
  form,
  formItem,
  // 特殊组件
  top,
  img,
  geetest,
  button,
  magnifier
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
