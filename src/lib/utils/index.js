const utils = {
  /**
   *   日期时间格式化
   */
  formatDate (fmt, date) {
    if (!(date instanceof Date)) {
      return date
    }
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
  },
  isPhone (string) { // 手机号校验
    const Reg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (Reg.test(string)) {
      return true
    } else {
      return false
    }
  },
  isEmail (string) { // 邮箱校验
    const Reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (Reg.test(string)) {
      return true
    } else {
      return false
    }
  },
  isIdCard (value) { // 身份证校验 FIXME:更优
    const Reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    if (Reg.test(value)) {
      return true
    } else {
      return false
    }
  }
}
export default utils
