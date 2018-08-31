export function getPropByPath (obj, path, strict) {
  // strict: 严格判断，可获取obj.user.name
  let tempObj = obj
  let keyArr = path.split('.')
  for (let index = 0; index < keyArr.length; index++) {
    if (!tempObj && !strict) break
    let key = keyArr[index]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      throw new Error('please transfer a valid prop path to form item!')
    }
  }
}