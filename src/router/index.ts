import { createRouter, createWebHistory } from 'vue-router'

const routes: any = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/index.vue'),
  },
]


const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router


