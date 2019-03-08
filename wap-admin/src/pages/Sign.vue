<template>
  <div class="content">
    <img class="logo" src="http://www.saoxiankeji.com/img/logo-1-03.png">
    <div class="name ipt">
      <cube-input
        v-model="name"
        placeholder="请输入姓名"
      ></cube-input>
    </div>
    <div class="password ipt">
      <cube-input
        v-model="password"
        placeholder="请输入密码"
        type="password"
      ></cube-input>
    </div>

    <div class="btn">
      <cube-button @click='signClick()'>登陆</cube-button>
    </div>

    <div class="login-link">
      <a href="/Register">免费注册</a>
    </div>

    <cube-popup type="my-popup" ref="elastic">
      账号输入错误
    </cube-popup>
    <cube-popup type="my-popup" :mask="false" ref="pass">
      密码错误
    </cube-popup>
  </div>
</template>

<script>
export default {
  name: 'signpage',
  data() {
    return {
      name: '',
      id: '',
      password: '',
      jurisdiction: '',
      day: 1,//cookie过期时间（单位：天）
      data: {
        user: [
          {
            name: '测试账号1',//账户名称
            id: '1',//用户唯一识别
            pass: '111',//密码
            jurisdiction: '1',//1 == 普通用户，2 == 高级用户， 3 == 超级管理员
          },
          {
            name: '测试账号2',
            id: '2',
            pass: '222',
            jurisdiction: '2',
          },
          {
            name: 'admin',
            id: '3',
            pass: '333',
            jurisdiction: '3',
          }
        ]
      },
    }
  },
  methods: {
    signClick: function() {//用户输入后判断是否可以登录
      const self = this;
      const name = self.name;
      const password = self.password;
      let _name = false;//判断当前账号是否正确
      let _pass = false;//判断当前密码是否正确
      this.data.user.map(i => {//比对当前已有注册用户数据看下是否在当前数据中
        if(i.name == name ){
          _name = true;
          if (i.pass == password) {
            _pass = true;
            self.jurisdiction = i.jurisdiction;
            self.id = i.id;
          }
        }
      });

      //判断当前用户输入信息是否正确
      if(_name) {
        if(_pass){
          //用户名等信息存储到cookie里面
          self.common.setCookie(self.name, self.id, self.day, self.jurisdiction,);

          // alert('登录成功');
          self.$router.push({
            path: '/Total'
          });

        } else {
          //密码错误
          self.showPopup('pass');
        }
      } else {
        //账号错误
        self.showPopup('elastic');
      };

    },
    //弹框显示
    showPopup(refId) {
      const component = this.$refs[refId];
      component.show();
      setTimeout(() => {
        component.hide();
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/scss/pages/sign.scss';
</style>

