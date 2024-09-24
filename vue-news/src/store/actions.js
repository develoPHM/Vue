import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem} from '../api/index.js'

export default {
    FETCH_NEWS({commit}) {
        fetchNewsList()
            .then(res => {
                commit('SET_NEWS', res.data)
            })
    },
    FETCH_ASKS({commit}) {
        fetchAskList()
            .then(res => {
                commit('SET_ASKS', res.data)
            })
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data)
            })
    },
    // UserView 에서 name 넘겨받음
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(res => {
                commit('SET_USER', res.data)
            })
    },
    FETCH_ITEM({commit}, id) {
        fetchItem(id)
            .then(res => {
                commit('SET_ITEM', res.data)
            })
    }
}