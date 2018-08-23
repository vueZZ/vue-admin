// goods:
export default {
  // 获取商品列表
  'goods.lists': { url: '/goods/lists', type: 'get', check: 'cehckResult' },
  // 获取商品详情
  'goods.details': { url: '/goods/lists', type: 'get', check: 'cehckResult' },
  // 商品添加
  'good.add': { url: '/goods/add', type: 'post', check: 'cehckResult' },
  // 商品修改
  'good.edit': { url: '/goods/edit', type: 'post', check: 'cehckResult' },
  // 商品删除
  'good.delete': { url: '/goods/delete', type: 'post', check: 'cehckResult' }
}
