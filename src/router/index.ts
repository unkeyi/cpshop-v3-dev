import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: index
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    meta: {
      title: '后台管理'
    },
    component: () => import('../views/manager.vue')
  },
  {
    path: '/demo/classDemo',
    name: 'classDemo',
    meta: {
      title: '后台管理'
    },
    component: () => import('../views/demo/classDemo.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes
})

router.beforeEach((to, from) => {
  // const {isLogin} =$(useAuth)
})

export default router
