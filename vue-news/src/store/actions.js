import {fetchNewsList, fetchJobsList, fetchAskList} from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => {
                console.log(res.data)
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
    }
}