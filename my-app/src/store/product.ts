import Vuex, { ActionContext } from 'vuex';
import products, { Product } from '@/api/products.ts';

interface State {
  detail: Product | {};
}

const state: State = {
  detail: {},
};

const getters = {
  detail: (st: State) => st.detail,
};

const mutations = {
  set(st: State, { detail }: { detail: Product }) {
    st.detail = detail;
  },
  clear(st: State) {
    st.detail = {};
  },
};

const actions = {
  load({ commit }: ActionContext<State, any>, id: number) {
    products.asyncFind(id, detail => {
      if (detail) {
        commit('set', { detail });
      }
    });
  },
  destroy({ commit }: ActionContext<State, any>) {
    commit('clear');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
