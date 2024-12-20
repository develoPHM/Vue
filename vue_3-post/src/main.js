import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import globalComponents from '@/plugins/global-components';
import focus from '@/directives/focus';
import dayjs from '@/plugins/dayjs';
const app = createApp(App);
app.use(router);
app.use(globalComponents);
app.directive('focus', focus);
app.use(dayjs);

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
// import funcPlugins from '@/plugins/func';
// import person from '@/plugins/person';
// import objPlugins from '@/plugins/obj';
// app.use(funcPlugins);
// app.use(objPlugins, { name: '오리' });
// app.use(person);
