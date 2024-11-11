import axios from 'axios';
// 중복되는 url 변수로 만들어버리기
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}
function fetchItemInfo(item) {
    return axios.get(`${config.baseUrl}item/${item}.json`)
}
export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo
}