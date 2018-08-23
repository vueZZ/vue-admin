export default {
  path: '/goods',
  component: () => import('@/views/goods/index.vue'),
  redirect: '/goods/lists',
  children: [
    { path: '/goods/lists', name: '商品列表', component: () => import('@/views/goods/lists/index.vue'), meta: { keepAlive: true } },
    // {
    //   path: '/goods/details',
    //   name: '商品详情',
    //   component: () => import('@/views/goods/details/index.vue'),
    //   children: [
    //     { path: '/goods/details', name: '商品详情1' },
    //     { path: '/goods/details/:id', name: '商品详情2' }
    //   ]
    // }
    {
      path: '/goods/details/:id',
      name: '商品详情',
      component: () => import('@/views/goods/details/index.vue'),
      props: true
    }
  ]
}
