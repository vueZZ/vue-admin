export default {
  state: {
    lists: '' // 商品列表
  },
  mutations: {
    set_lists (state, value) {
      state.lists = value
    }
  },
  actions: {
    getGoodsLists ({ commit }, data) {
      commit('set_lists', data)
    }
  },
  getters: {
    goodsLists (state) {
      return state.lists
    }
  }
}
