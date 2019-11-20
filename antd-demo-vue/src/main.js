import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 取 Storage 数据
import VueStorage from 'vue-ls'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './permission' // permission control

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueStorage, {
  namespace: 'mage_',
  name: 'ls',
  storage: 'local',
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
