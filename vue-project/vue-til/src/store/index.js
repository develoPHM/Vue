import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from "@/utils/cookies";
import { loginUser } from '@/api'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || ''
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
    },
    actions: {
        async LOGIN({ commit }, userData) {
            const res = await loginUser(userData)
            // 메인페이지로이동
            commit('setToken', res.data.token )
            commit('setUername', res.data.user.username)
            saveAuthToCookie(res.data.token)
            saveUserToCookie(res.data.user.username)
            // return data
        }
    }
})