import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import goods from './goods'
import settings from './settings'
import checkPermission from './permission'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: require('@/layouts/default/index.vue').default,
      redirect: '/login',
      children: [
        {
          path: '/home',
          name: '首页',
          component: require('@/views/home/index.vue').default,
          meta: {
            icon: 'icon-home'
          }
        },
        goods,
        settings
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: require('@/views/login/index.vue').default
    },
    {
      path: '/other/refresh',
      alias: '/refresh',
      name: '刷新',
      component: require('@/views/other/refresh/index.vue').default
    }
  ]
})

export default checkPermission(router, store)
