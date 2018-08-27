import Vue from 'vue'

export default {
  install () {
    Vue.filter('showByLists', function (value, lists) { // 状态列表过滤器
      if (!value || !lists) return ''
      let result = ''
      lists.some(item => {
        if (value === item.value) {
          result = item.label
        }
      })
      return result
    })
    Vue.filter('money', function (value, lists) { // 金钱过滤器
      if (!value || !lists) return ''
      let result = ''
      lists.some(item => {
        if (value === item.value) {
          result = item.label
        }
      })
      return result
    })
    Vue.filter('number', function (value) { // 数字过滤
      if (!value && value !== 0) return
      let n = Number(value)
      if (n) {
        if (n < 10000) {
          return n
        } else if (n < 100000000) {
          let s = (n / 10000).toFixed(2)
          return `${s}万`
        } else {
          let s = (n / 100000000).toFixed(2)
          return `${s}亿`
        }
      } else {
        return ''
      }
    })
    Vue.filter('timestamp', function (value) { // 将时间搓格式为时间
      if (!value) return ''
      if (typeof value === 'string') {
        value = Number(value)
      }
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
