<template>
  <div>
    <img class="logo" src="http://www.saoxiankeji.com/img/shibie.png">
    <div class="table">
      <div class="tr fd-clr">
        <div class="tit f-l">昵称：</div>
        <div class="content f-l">
          <cube-input
            class="title ipt"
            v-model="title"
            placeholder="请输入昵称"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">姓名：</div>
        <div class="content f-l">
          <cube-input
            class="title ipt"
            v-model="name"
            placeholder="请输入姓名"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">手机号：</div>
        <div class="content phone f-l">
          <cube-input
            class="title ipt"
            v-model="phone"
            @blur="phoneFun()"
            placeholder="请输入手机号"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">邮箱：</div>
        <div class="content mail f-l">
          <cube-input
            class="title ipt"
            v-model="mail"
            @blur="email()"
            placeholder="请输入邮箱"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">岗位：</div>
        <div class="content f-l">
          <cube-input
            class="post ipt"
            v-model="post"
            placeholder="请输入岗位"
            ></cube-input>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">新密码：</div>
        <div class="content f-l">
          <cube-input
            class="title ipt"
            v-model="pass"
            type="password"
            placeholder="密码"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">在次输入密码：</div>
        <div class="content f-l">
          <cube-input
            class="title ipt"
            v-model="againpass"
            type="password"
            placeholder="在次输入密码"/>
        </div>
      </div>
    </div>

    <div class="bot">
      <p @click="subClick()" class="btn active">保存</p>
    </div>

    <cube-popup type="my-popup" ref="elastic">
      手机号格式错误
    </cube-popup>
    <cube-popup type="my-popup" :mask="false" ref="pass">
      密码错误
    </cube-popup>
  </div>
</template>
<script>
export default {
  name: 'personal',
  data() {
    return {
      mid: '',//当前用户唯一标示
      disabled: true,//禁止修改

      headimg: 'wu',//头像
      title: '不服就是干',//昵称
      name: '平头哥',//姓名
      phone: '15810240230',//手机号
      mail: '120@qq.com',//邮箱
      post: '印度',//岗位
      pass: '',//密码
      againpass: '',//在次确认密码
    }
  },
  created() {
    this.mid = this.common.getCookie('userMid');
    console.log(this.mid)
  },
  methods: {
    subClick(){
      const self = this;

      if(self.headimg){
        if(self.title){
          if(self.name){
            if(self.phone && self.phoneFun()){
              if (self.mail && self.email()) {
                if (self.post) {
                  if (self.pass && self.againpass) {
                    if (self.pass == self.againpass) {
                      alert('修改成功')
                      self.$router.push({//返回登录页面
                        path: '/',
                      });
                      console.log('昵称：'+self.title, '姓名：'+self.name, '手机号:'+self.phone, '邮箱：'+self.mail, '岗位：'+self.post, '密码：'+self.pass)
                    } else {
                      alert('2次密码不符合请重新填写！')
                    }
                  } else {
                    alert('请输入密码！')
                  }
                } else {
                  alert('请输入岗位！')
                }
              } else {
                alert('请输入正确邮箱！')
              }
            } else {
              alert('请输入正确手机号！')
            }
          } else {
            alert('请输入姓名！')
          }
        } else {
          alert('请输入昵称！')
        }
      } else {
        alert('头像上传失败！')
      }
    },
    //手机号验证
    phoneFun(){
      const self = this;
      if (!(/^1[34578]\d{9}$/.test(self.phone))) {
        console.log("电话号码格式错误");
        $('.phone').addClass('error');
      } else {
        // console.log('电话格式正确')
        $('.phone').removeClass('error');
        return true;
      };
    },
    //邮箱验证
    email(){
      const self = this;
      const value = self.mail;
      if (value === '') {
        console.log('请正确填写邮箱')
        $('.mail').addClass('error');
      } else {
        if (value !== '') {
          const reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(!reg.test(value)){
            console.log('请输入有效的邮箱')
            $('.mail').addClass('error');
          } else {
            // console.log('邮箱正确')
            $('.mail').removeClass('error');
            return true;
          }
        };
      }
    },
    //弹框显示
    showPopup(refId) {
      const component = this.$refs[refId];
      component.show();
      setTimeout(() => {
        component.hide();
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/pages/personal.scss';
</style>
