import utils from '@/lib/utils'
import filters from '@/lib/filters'
import api from '@/api/index.js'

// import upload from '@/components/common/upload/index.vue'
// import verifyCode from '@/components/common/verifyCode/index.vue'
// import verifyImg from '@/components/common/verifyImg/index.vue'
// import showImg from '@/components/common/showImg/index.js'
// import place from '@/components/common/place/index.vue'
// import wrap from '@/components/section/wrap/index.vue'
// import block from '@/components/section/block/index.vue'
// import table from '@/components/section/table/index.vue'

const components = [
  // upload, // 上传图片
  // verifyImg, // 图片验证
  // verifyCode, // 短信验证, 邮箱验证
  // place, // 地址信息
  // wrap, // 布局
  // block, // 块图表
  // table // 表格
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })

  // Vue.prototype.$showImg = showImg
  Vue.use(filters)

  Vue.prototype.$utils = utils
  Vue.prototype.$api = api
}

const common = {
  install,
  ...components
}
export default common
