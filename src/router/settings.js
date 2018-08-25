export default {
  path: '/settings',
  component: () => import('@/views/settings/index.vue'),
  redirect: '/settings/info',
  children: [
    { path: '/settings/info', name: '个人信息', component: () => import('@/views/settings/info/index.vue') }
  ]
}
