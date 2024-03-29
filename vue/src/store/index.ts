/**
 * @file store 主入口
 */

import Vue from 'vue';
import Vuex from 'vuex';

import example from './modules/example';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example,
  },
  strict: process.env.NODE_ENV !== 'production',
});
