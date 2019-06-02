/**
 * @file vue 主入口
 */

import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
