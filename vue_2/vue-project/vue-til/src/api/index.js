import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수
function createInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });
    return setInterceptors(instance);
}
const instance = createInstance(); // 기본 url 넣어주는 인스턴스

// 회원가입 API
function registerUser(userData) {
    return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
    return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
    return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
    return instance.post('posts', postData);
}

function deletePost(postId) {
    return instance.delete(`posts/${postId}`);  // URL에 postId를 포함시킴
}


export { registerUser, loginUser, fetchPosts, createPost, deletePost };