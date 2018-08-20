import Vue from 'vue'

export default {
  install () {
    Vue.filter('show', (value) => {
      if (value) {
        return value
      } else {
        return ''
      }
    })
    Vue.filter('money', (value) => {
      if (value || value === 0 || value === false) {
        return `¥ ${value}`
      } else {
        return ''
      }
    })
    Vue.filter('zero', (value) => {
      if (value) {
        return value
      } else {
        return 0
      }
    })
    Vue.filter('showJson', (value) => {
      if (!value) {
        return ''
      }
      let obj = null
      if (typeof value === 'string') {
        obj = JSON.parse(value)
      } else {
        obj = value
      }
      return JSON.stringify(obj, null, 2)
    })
    Vue.filter('maxLength', (value, maxLength = 50) => {
      if (!value) {
        return ''
      }
      if (value.length <= maxLength) {
        return value
      }
      return value.substring(0, maxLength) + '...'
    })
    Vue.filter('number', (value) => {
      if (!value) {
        return '0'
      }
      return value
    })
    Vue.filter('showByLists', function (value, lists, label) { // 订单过滤器
      if (!value || !lists) return ''
      let result = ''
      lists.some(item => {
        if (value === item.value) {
          result = item.label
          return true
        }
      })
      if (label === '支付类型') {
        if (result === '分期付' || result === '混合付') {
          result = '赊购'
        }
      }
      if (result) {
        return result
      } else {
        return value
      }
    })
    Vue.filter('time', function (value) { // 将时间搓格式为时间
      if (!value) return ''
      let date = new Date(value)
      if (!(date instanceof Date)) {
        return date
      }
      let fmt = 'yyyy-MM-dd hh:mm:ss'
      const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (`00${o[k]}`.substr(`${o[k]}`.length)))
        }
      }
      return fmt
    })
  }
}
