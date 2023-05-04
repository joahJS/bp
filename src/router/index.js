import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'


const routes = [
  { 
    path: '/',
    name: 'Main',
    component: Main,
  },

  //회사소개
  {  
      path: '/greet',
      name: 'Greet',
      component: () => import( /* webpackChunkName: 'Greet' */ '@/pages/Greet.vue')
  },
  {  
    path: '/hist',
    name: 'History',
    component: () => import( /* webpackChunkName: 'History' */ '@/pages/History.vue')
  },
  {  
    path: '/cert',
    name: 'Certificate',
    component: () => import( /* webpackChunkName: 'Certificate' */ '@/pages/Certificate.vue')
  },
  {  
    path: '/path',
    name: 'Path',
    component: () => import( /* webpackChunkName: 'Path' */ '@/pages/Path.vue')
  },

]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

//webpackChunkName 방식으로 별도의 js로 분리하여 해당 페이지 방문할때 데이터를 불러옴