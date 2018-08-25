export default function checkPermission (router, store) {
  if (sessionStorage.getItem('login')) {
    let flag = JSON.parse(sessionStorage.getItem('login'))
    store.commit('set_login', flag)
  }

  const whiteList = ['/login'] // 免验证白名单

  // 是否有用户——判断权限
  router.beforeEach((to, from, next) => {
    if (whiteList.indexOf(to.path) !== -1) { // 在免验证白名单，直接进入
      next()
    } else {
      if (store.getters.login) {
        next()
      } else {
        if (to.name && to.name !== '404') { // 已存在无权限路由进login页
          next('/login')
        } else {
          next()
        }
      }
    }
  })
  return router
}
