import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, loginApi } from "@/api/api";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    time:0
  },
  getters: {
  },
  mutations: {
     newDate(state,payload){
      state.time = new Date().getTime()
     },
     setToken(state,payload){
      state.token = payload
     },
    },
    actions: {
      //登录
      login(ctx,payload){
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
      //刷新方法
      refresh(ctx,payload){
       getToken({}).then((res) => {
        ctx.commit('newDate')
        ctx.commit('setToken',res.data.data.access_token)
         sessionStorage.setItem("token", res.data.data.access_token);
         sessionStorage.setItem("time", new Date().getTime());
       });
      }
    },
  modules: {
  }
  
})
