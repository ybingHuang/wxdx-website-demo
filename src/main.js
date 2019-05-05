import '@babel/polyfill';

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './locale/locale';
import App from './App.vue';
import router from './router';
import store from './store/store';

import axios from './axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueAxios, axios);


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
