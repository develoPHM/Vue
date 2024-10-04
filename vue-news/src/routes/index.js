import Vue from 'vue'
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utills/bus.js'
import { store } from '../store/index.js'
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
            beforeEnter: (to,from,next) => {
                bus.$emit('start:spinner'); // 이벤트를 start:spinner 로 App.vue로 보냄
                    store.dispatch('FETCH_LIST', to.name)
                        .then(() => {
                            console.log('fetched');
                            next()
                            bus.$emit('end:spinner');
                        })
                        .catch((err) => {
                            console.log(err)
                        })
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter: (to,from,next) => {
                bus.$emit('start:spinner'); // 이벤트를 start:spinner 로 App.vue로 보냄
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        next()
                        bus.$emit('end:spinner');
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter: (to,from,next) => {
                bus.$emit('start:spinner'); // 이벤트를 start:spinner 로 App.vue로 보냄
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        next()
                        bus.$emit('end:spinner');
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
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