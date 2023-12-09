import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/BasicLayout.vue'
import userLayout from '../layout/UserLayout.vue'

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
      {
        path: '/reset',
        name: 'reset',
        component: () => import('../views/login/reset.vue'),
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue'),
      },  
      {
        path: '/',
        name: 'userLayout',
        component: userLayout,
        redirect: '/home',
        children: [
          {
            path: '/record',
            name: 'record',
            component: () => import('../views/user/record.vue'),
          },
          {
            path: '/collection',
            name: 'collection',
            component: () => import('../views/user/collection.vue'),
          },
        ],
      },
      {
        path: '/collection/:id',
        name: 'collectionDetails',
        component: () => import('../views/user/collectionDetails.vue'),
      },
      {
        path: '/topic',
        name: 'topic',
        component: () => import('../views/topic/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
