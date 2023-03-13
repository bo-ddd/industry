import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, loginApi } from "@/api/api";
import { deptNoList, layoutRoutes } from '@/config/roles'
import { queryUserProfileApi } from '@/api/api'
Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    token: '',
    time: 0,
    ifGetInfo: true,
    userInfo: {},
    menuFlag: true,
    menuList: []
  },
  getters: {
  },
  mutations: {
    SET_MENULIST(state,payload){
      state.menuList=payload;
      state.menuFlag=false;
    },
    NEW_TOKEN(state, payload) {
      state.time = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
      state.ifGetInfo = false;
    },
    newDate(state, payload) {
      state.time = new Date().getTime()
    },
    setToken(state, payload) {
      state.token = payload
    },
    setMenuFlag(state, payload) {

      state.menuFlag = payload
    }
  },
  actions: {
    //获取角色对应的所有路由
    getMenuList({state,commit,dispatch}, payload) {
      let user = state.userInfo;
      let userPower;
      let menu;
      if (user.deptNo) {
        userPower = deptNoList.find(dept => {
          return dept.deptId == user.deptNo
        })?.roles.find(role => {
          return role.roleId == user.roles
        })
      }
      if (userPower.permissions.length) {
        menu = layoutRoutes.filter(route => {
          return userPower.permissions.includes(route.mate.permissiont)
        })
      }
      commit('SET_MENULIST',menu)
      console.log('路由列表');
      console.log(menu);
      console.log(menu);
      console.log(menu);
    },
    getUserInfo({ commit }) {
      return queryUserProfileApi().then(res => {
        commit("setUserInfo", res.data)
      })
    },
    //刷新方法
    refresh(ctx, payload) {
      return getToken({}).then((res) => {
        ctx.commit('NEW_TOKEN', new Date().getTime())
        ctx.commit('SET_TOKEN', res.data.data.access_token)
        return res
      });
    },
    login(ctx, payload) {
      return loginApi({
        username: payload.username,
        password: payload.password,
      }).then(res => {
        return res

      }).catch(res => {
        return res
      })
    },
  },
  //登录
  //刷新方法

  modules: {
  }

})
