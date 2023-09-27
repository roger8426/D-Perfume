import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/scss/all.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'

const app = createApp(App)

app.use(createPinia())
app.config.globalProperties.$filters = { currency, date }
app.use(router)
app.use(VueAxios, axios)
app.component('LoadingView', Loading)
app.mount('#app')
