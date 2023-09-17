import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'D-Perfume',
      component: () => import('../HomePage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue')
    }
  ]
})

export default router
