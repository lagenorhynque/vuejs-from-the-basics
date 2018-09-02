import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

const store = new Vuex.Store({
  state: {
    count: 0,
  } as State,
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
export default store;
