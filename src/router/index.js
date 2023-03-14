import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import LoginView from "../views/loginView/loginView.vue"
import vuex from "../store/index";
import { layoutRoutes } from '../config/roles'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'login',
    component: LoginView,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/Home.vue")
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: []
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//导航守卫
router.beforeEach(async (to, from, next) => {
  console.log('导航守卫' + to.name);
  let token = sessionStorage.getItem('token');
  if (to.name == 'login') {
    next();
  } else if (to.name != 'login' && !token) {
    next({ path: '/' });
  }
  else {
    if (!vuex.state.menuFlag) {
      console.log('有信');
      next();
    } else {
      console.log('无信');
      if (vuex.state.ifGetInfo) {
        await vuex.dispatch('getUserInfo')
      }
      if (vuex.state.menuFlag) {
        await vuex.dispatch('getMenuList');
        vuex.state.menuList.forEach(route => {
          router.addRoute('layout', route)
        })
      }
      next({ ...to, replace: true });
      // next()
    }
  }
})



export default router
