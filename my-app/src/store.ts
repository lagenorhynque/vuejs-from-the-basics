import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import product from '@/store/product.ts';

Vue.use(Vuex);

interface State {
  message: string;
}

const state: State = {
  message: 'initial message',
};

const getters = {
  message(st: State): string {
    return st.message;
  },
};

const mutations = {
  setMessage(st: State, payload: { message: string }) {
    st.message = payload.message;
  },
};

const actions = {
  doUpdate({ commit }: ActionContext<State, any>, message: string) {
    commit('setMessage', { message });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    product,
  },
});
