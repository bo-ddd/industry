import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import LoginView from "../views/loginView/loginView.vue"
Vue.use(VueRouter)

const routes = [
  { path: "/",
  name: 'login', 
  component: LoginView,
},
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
    }, {
      // 安全生产管理  > 安全隐患排查
      path: '/hiddenTrouble',
      name: 'HiddenTrouble',
      component: () => import("../views/safetyProductionManagement/HiddenTrouble/HiddenTrouble.vue")
    }, {
      // 安全生产管理  > 风险隐患详情
      path: '/hiddenDangerDetail',
      name: 'HiddenDangerDetail',
      component: () => import("../views/safetyProductionManagement/HiddenDangerDetail/HiddenDangerDetail.vue")
    }, {
      // 安全生产管理  > 卡口管理
      path: '/checkpointManagement',
      name: 'CheckpointManagement',
      component: () => import("../views/safetyProductionManagement/CheckpointManagement/CheckpointManagement.vue")
    }, {
      // 坏境管理  > 环境质量
      path: '/environmentalQuality',
      name: 'EnvironmentalQuality',
      component: () => import("../views/environmentalManagement/EnvironmentalQuality/EnvironmentalQuality.vue")
    }, {
      // 坏境管理  > 污染源
      path: '/pollutionSource',
      name: 'PollutionSource',
      component: () => import("../views/environmentalManagement/PollutionSource/PollutionSource.vue")
    }, {
      // 坏境管理  > 污染物
      path: '/pollutant',
      name: 'Pollutant',
      component: () => import("../views/environmentalManagement/pollutant/Pollutant.vue")
    }, {
      // 坏境管理  > 环保登记
      path: '/enterpriseEnvironmentalProtection',
      name: 'enterpriseEnvironmentalProtection',
      component: () => import("../views/environmentalManagement/enterpriseEnvironmentalProtection/enterpriseEnvironmentalProtection.vue")
    }, {
      // 坏境管理  > 消防
      path: '/extinguishingAndProtection',
      name: 'extinguishingAndProtection',
      component: () => import("../views/environmentalManagement/extinguishingAndProtection/ExtinguishingAndProtection.vue")
    },{
      // 办公管理  > 公文 > 发布公文
      path: '/publishKumon',
      name: 'publishKumon',
      component: () => import("../views/officeManagement/kumonManagement/publishKumon.vue")
    },{
      // 办公管理  > 事务
      path: '/transactionManagement',
      name: 'transactionManagement',
      component: () => import("../views/officeManagement/transactionManagement/transactionManagement.vue")
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
