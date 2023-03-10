import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import LoginView from "../views/loginView/loginView.vue"
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
    name: 'Layout',
    component: Layout,
    children: [{
      // 园区经济管理  < 经济管理
      path: '/EconomyManage',
      name: 'EconomyManage',
      component: () => import("../views/ParkEconomyManage/EconomyManage.vue"),
      mate: {
        permissiont: [20]
      }
    }, {
      // 安全生产管理  > 风险分级管控
      path: '/riskControl',
      name: 'RiskControl',
      component: () => import("../views/safetyProductionManagement/riskControl/RiskControl.vue"),
      mate: {
        permissiont: [3]
      }
    }, {
      // 安全生产管理  > 安全防护
      path: '/safetyProtection',
      name: 'SafetyProtection',
      component: () => import("../views/safetyProductionManagement/SafetyProtection/SafetyProtection.vue"),
      mate: {
        permissiont: [7]
      }
    }, {
      // 安全生产管理  > 运输管理
      path: '/transportationView',
      name: 'TransportationView',
      component: () => import("../views/safetyProductionManagement/TransportationView/TransportationView.vue"),
      mate: {
        permissiont: [8]
      }
    }, {
      // 安全生产管理  > 人员管理
      path: '/userManagement',
      name: 'UserManagement',
      component: () => import("../views/safetyProductionManagement/UserManagement/UserManagement.vue"),
      mate: {
        permissiont: [5]
      }
    }, {
      // 安全生产管理  > 安全生产信息
      path: '/prdInfo',
      name: 'PrdInfo',
      component: () => import("../views/safetyProductionManagement/PrdInfo/PrdInfo.vue"),
      mate: {
        permissiont: [4]
      }
    }, {
      // 安全生产管理  > 安全生产监管
      path: '/SuperviseView',
      name: 'SuperviseView',
      component: () => import("../views/safetyProductionManagement/SuperviseView/SuperviseView.vue"),
      mate: {
        permissiont: [1]
      }
    }, {
      // 安全生产管理  > 安全隐患排查
      path: '/hiddenTrouble',
      name: 'HiddenTrouble',
      component: () => import("../views/safetyProductionManagement/HiddenTrouble/HiddenTrouble.vue"),
      mate: {
        permissiont: [2]
      }
    }, {
      // 安全生产管理  > 风险隐患详情
      path: '/hiddenDangerDetail',
      name: 'HiddenDangerDetail',
      component: () => import("../views/safetyProductionManagement/HiddenDangerDetail/HiddenDangerDetail.vue"),
      mate: {
        permissiont: [9]
      }
    }, {
      // 安全生产管理  > 卡口管理
      path: '/checkpointManagement',
      name: 'CheckpointManagement',
      component: () => import("../views/safetyProductionManagement/CheckpointManagement/CheckpointManagement.vue"),
      mate: {
        permissiont: [6]
      }
    }, {
      // 坏境管理  > 环境质量
      path: '/environmentalQuality',
      name: 'EnvironmentalQuality',
      component: () => import("../views/environmentalManagement/EnvironmentalQuality/EnvironmentalQuality.vue"),
      mate: {
        permissiont: [10]
      }
    }, {
      // 坏境管理  > 污染源
      path: '/pollutionSource',
      name: 'PollutionSource',
      component: () => import("../views/environmentalManagement/PollutionSource/PollutionSource.vue"),
      mate: {
        permissiont: [11]
      }
    }, {
      // 坏境管理  > 污染物
      path: '/pollutant',
      name: 'Pollutant',
      component: () => import("../views/environmentalManagement/pollutant/Pollutant.vue"),
      mate: {
        permissiont: [13]
      }
    }, {
      // 坏境管理  > 环保登记
      path: '/enterpriseEnvironmentalProtection',
      name: 'enterpriseEnvironmentalProtection',
      component: () => import("../views/environmentalManagement/enterpriseEnvironmentalProtection/enterpriseEnvironmentalProtection.vue"),
      mate: {
        permissiont: [12]
      }
    }, {
      // 坏境管理  > 消防
      path: '/extinguishingAndProtection',
      name: 'extinguishingAndProtection',
      component: () => import("../views/environmentalManagement/extinguishingAndProtection/ExtinguishingAndProtection.vue"),
      mate: {
        permissiont: [15]
      }
    }, {
      // 办公管理  > 公文 > 发布公文
      path: '/publishKumon',
      name: 'publishKumon',
      component: () => import("../views/officeManagement/kumonManagement/publishKumon.vue"),
      mate: {
        permissiont: [21, 2101]
      }
    },
    {
      // 办公管理  > 公文 > 公文详情
      path: '/checkView',
      name: 'checkView',
      component: () => import("../views/officeManagement/kumonManagement/checkView.vue"),
      mate: {
        permissiont: [21, 2102]
      }
    }, {
      // 办公管理  > 事务
      path: '/transactionManagement',
      name: 'transactionManagement',
      component: () => import("../views/officeManagement/transactionManagement/transactionManagement.vue"),
      mate: {
        permissiont: [22]
      }
    }, {
      //园区应急管理 > 应急模拟训练
      path: '/meetDrill',
      name: 'meetDrill',
      component: () => import("../views/meet/meetDrill/meetDrill.vue"),
      mate: {
        permissiont: [16]
      }
    },
    {
      //园区应急管理 > 应急检测预警
      path: '/meetEarly',
      name: 'meetEarly',
      component: () => import("../views/meet/meetEarly/meetEarly.vue"),
      mate: {
        permissiont: [17]
      }
    },
    {
      //园区应急管理 > 应急预案管理
      path: '/meetPlan',
      name: 'meetPlan',
      component: () => import("../views/meet/meetPlan/meetPlan.vue"),
      mate: {
        permissiont: [18]
      }
    },
    {
      //园区应急管理 > 应急预案管理详情
      path: '/meetPlandetail',
      name: 'meetPlandetail',
      component: () => import("../views/meet/meetPlandetail/meetPlandetail.vue"),
      mate: {
        permissiont: [18, 1801]
      }
    },
    {
      //园区应急管理 > 应急资源管理
      path: '/meetResource',
      name: 'meetResource',
      component: () => import("../views/meet/meetResource/meetResource.vue"),
      mate: {
        permissiont: [19]
      }
    },
    {
      // 坏境管理  > 能源管理
      path: '/energyManagement',
      name: 'EnergyManagement',
      component: () => import("../views/environmentalManagement/energyManagement/EnergyManagement.vue"),
      mate: {
        permissiont: [14]
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
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token');
  if (to.name == 'login') {
    next();
  } else if (to.name != 'login' && !token) {
    next({ path: '/' });
  } else {
    this.$store.dispatch("getUserInfo")
    let userInfo = this.$store.state.userInfo
    console.log(userInfo);
    next();
  }
})



export default router
