import Vuex from 'vuex';
import { Commit } from 'vuex';
import products from '@/api/products.ts';
import { Product } from '@/api/products.ts';

interface State {
  detail: Product | {};
}

export default {
  namespaced: true,
  state: {
    detail: {},
  } as State,
  getters: {
    detail: (state: State) => state.detail,
  },
  mutations: {
    set(state: State, { detail }: { detail: Product }) {
      state.detail = detail;
    },
    clear(state: State) {
      state.detail = {};
    },
  },
  actions: {
    load({ commit }: { commit: Commit }, id: number) {
      products.asyncFind(id, detail => {
        if (detail) {
          commit('set', { detail });
        }
      });
    },
    destroy({ commit }: { commit: Commit }) {
      commit('clear');
    },
  },
};
