import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItemInfo} from '@/api';

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(res => {
                commit('SET_NEWS', res.data)
            })
            .catch(err => console.log(err))
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then(res => {
                commit('SET_ASKS', res.data)
            })
            .catch(err => console.log(err))
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data)
            })
            .catch(err => console.log(err))
    },
    FETCH_USERS({ commit }, username ){
        fetchUserInfo(username)
            .then(res => {
                commit('SET_USERS', res.data)
            })
            .catch(err => console.log(err))
    },
    FETCH_ITEMS({ commit }, item) {
        fetchItemInfo(item)
            .then(res => {
                commit('SET_ITEMS', res.data)
            })
            .catch(err => console.log(err))
    }
}