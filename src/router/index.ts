import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/layout.vue'
import datahome from '@/views/datahome.vue'
import menus from './menus'
import user from './user'

export const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '后台管理'
    },
    component: index, // 使用布局组件
    children: [...menus]
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
    path: '/datahome',
    name: 'datahome',
    meta: {
      title: '地图页'
    },
    component: datahome
  },
  ...user
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // const {isLogin} =$(useAuth)
  next()
})

export default router
