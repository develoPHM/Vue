import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem} from '../api/index.js'

export default {
    FETCH_NEWS({commit}) {
        fetchNewsList()
            .then(res => {
                commit('SET_NEWS', res.data)
                return res
            })
            .catch(err => {
                console.log(err)
            })
    },
    FETCH_ASKS({commit}) {
        fetchAskList()
            .then(res => {
                commit('SET_ASKS', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    // UserView 에서 name 넘겨받음
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(res => {
                commit('SET_USER', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    FETCH_ITEM({commit}, id) {
        fetchItem(id)
            .then(res => {
                commit('SET_ITEM', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}