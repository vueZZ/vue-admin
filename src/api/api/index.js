const api = {
  // 数据校验方法
  check: {
    default: function (res) {
      return res.data
    },
    cehckResult: function (res) {
      console.log(res.data)
      if (res.data.success === true) {
        if (res.data.data) {
          return res.data.data
        } else {
          let msg = `规范：请在data字段中返回数据（res）`
          throw msg
        }
      } else {
        let msg = `错误：${res.data.success},${res.data.msg}`
        throw msg
      }
    }
  },
  // ——————api配置——————
  // goods:
  // 获取商品列表
  'goods.lists': { url: '/goods/lists', type: 'get', check: 'cehckResult' }
}

export default api
