import Vue from 'vue'
import Router from 'vue-router'
//页面引入
import Sign from '@/pages/Sign'
import Register from '@/pages/Register'
import Total from '@/pages/Total'
import Detail from '@/pages/Detail'
import Personal from '@/pages/Personal'
import AddTask from '@/pages/AddTask'
import Admin from '@/pages/Admin'
import Super from '@/pages/Super'

Vue.use(Router)

export default new Router({
  mode: 'history',//加载模式选择  注意：默认是hash 但是选择的时候不会刷新
  routes: [
    {//登录页面
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {//注册页面
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {//所有项目详情页面
      path: '/Total',
      name: 'Total',
      component: Total
    },
    {//单个项目详情页面（项目修改、单元信息修改也在里面）
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {//个人信息修改页面
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {//添加项目
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask
    },
    {//人员管理页面
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {//管理员修改他人信息页面
      path: '/Super',
      name: 'Super',
      component: Super
    },
  ]
})
