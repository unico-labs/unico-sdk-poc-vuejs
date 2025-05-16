import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    captureResult: null
  },
  mutations: {
    setCaptureResult(state, result) {
      state.captureResult = result
    }
  },
  actions: {
    saveCaptureResult({ commit }, result) {
      commit('setCaptureResult', result)
    }
  },
  getters: {
    getCaptureResult: state => state.captureResult
  }
})