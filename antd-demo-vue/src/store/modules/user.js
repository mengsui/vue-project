import Vue from 'vue'
import { loginAjax, menuAjax, logoutAjax } from '@/api/user'
import { ACCESS_TOKEN, USER_INFO } from '@/store/mutation-types'

const bindingPage = {
  namespaced: true,
  state: {
    menu: [],
  },
  mutations: {
    SET_MENU: (state, menu) => {
      state.menu = menu
    },
  },
  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginAjax(userInfo).then(response => {

          if(response.code == 1){
            const { jwtToken, userName, userHeadImg, phone, userId = 0 } = response.result
            Vue.ls.set(ACCESS_TOKEN, jwtToken)
            Vue.ls.set(USER_INFO, {
              userName,
              userHeadImg,
              phone,
              userId,
            })
            resolve()
          } else {
            reject(error)
          }
          
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    Logout({ commit }) {
      return new Promise((resolve, reject) => {
        logoutAjax().then(response=>{
          if(response.code == 1){
            // 登出清空 storage 数据
            Vue.ls.clear()
            resolve()
          } else {
            reject(error)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取菜单栏
    GetMenu({ commit }){
      return new Promise((resolve, reject) => {

        menuAjax().then(response => {
          /**
           * 本地开发使用Start
           * 变量说明看: @/router/ROUTER.md 文件
          */
          const menu = [
            {
              "title": "后台管理",
              "key": "manage",
              "component": "BasicLayout",
              "redirect": "/manage/home",
              "children": [
                {
                  "title": "首页（测试）",
                  "key": "home",
                  "icon": "home",
                  "meta": { title: '首页（测试）', show: true}
                },
                {
                  "title": "设置（测试）",
                  "key": "setting",
                  "icon": "setting",
                },
              ]
            }
          ]
          if(process.env.NODE_ENV == 'test'){
            response.result = []
            response.result = menu
            console.error('当前已经进入本地开发菜单栏模式！如需查看接口返回效果，请自行注释或改为线上模式！')
          }

          /**
           * 本地开发使用End
          */
          if(response.code == 1){
            const menu = response.result || [];
            commit('SET_MENU', menu)
            resolve(menu)
          } else {
            reject(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default bindingPage