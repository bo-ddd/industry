import Vue from 'vue'
import Vuex from 'vuex'

import rolesList from '@/config/roles'
import { queryUserProfileApi } from '@/api/api'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
    },
    getters: {

    },
    mutations: {
        setUserInfo(state, payload) {
            // state.userInfo = payload
            Object.assign(state.userInfo,payload)
            console.log(state.userInfo);
        }
    },
    actions: {
         getUserInfo({ commit }) {
             queryUserProfileApi().then(res => {
                commit("setUserInfo", res.data)
            })
        }
    },
    modules: {
    }
})
