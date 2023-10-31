import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/BasicLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/home/index.vue'),
        name: 'home',
      },
      {
        path: '/problemset',
        name: 'problemset',
        component: () => import('../views/problemset/index.vue')
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/login/signup.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
