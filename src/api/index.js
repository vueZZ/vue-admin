import server from './server'
import api from './api'

export default function (methods, data) {
  let url = api[methods]
  let config
  if (url && url.type) {
    if (url.type === 'post') {
      config = {
        method: 'post',
        data: data,
        ...url
      }
    } else {
      config = {
        method: 'get',
        params: data,
        ...url
      }
    }
    return server(config).then(res => {
      if (url.check) {
        return api.check[url.check](res)
      } else {
        return api.check.default(res)
      }
    })
  } else {
    let msg = '无此url'
    throw msg
  }
}
