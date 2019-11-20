## router说明
router页面配置文件夹 generator-routers.js。

路由为动态添加，

1、获取位置为 @/src/store/modules/user.js 下的 GetMenu 方法。

2、动态添加位置为 @/src/permission.js 路由跳转的时候去添加动态路由。

```
// 动态路由参数说明 支持多级
{
  code: 1,
  result: {
    menu: [
      {
        "title": "后台管理",// 标题
        "key": "manage",// 定死：根路径。注意：这个不能修改。目前前端已经定死根路径为manage
        "name": "index",// 定死：
        "component": "BasicLayout",// 定死：布局方式。注意：这个前端已经定死。
        "redirect": "/manage/smallProgram",// 后端控制： 用户登陆后跳转到那个页面 smallProgram == 下面的key
        "children": [// 后端控制：下面参数全是可控
          {
            "title": "首页",// 后端控制：菜单名称
            "key": "home",// 后端控制：菜单路径
            "icon": "setting",// 后端控制：菜单icon
            "hidden": false,//（非必填）默认值:false false == 在菜单栏显示  true == 在菜单栏隐藏
          },
          ...
        ]
      }
    ]
  }
}
```