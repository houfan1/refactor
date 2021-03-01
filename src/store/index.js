import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testData: []
  },
  getters: {
    getTestData: state => {
      return state.testData
    }
  },
  mutations: {
    increment (state, n) {
      state.testData = n
      console.log(state.testData)
    }
  },
  actions: {
    asyncGetData ({ commit }) {
      return new Promise((resolve, reject) => { 
        setTimeout(() => {
          let list = [
            { value: '111', label: '222' },
            { value: '2121', label: '2121' }
          ]
          commit('increment', list)
          resolve()
        }, 1000)
      })
    }
  },
  modules: {}
})
