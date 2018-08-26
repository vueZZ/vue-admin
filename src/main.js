import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import zeroUI from './zero-ui/src/index'

import common from '@/lib/index.js'

import 'normalize.css'
import '@/assets/font/iconfont.css'
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(zeroUI)
Vue.use(common)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
