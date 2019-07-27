import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterStep: 1,
  },
  getters: {
    filterStep: state => state.filterStep,
  },
  mutations: {
    setFilterStep (state, payload) {
      state.filterStep += payload
    }
  },
  actions: {
    filterNext (context) {
      context.commit('setFilterStep', 1)
      console.log(context.state.filterStep);
    }
  }
})
