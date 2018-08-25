import goods from './goods'

const api = {
  // 数据校验方法
  check: {
    default: function (res) {
      return res.data
    },
    cehckResult: function (res) {
      if (res.data.success === true) {
        if (res.data.data) {
          return res.data.data
        } else {
          let msg = `规范：请在data字段中返回数据（res）`
          throw msg
        }
      } else {
        let msg = `错误：${res.data.msg}`
        throw msg
      }
    }
  },
  // ——————api配置——————
  ...goods,
  'login': { url: '/user/info', type: 'post', check: 'cehckResult' },
  'user.info': { url: '/user/info', type: 'post', check: 'cehckResult' }
}

export default api
