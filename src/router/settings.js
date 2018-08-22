export default {
  path: '/settings',
  component: () => import('@/views/settings/index.vue')
  // redirect: '/setting/home',
  // children: [
  //   { path: '/setting/home', name: '设置首页', component: () => import('@/views/setting/index.vue'), meta: { keepAlive: true, name: 'goodsLists' } }
  // ]
}
