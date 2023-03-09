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

    },
    actions: {
        getUserInfo() {
            queryUserProfileApi().then(res => {
                console.log(res);
            })
        }
    },
    modules: {
    }
})