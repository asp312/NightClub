/* eslint-disable */
export default {
  namespaced: true,
  state: {
    modalFlag: false
  },
  getters: {
    getModalFlag: state => state.modalFlag
  },
  mutations: {
    toogleMutation (state, data) {
      state.modalFlag = data
    }
  },
  actions: {
    toogleAction ({commit}, data) {
      commit('toogleMutation', data)
    }
	}
}