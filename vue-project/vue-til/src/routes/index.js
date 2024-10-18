import Vue from 'vue';
import router from 'vue-router';
Vue.use(router);

export default new router({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue')
        },
        {
            path: '/main',
            component: () => import('@/views/MainPage.vue')
        },
        {
            path: '/add',
            component: () => import('@/views/PostAddPage.vue')
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage.vue')
        }
    ]
})