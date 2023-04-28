import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue' // 최상위 App.vue 컴포넌트 지정
import router from './router/index.js'
import 'vue-global-api'
import { ref } from "vue"

import './assets/scss/style.css'


const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app') // 렌더링 시작점

