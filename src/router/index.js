import Vue from 'vue'
import Router from 'vue-router'
import goods from './goods'
import settings from './settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: require('@/components/layout/index.vue').default,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: '首页',
          component: require('@/views/home/index.vue').default
        },
        goods,
        settings
      ]
    },
    {
      path: '/other/refresh',
      alias: '/refresh',
      name: '刷新',
      component: require('@/views/other/refresh/index.vue').default
    }
  ]
})
