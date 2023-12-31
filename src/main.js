import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Verify from './pages/Verify.vue'
import Prevention from './pages/Prevention.vue'
import Inquire from './pages/Inquire.vue'
import Success from './pages/Success.vue'


import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: Home },
        { path: '/verify', component: Verify},
        { path: '/prevention', component: Prevention},
        { path: '/inquire', component: Inquire},
        { path: '/success', component:Success}
    ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');


