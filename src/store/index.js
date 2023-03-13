import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, loginApi } from "@/api/api";
import {deptNoList,layoutRoutes} from '@/config/roles'
import { queryUserProfileApi } from '@/api/api'
Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    token: '',
    time: 0,
    ifGetInfo: true,
    userInfo: {},
    menuFlag: true,
    menuList:[]
  },
  getters: {
  },
  mutations: {
    SET_MENULIST(state,payload){
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
      if(userPower)menu= layoutRoutes.filter(route=>{
        return userPower.includes(route.mate.permissiont)
      })
      console.log('路由列表');
      console.log(user);
      console.log(userPower);
      console.log(menu);
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
      console.log(state.userInfo);
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
    getUserInfo({ commit }) {
      return queryUserProfileApi().then(res => {

        commit("setUserInfo", res.data)

      })
    },
    //获取角色对应的所有路由
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
        console.log(res);
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
