import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Upload from '../views/Upload.vue'
import Relatorio from '../views/Relatorio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    alias: '/Login',
    component: Login
  },

  {
    path: '/dashboard',
    component: Dashboard,

    children: [
      {
        path: 'upload',
        name: 'upload',
        component: Upload
      },

      {
        path: 'relatorios',
        name: 'relatorios',
        component: Relatorio
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router