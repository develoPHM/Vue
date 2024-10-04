import {
    fetchUserInfo,
    fetchItem,
    fetchList
} from '@/api'

export default {
    async FETCH_USER({commit}, name) {
        try {
            const res = await fetchUserInfo(name);
            commit('SET_USER', res.data);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async FETCH_ITEM({commit}, name) {
        try {
            const res = await fetchItem(name);
            commit('SET_ITEM', res.data);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async FETCH_LIST({commit}, name) {
        try {
            const res = await fetchList(name);
            commit('SET_LIST', res.data);
            return res;
        } catch (err) {
            console.log(err);
        }
    }
    // FETCH_USER({commit}, name) {
    //     return fetchUserInfo(name)
    //         .then(res => {
    //             commit('SET_USER', res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // },
}