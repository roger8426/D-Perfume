import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/scss/all.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Home from './HomePage.vue'
import router from './router'

const app = createApp(Home)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
