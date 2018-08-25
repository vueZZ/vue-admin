import Vue from 'vue'

export default {
  install () {
    Vue.filter('showByLists', function (value, lists) { // 订单过滤器
      if (!value || !lists) return ''
      let result = ''
      lists.some(item => {
        if (value === item.value) {
          result = item.label
        }
      })
      return result
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
