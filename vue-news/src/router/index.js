import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            //url 주소
            path: '/news',
            //url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/ask',
            component: AskView,
        }
    ]
})