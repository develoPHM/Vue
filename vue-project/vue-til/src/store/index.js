import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        username: '',
        token: ''
    },
    getters: {
      isLogin(state) {
          return state.username !== '';
      }
    },
    mutations: {
        setUername (state, username) {
            state.username = username;
        },
        clearUername (state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        }
    }
})