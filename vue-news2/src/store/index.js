import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'
export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
        users: [],
        items: []
    },
    actions,
    mutations,

})
