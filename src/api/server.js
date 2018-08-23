import axios from 'axios'
import router from '../router'
import store from '../store'
import { Notification } from 'element-ui'

axios.defaults.withCredentials = true

const server = axios.create({
  timeout: 10000,
  baseURL: '/api'
})

const handleError = (code, msg) => {
  switch (code) {
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作.
    case 401:
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break

    // 403 token过期
    // 登录过期对用户进行提示
    // 清除本地token和清空vuex中token对象
    // 跳转登录页面
    case 403:
      Notification.warning({
        title: '警告',
        message: '登录过期，请重新登录'
      })
      // // 清除token
      // localStorage.removeItem('token');
      // store.commit('loginSuccess', null);
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      // setTimeout(() => {
      //     router.replace({
      //         path: '/login',
      //         query: {
      //           redirect: router.currentRoute.fullPath
      //         }
      //     });
      // }, 1000);
      break

    // 404请求不存在
    case 404:
      Notification.warning({
        title: '警告',
        message: '请求不存在'
      })
      break
    // 其他错误，直接抛出错误提示
    default:
      Notification.warning({
        title: '警告',
        message: msg
      })
      return Promise.reject(msg)
  }
}

server.interceptors.response.use(function (res) {
  return Promise.resolve(res)
}, function (error) {
  if (error.response) {
    let msg = error.response.data.msg
    handleError(error.response.code, msg)
  } else {
    store.dispatch('changeNetwork', false)
    let msg = '错误：联网失败'
    return Promise.reject(msg)
  }
})

export default server
