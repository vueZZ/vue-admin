export default {
  path: '/goods',
  name: '商品',
  redirect: '/goods/lists',
  meta: {
    icon: 'icon-goods'
  },
  component: require('@/views/other/block/index.vue').default,
  children: [
    { path: '/goods/lists', name: '商品列表', component: () => import('@/views/goods/lists/index.vue'), meta: { keepAlive: true, show: true } },
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
