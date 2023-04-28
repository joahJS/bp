import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Main', component: Main },

    //회사소개
    {  
        path: '/intro',
        name: 'Intro',
        component: () => import( /* webpackChunkName: 'Intro' */ '@/pages/Intro.vue')
    },

  ],
})

export default router

//webpackChunkName 방식으로 별도의 js로 분리하여 해당 페이지 방문할때 데이터를 불러옴