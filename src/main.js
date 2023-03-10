import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/lib/flexible'
import dataV from '@jiaminghi/data-view'
import Element from 'element-ui'
import '@/assets/css/common.css'

Vue.config.productionTip = false;
Vue.use(dataV);
Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
