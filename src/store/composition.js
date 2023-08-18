/* eslint-disable */
export default {
  namespaced: true,
  state: {
    currentCmpositionType: 'rnb',
    compositionIndex: 0,
    compositionArray: ['rnb', 'electro', 'pop'],
    people: [
      {
        name: 'Oleg',
        rnb: true,
        pop: true,
        electro: false
      }, 
      {
        name: 'Petr',
        rnb: false,
        pop: true,
        electro: true
      }
    ],
    dancePeople: [],
    barPeople: [],
    rnbCount: 1,
    electroCount: 1,
    popCount: 2
  },
  getters: {
    getDancePeople: state => state.dancePeople,
    getBarPeoples: state => state.barPeople,
    getAllPeopleLength: state => state.people.length,
    getRnbCount: state => state.rnbCount,
    getElectroCount: state => state.electroCount,
    getPopCount: state => state.popCount,
    getCurrentCmpositionType: state => state.currentCmpositionType
  },
  mutations: {
    firstFilterMutation (state) {
      state.dancePeople = []
      state.barPeople = []
      state.people.map(item => {
        if (item[state.currentCmpositionType]) {
          state.dancePeople.push(item)
        } else {
          state.barPeople.push(item)
        }
      })
    },
    newCompositionMutation (state) {
      state.compositionIndex < 2 ? state.compositionIndex = state.compositionIndex + 1 : state.compositionIndex = 0
      state.currentCmpositionType = state.compositionArray[state.compositionIndex]
    },
    addPeopleMutation (state, data) {
      if (data.rnb) state.rnbCount = state.rnbCount + Number(data.count)
      if (data.electro) state.electroCount = state.electroCount + Number(data.count)
      if (data.pop) state.popCount = state.popCount + Number(data.count)
      for (let i = 0; i < data.count; i++) {
        state.people.push({ rnb: data.rnb, electro: data.electro, pop: data.pop })
      }
    }
  },
  actions: {
    firstFilterAction ({ commit }) {
      commit('firstFilterMutation')
    },
    setNewComposition ({ commit }) {
      commit('newCompositionMutation')
      commit('firstFilterMutation')
    },
    addPeopleAction ({ commit }, data) {
      commit('addPeopleMutation', data)
      commit('firstFilterMutation')
    }
	}
}