import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue' // 최상위 App.vue 컴포넌트 지정
import router from './router/index.js'
import 'vue-global-api'

import './assets/scss/style.css'


const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app') // 렌더링 시작점

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome 컴포넌트 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 원하는 아이콘을 개별적으로 import */
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faCircleDown, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'



/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add(faCircleXmark, faCircleDown, faShareFromSquare, faLocationDot)

/* font awesome 컴포넌트를 전역으로 등록 */
app.component('font-awesome-icon', FontAwesomeIcon)
