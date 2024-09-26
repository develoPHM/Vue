import Vue from 'vue'
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            //url 주소
            path: '/news',
            name: 'news',
            //url 주소로 갔을 때 표시될 컴포넌트
            // components: 'NewsView.vue' 기존 컴포넌트
            component: createListView('NewsView'), // 기존컴포넌트 위에 컴포넌트가 생김
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path:'/user/:id',
            component: UserView
        },
        {
            path:'/item/:id',
            component: ItemView,
        },
    ]
})