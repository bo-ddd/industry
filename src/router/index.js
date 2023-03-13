import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import LoginView from "../views/loginView/loginView.vue"
import vuex from "../store/index";
import {layoutRoutes} from '../config/roles'
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
    children: [ {
      // 安全生产管理  > 人员管理
      path: '/userManagement',
      name: 'UserManagement',
      component: () => import("../views/safetyProductionManagement/UserManagement/UserManagement.vue"),
      mate: {
        permissiont: 5
      }
    },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//导航守卫
router.beforeEach(async (to, from, next) => {
  console.log('导航守卫'+to.name);
  let token = sessionStorage.getItem('token');
  if (to.name == 'login') {
    next();
  } else if (to.name != 'login' && !token) {
    next({ path: '/' });
    // next()
  }
  else {
    if (!vuex.state.menuFlag) {
      console.log('有信');
      console.log(vuex.state.userInfo);
      next();
    } else {
      console.log('无信');
      // vuex.commit('SET_MENULIST');
      // let user = vuex.state.userInfo;
      // let userPower;
      // if (user.deptNo) {
      //   userPower = roleList.find(dept => {
      //     return dept.deptId == user.deptNo
      //   })?.roles.find(role => {
      //     return role.roleId == user.roles
      //   })
      // }
      //   userPower?.permissions.forEach(power => {
      //     let addRouter = layoutRout.find(item => item.mate?.permissiont[0] == power);
      //     console.log('找到了');
      //     console.log(addRouter);
          //  if (addRouter) 
          //  router.addRoute('layout',
          //  {
          //    // 办公管理  > 公文 > 发布公文
          //    path: '/publishKumon',
          //    name: 'publishKumon',
          //    component: () => import("../views/officeManagement/kumonManagement/publishKumon.vue"),
          //    mate: {
          //      permissiont: [21]
          //    }
          //  })
      //   })
      // next({ ...to, replace: false });
      next()
    }
  }
})



export default router
