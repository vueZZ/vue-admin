export default {
  state: {
    netWork: true // 联网情况
  },
  mutations: {
    set_netWork (state, value) {
      state.netWork = value
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
    }
  }
}
