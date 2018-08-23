import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    goods,
    app
  }
})

export default store
