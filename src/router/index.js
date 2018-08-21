import Vue from 'vue'
import Router from 'vue-router'
import goods from './goods'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: require('@/components/layout/index.vue').default,
      children:[
        goods
      ]
    }
  ]
})
