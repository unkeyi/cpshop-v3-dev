// import { RouteRecordRaw } from 'vue-router'

// const routes: Array<RouteRecordRaw> = [
const routes: Array<any> = [
  {
    path: '/menus/adminA',
    name: 'adminA',
    meta: {
      title: 'adminA页面'
    },
    component: () => import('../views/menus/adminA.vue')
  },
  {
    path: '/menus/adminB',
    name: 'adminB',
    meta: {
      title: 'classDemo页面'
    },
    component: () => import('../views/menus/adminB.vue')
  }
]

export default routes
