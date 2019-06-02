/**
 * @file 示例 vuex 模块
 */

import { get } from '../../utils/request';

const state = {
  message: 'Not meant to be displayed',
};

const getters = {};

const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  setMessage(state: any, message: any) {
    state.message = message;
  },
};

const actions = {
  initMessage(param: any) {
    const { commit } = param;
    commit('setMessage', 'Initial Message');
  },

  async getNewMessage(param: any) {
    const { commit } = param;
    const result = await get('/api/example', {
      params: {
        a: 1,
        b: 2,
      },
    });
    commit('setMessage', result.message);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
