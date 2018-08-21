export default {
  path: '/goods',
  component: () => import('@/views/goods/index.vue'),
  redirect: '/goods/lists',
  children: [
    { path: '/goods/lists', name: '商品列表', component: () => import('@/views/goods/lists/index.vue') }
  ]
}
