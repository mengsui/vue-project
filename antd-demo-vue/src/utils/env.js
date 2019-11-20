// 正式环境
const baseFormal = {
  baseURL: '//xxxx.com',
}

// 测试环境
const baseTest = {
  baseURL: '//xxxx.com',
}

let configData = baseFormal
if(process.env.NODE_ENV == 'test'){
  console.warn('当前环境变量：', process.env.NODE_ENV)
  configData = baseTest
}

export {
  configData
}
