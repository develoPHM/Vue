import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from "@/store";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: `${store.getters.isLogin ? '/main' : '/login'}`,
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
            component: () => import('@/views/MainPage.vue'),
            meta: { auth: true}
        },
        {
            path: '/add',
            component: () => import('@/views/PostAddPage.vue'),
            meta: { auth: true}
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters.isLogin) {
        console.log('인증이 필요합니다.')
        next('/login')
        return; // 밑의 next() 실행 굳이 안시키기
    }
    next();
})

export default router;