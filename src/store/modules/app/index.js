export default {
  state: {
    netWork: true, // 联网情况
    sub: false
  },
  mutations: {
    set_netWork (state, value) {
      state.netWork = value
    },
    changeSub (state, value) {
      state.sub = value
    }
  },
  actions: {
    changeNetwork ({ commit }, value) {
      commit('set_netWork', value)
    }
  },
  getters: {
    netWork (state) {
      return state.netWork
    },
    sub (state) {
      return state.sub
    }
  }
}
