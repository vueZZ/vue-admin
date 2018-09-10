import axios from 'axios'
import router from '../router'
import store from '../store'
import { Notification } from 'element-ui'

axios.defaults.withCredentials = true

const server = axios.create({
  timeout: 10000,
  baseURL: '/admin'
})

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// TODO:api code错误处理
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
    const errortext = error.response.data.msg || codeMessage[error.response.status]
    handleError(error.response.code, errortext)
  } else {
    store.dispatch('changeNetwork', false)
    let msg = '错误：联网失败'
    return Promise.reject(msg)
  }
})

export default server
