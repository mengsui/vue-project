[项目说明](http://note.youdao.com/noteshare?id=adb746edfa3ee241aa1b10d7c1b243f7)
### 待完善功能
  - [ ]  测试工具
  - [ ]  国际化资源


### 执行方法
### 方法一
1、vue cli
> vue ui

### 方法二
1、安装依赖
> yarn

2、运行
> yarn serve


### 路由修改 （目前知道的解决方案，后期需要修改）
```
// @/router/index.js 解决vue路由静音返回导航错误问题（NavigationDuplicated 报错）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```

### 插件
1、vue-ls

  vue封装的本地储存的方法。

2、nprogress

  页面顶部的打开进度条就是实现的效果

3、ant-design-vue

  ant-design-vue UI组件库

