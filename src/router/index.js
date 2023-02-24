import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/layout" },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    children: [{
      path: '/home',
      name: 'Home',
      component: ()=>import('../views/home/HomeView.vue') ,
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
