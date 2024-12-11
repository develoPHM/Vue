import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// 현재 돌아가는게 개발모드인지 뭔지
console.log('MODE:', import.meta.env.MODE);
// baseUrl
console.log('BASE_URL:', import.meta.env.BASE_URL);
// 프로덕션모드라면 true
console.log('PROD:', import.meta.env.PROD);
// 개발모드라면 true
console.log('DEV:', import.meta.env.DEV);
console.log('DEV:', import.meta.env.VITE_APP_API_URL);
