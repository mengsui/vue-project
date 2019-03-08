// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/flexible.js'
import Cube from 'cube-ui'
import $ from 'jquery'

//把方法添加到vue全局
import common from '@/common/currency.js'
Vue.prototype.common = common

Vue.use(Cube)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
