import Vue from 'vue';
import Vuex from 'vuex';
import product from '@/store/product.ts';

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
  modules: {
    product,
  },
});
export default store;
