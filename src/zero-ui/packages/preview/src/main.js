import Vue from 'vue'
import Main from './main.vue'
// 返回一个 扩展实例构造器
let MessageConstructor = Vue.extend(Main)

let instance
let instances = []
let seed = 1

const showImg = function (options) {
  if (Vue.prototype.$isServer || !options) return
  if (typeof options === 'string') {
    options = {
      src: options
    }
  }
  let id = 'showImg_' + seed++
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()
  // document.body.style.overflow = 'hidden'
  document.body.appendChild(instance.vm.$el)
  instances.push(instance)
  //   // 提前 250ms 执行淡出动画(因为我们再css里面设置的隐藏动画持续是250ms)
  // setTimeout(() => {instance.vm._data.showContent = false} ,options.duration - 1250)
  // // 过了 duration 时间后隐藏整个组件
  // setTimeout(() => {instance.vm._data.showWrap = false} ,options.duration)
  return instance.vm
}

//   // 提前 250ms 执行淡出动画(因为我们再css里面设置的隐藏动画持续是250ms)
//   setTimeout(() => {toastDom.showContent = false} ,duration - 1250)
//   // 过了 duration 时间后隐藏整个组件
//   setTimeout(() => {toastDom.showWrap = false} ,duration)
// }

// // 注册为全局组件的函数
// function registryToast() {
//   // 将组件注册到 Vue 的 原型链里去,
//   // 这样就可以在所有 Vue 的实例里面使用 this.$toast()
//   Vue.prototype.$toast = showToast
// }

export default showImg
