import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, loginApi } from "@/api/api";
import rolesList from '@/config/roles'
import { queryUserProfileApi } from '@/api/api'
Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    token: '',
    time: 0
  },
  getters: {
  },
  mutations: {
     NEW_TOKEN(state,payload){
       state.time =payload
    },
     SET_TOKEN(state,payload){
      state.token = payload

     },
    setUserInfo(state, payload) {
      // state.userInfo = payload
      Object.assign(state.userInfo, payload)
      console.log(state.userInfo);
    },
    newDate(state, payload) {
      state.time = new Date().getTime()
    },
    setToken(state, payload) {
      state.token = payload
    },
  },
  actions: {
    getUserInfo({ commit }) {
      queryUserProfileApi().then(res => {
        commit("setUserInfo", res.data)
      })
      },
      //刷新方法
      refresh(ctx,payload){
      return getToken({}).then((res) => {
        ctx.commit('NEW_TOKEN', new Date().getTime())
        ctx.commit('SET_TOKEN',res.data.data.access_token)
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
