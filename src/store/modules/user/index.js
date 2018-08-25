import api from '@/api/index'

export default {
  state: {
    login: false
  },
  mutations: {
    set_login (state, value) {
      state.login = value
      sessionStorage.setItem('login', value)
    }
  },
  actions: {
    async handleLogin ({ commit }, data) {
      try {
        await api('login', data)
        commit('set_login', true)
      } catch (error) {
        commit('set_login', false)
        throw error
      }
    }
  },
  getters: {
    login (state) {
      return state.login
    }
  }
}
