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
      // 园区经济管理  < 经济管理
      path: '/EconomyManage',
      name: 'EconomyManage',
      component: () => import("../views/ParkEconomyManage/EconomyManage.vue")
    }, {
      // 安全生产管理  > 风险分级管控
      path: '/riskControl',
      name: 'RiskControl',
      component: () => import("../views/safetyProductionManagement/riskControl/RiskControl.vue")
    }, {
      // 安全生产管理  > 安全防护
      path: '/safetyProtection',
      name: 'SafetyProtection',
      component: () => import("../views/safetyProductionManagement/SafetyProtection/SafetyProtection.vue")
    }, {
      // 安全生产管理  > 运输管理
      path: '/transportationView',
      name: 'TransportationView',
      component: () => import("../views/safetyProductionManagement/TransportationView/TransportationView.vue")
    }, {
      // 安全生产管理  > 人员管理
      path: '/userManagement',
      name: 'UserManagement',
      component: () => import("../views/safetyProductionManagement/UserManagement/UserManagement.vue")
    }, {
      // 安全生产管理  > 安全生产信息
      path: '/prdInfo',
      name: 'PrdInfo',
      component: () => import("../views/safetyProductionManagement/PrdInfo/PrdInfo.vue")
    }, {
      // 安全生产管理  > 安全生产监管
      path: '/SuperviseView',
      name: 'SuperviseView',
      component: () => import("../views/safetyProductionManagement/SuperviseView/SuperviseView.vue")
    }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
