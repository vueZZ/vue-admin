export default {
  path: '/settings',
  name: '设置',
  component: require('@/views/other/block/index.vue').default,
  redirect: '/settings/info',
  children: [
    { path: '/settings/info', name: '个人信息', component: () => import('@/views/settings/info/index.vue'), meta: { show: true } }
  ]
}
