import axios from 'axios';
import { store } from "@/store";
import { setInterceptors} from "@/api/common/interceptors";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        Authorization: `Bearer ${store.state.token}`
    }
})

setInterceptors(instance);

function registerUser(userData) {
    return instance.post('signup', userData)
}

function loginUser(userData) {
    return instance.post('login', userData)
}

export {registerUser, loginUser};