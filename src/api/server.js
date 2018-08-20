import axios from 'axios'

axios.defaults.withCredentials = true

const server = axios.create({
  timeout: 15000,
  baseURL: '/api'
})

server.interceptors.response.use(function (res) {
  return Promise.resolve(res)
}, function (error) {
  let msg = ''
  if (error.response) {
    msg = error.response.data.message || error.status
  } else {
    msg = error.message
  }
  console.error(msg)
  return Promise.reject(msg)
})

export default server
