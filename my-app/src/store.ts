import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  message: string;
}

const store = new Vuex.Store({
  state: {
    message: 'initial message',
  } as State,
  getters: {
    message(state) {
      return state.message;
    },
  },
  mutations: {
    setMessage(state, payload: { message: string }) {
      state.message = payload.message;
    },
  },
  actions: {
    doUpdate({ commit }, message: string) {
      commit('setMessage', { message });
    },
  },
});
export default store;
