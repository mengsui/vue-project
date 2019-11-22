import Vue from 'vue'
import router from './router'
import store from './store'
import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { setDocumentTitle } from '@/utils/domUtil'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  const token= Vue.ls.get(ACCESS_TOKEN);

  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title}`))

  if(token){
    if(store.getters.menu.length === 0) {
      // 获取列表数据
      store.dispatch('user/GetMenu').then(menu=>{
        // 处理列表数据对应关系
        store.dispatch('permission/GenerateRoutes', menu).then(() => {
          
          // 动态添加可访问路由表
          router.addRoutes(store.getters.addRouters)
          /**
           * 后期 router.push 方法需要修改
           * to.path == 无拼接参数
           * to.fullPath == 有拼接参数
          */
          const redirect = decodeURIComponent(from.query.redirect || to.fullPath)
          router.push(redirect);
          NProgress.done()
        })
      }).catch(() => {
        notification.error({
          message: '错误',
          description: '请求菜单信息失败，请重试'
        })
        store.dispatch('user/Logout').then(() => {
          next('/manage/login')
          NProgress.done()
        }).catch(error => {
          next()
        })
      })
    } else {
      if(to.path == '/manage/login' || to.path === '/'){
        next('/manage')
        NProgress.done()
      } else {
        /**
          * 这里应该使用 next() 如果后台没有处理token超时返回的解构问题，前端强制跳转的登陆页面
        */
        // next();
        Vue.ls.clear();
        next('/manage/login');
      }
    };
  } else {
    // 用户没登录，跳转到登录页面
    if (to.path === '/' || to.path == '/manage/login') {
      next()
    } else {
      next('/manage/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
