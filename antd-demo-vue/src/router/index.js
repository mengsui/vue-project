import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config.js'

// 解决vue路由静音返回导航错误问题（NavigationDuplicated 报错）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

