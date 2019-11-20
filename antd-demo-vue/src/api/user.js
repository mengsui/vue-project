import { axios } from '@/utils/request';

export function loginAjax(parameter){
  // 正式链接
  // return axios({
  //   url: '/api/doLogin',
  //   method: 'POST',
  //   data: {
  //     ...parameter,
  //   }
  // })

  // 测试返回使用Start
  return new Promise((resolve)=>{
    resolve({
      "result": {
          "userName": "比目鱼",
          "userHeadImg": "http://files.shouhuobao.com/product/31169042126609419_1564131175088.jpg",
          "phone": "15810240230",
          "userId": 1001,
          "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMDAxIiwic3ViIjoi55m75b2VSldUIiwiZXhwIjoxNTc0MjM0OTkzLCJpYXQiOjE1NzQyMjA1OTN9.u47qL3TW9o7IWOBxWHljRks8BmYoyw0F6pWZmEpu2z4",
      },
      "code": 1,
      "msg": "登录成功",
    })
  })
  // 测试返回使用Start
}

export function logoutAjax(){
  // 正式链接
  // return axios({
  //   url: '/api/logout',
  //   method: 'GET',
  // })

  // 测试返回使用Start
  return new Promise((resolve)=>{
    resolve({
      "code": 1,
      "msg": "注销成功",
    })
  })
  // 测试返回使用Start
}

export function menuAjax(){
  // 正式链接
  // return axios({
  //   url: '/api/index',
  //   method: 'GET',
  // })

  // 测试返回使用Start
  return new Promise((resolve, reject)=>{
    resolve({
      code: 1,
      result: [
        {
          "title": "后台管理",
          "key": "manage",
          "component": "BasicLayout",
          "redirect": "/manage/home",
          "children": [
            {
              "title": "首页（接口）",
              "key": "home",
              "icon": "home",
            },
            {
              "title": "设置（接口）",
              "key": "setting",
              "icon": "setting",
            },
          ]
        }
      ]
    })
  })
  // 测试返回使用Start
}