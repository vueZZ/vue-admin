export default {
  path: '/goods',
  component: () => import('@/views/goods/index.vue'),
  redirect: '/goods/lists',
  children: [
    { path: '/goods/lists', name: '商品列表', component: () => import('@/views/goods/lists/index.vue'), meta: { keepAlive: true, name: 'goodsLists' } },
    { path: '/goods/details', name: '商品详情', component: () => import('@/views/goods/details/index.vue') }
  ]
}
