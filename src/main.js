import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/scss/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as rules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$filters = { currency, date }
app.use(router)
app.use(pinia)
app.use(VueAxios, axios)
app.component('LoadingView', Loading)
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
