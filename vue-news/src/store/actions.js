import {fetchNewsList, fetchJobsList, fetchAskList,fetchUserInfo,fetchItem} from '../api/index.js'

export default {
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
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(res => {
                context.commit('SET_JOBS', res.data)
            })
    },
    // UserView 에서 name 넘겨받음
    FETCH_USER(context, name) {
        fetchUserInfo(name)
            .then(res => {
                context.commit('SET_USER', res.data)
            })
    },
    FETCH_ITEM(context, id) {
        fetchItem(id)
            .then(res => {
                context.commit('SET_ITEM', res.data)
            })
    }
}