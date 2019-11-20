import { UserLayout } from '@/layouts'

// 基础路由
export const constantRouterMap = [
  {
    path: '/',
    component: UserLayout,
    redirect: '/manage/login',
    children: [
      {
        path: '/manage/login',
        name: 'login',
        component: () => import('@/views/user/Login')
      },
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  // {
  //   path: '*', redirect: '/404', hidden: true
  // }
]