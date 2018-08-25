import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    goods,
    app
  }
})

export default store
