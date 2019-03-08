/**
 * 处理方式
 *
 */
export default ({
  /**
   * 设置cookie
   * @param name 登陆者昵称
   * @param mid 用户的唯一id 如有重名可通过mid识别
   * @param day cookie过期时间（单位：天）
   * @param juri 当前用户权限 (非必填)
   */
  setCookie(name, mid, day, juri) {
    let date = new Date();  // 获取时间
    //date.getTime()：指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数。
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * day);  // 保存天数 1000ms * 60s * 60min * 24h = 1d
    // 字符串拼接cookie
    // window.document.cookie = "userTel" + "=" + tel + ";path=/;expires=" + date.toGMTString();
    window.document.cookie = "userName" + "=" + name + ";path=/;expires=" + date.toGMTString();
    window.document.cookie = "userMid" + "=" + mid + ";path=/;expires=" + date.toGMTString();

    juri ? window.document.cookie = "userJuri" + "=" + juri + ";path=/;expires=" + date.toGMTString() : '';
  },
  /**
   * 获取cookie
   * @param key 需要对应值的key
   * @returns value key所对应的值
   * document.cookie直接获取的cookie原格式：userTel=***********; userName=***
   * 注意：获取原cookie格式的";"后含有一个空格
   */
  getCookie(key) {
    if(document.cookie.length > 0) {
      // 切割后格式：userTel=***********,userName=***
      let arr = document.cookie.split('; ');
      let value = '';  // 用于存储所需cookie值
      for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=');  // 再次切割
        if (arr2[0] == key){
          value = arr2[1];
          return value;
        }
      }
    }
    return null
  },
  /**
   * 清除cookie
   * 将cookie的数据设空，时间设0
   */
  clearCookie: function() {
    this.setCookie("", "", 0);
  },
  /**
   * 项目状态数据类型转换
   * @param state 当前状态
   * @param field 要修改的字段
   */
  projectStatus: function(state) {
    switch (Number(state)) {
      case -1:
        return '中断关闭';
      case 0:
        return '计划中';
      case 1:
        return '执行中';
      case 2:
        return'已完成';
      case 3:
        return '暂停中';
      default:
        console.log("数据错误："+state);
        break;
    };
  },
  backProjectStatus: function(val) {
    switch (val) {
      case '中断关闭':
        return -1;
      case '计划中':
        return 0;
      case '执行中':
        return 1;
      case '已完成':
        return 2;
      case '暂停中':
        return 3;
      default:
        console.log("数据错误："+state);
        break;
    };
  }
})
