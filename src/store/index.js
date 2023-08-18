import Vue from 'vue'
import Vuex from 'vuex'
import composition from './composition'
import modal from './modal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    composition,
    modal
  }
})
