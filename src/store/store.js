import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: '',  //zh, en
  },

  mutations: {
    setLanguage(state, lang) {
      state.lang = lang;
      localStorage.lang = lang;
    }
  },

  getters: {
    language (state) {
      return state.lang || localStorage.lang;
    }
  },

  actions: {},

  modules: {
  }
});
