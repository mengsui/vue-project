import Vue from 'vue'
import axios from 'axios'
import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { configData } from '@/utils/env.js';

// 创建 axios 实例
const service = axios.create({
  baseURL: configData.baseURL,
  timeout: 6000, // 请求超时时间
})

/**
 * 服务器 status 错误处理
 * status == 403提示
*/
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    if (error.response.status === 403 || error.response.status === 401) {
      notification.error({
        message: error.response.status,
        description: data.message
      })
    }
  }
  return Promise.reject(error)
}

// 添加请求拦截器
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  // 默认数据（所有接口全部添加）
  let defaultData = {
    device: 3,
  };

  // 请求头修改
  if (token) {
    config.headers['Authorization'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  };

  // 请求方式处理
  if(config.method == 'post' || config.method == 'put'){
    /**
     * multipart/form-data 图片提交方式 不需要处理数据
    */
    if(config.headers['Content-Type'] != 'multipart/form-data'){
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.transformRequest = [function (data) {
        data = {
          ...data,
          ...defaultData,
        }
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substring(0, ret.lastIndexOf('&'))
        return ret
      }];
    };
  } else {
    config.headers['Content-Type'] = 'application/json';
    defaultData = {
      ...defaultData,
      ...config.data,
    }
  };


  // 把处理好的数据重置给config
  config.params = {
    ...defaultData,
    ...config.params,
  }
  return config
}, err)


/** 添加响应拦截器
 * 服务器返回 code 说明
 * 1   === 返回成功
 * 600 === 登录失败，用户名或密码错误
 * 601 === 请求失败，登录失效
 * 602 === 用户非法，请重新登录或者联系管理员
 * 603 === DEVICE参数非法
 * 604 === TOKEN参数非法
 * 605 === TOKEN超时,请重新登录
*/
service.interceptors.response.use((response) => {
  // 错误提示
  if(response.data.code != 1){
    notification.error({
      message: response.data.msg,
    });
  };
  // 登陆失效
  if(response.data.code == 601 || response.data.code == 602 || response.data.code == 603 || response.data.code == 604 || response.data.code == 605){
    // 当接口返回-1000的时候标示登录失效。需要重新登录
    notification.error({
      message: response.data.msg,
    });
    // TOKEN 已经失效了。无需在推出登陆。直接重新登陆
    Vue.ls.clear();
    setTimeout(() => {
      window.location.reload()
    }, 1500);
  }
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}


