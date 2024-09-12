import Vue from 'vue'
import Vuex from 'vuex'
import {fetchNewsList, fetchJobsList, fetchAskList} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: []
    },
    mutations : {
        SET_NEWS(state, news) {
            state.news = news
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs
        },
        SET_ASKS(state, ask) {
            state.ask = ask
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(res => {
                    context.commit('SET_NEWS', res.data)
                })
        },
        FETCH_ASKS(context) {
            fetchAskList()
                .then(res => {
                    context.commit('SET_ASKS', res.data)
                })
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then(res => {
                    context.commit('SET_JOBS', res.data)
                })
        }
    }
})