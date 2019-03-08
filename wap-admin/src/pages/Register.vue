<template>
  <div ref="content" class="content">
    <img class="logo" src="http://www.saoxiankeji.com/img/logo-1-03.png">
    <Cropper/>
    <cube-input
      class="title ipt"
      v-model="title"
      placeholder="请输入昵称"/>
    <cube-input
      class="name ipt"
      v-model="name"
      placeholder="请输入姓名"/>
    <div class="phone">
      <cube-input
        class="ipt"
        v-model="phone"
        placeholder="手机号"
        @blur="phoneFun()"/>
    </div>
    <div class="mail">
      <cube-input
        class="ipt"
        v-model="mail"
        placeholder="请输入邮箱"
        @blur="email()"/>
    </div>
    <cube-input
      class="post ipt"
      v-model="post"
      placeholder="请输入岗位"
      ></cube-input>
    <cube-input
      class="pass ipt"
      v-model="pass"
      placeholder="请输入密码"
      type="password"/>
    <cube-input
      class="againpass ipt"
      v-model="againpass"
      placeholder="请在次输入密码"
      type="password"/>

    <cube-popup type="my-popup" ref="elastic">
      手机号格式错误
    </cube-popup>
    <cube-popup type="my-popup" :mask="false" ref="pass">
      密码错误
    </cube-popup>

    <cube-button class="submit"
      @click="subClick()"
      >提交</cube-button>
  </div>
</template>
<script>
import Cropper from '../components/Cropper'

export default {
  name: 'registerpage',
  components: {
    Cropper
  },
  data() {
    return {
      headimg: 'wu',//头像
      title: '',//昵称
      name: '',//姓名
      phone: '',//手机号
      mail: '',//邮箱
      post: '',//岗位
      pass: '',//密码
      againpass: '',//在次确认密码
    }
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
                      // alert('提交成功')
                      self.$router.push({
                        path: '/',
                      });
                      console.log('昵称：'+self.title, '姓名：'+self.name, '手机号:'+self.phone, '邮箱：'+self.mail, '岗位：'+self.post, '密码：'+self.pass)
                    } else {
                      console.log('2次密码不符合请重新填写')
                    }
                  } else {
                    console.log('请输入密码')
                  }
                } else {
                  console.log('请输入岗位')
                }
              } else {
                console.log('请输入正确邮箱')
              }
            } else {
              console.log('请输入正确手机号')
            }
          } else {
            console.log('请输入姓名')
          }
        } else {
          console.log('请输入昵称')
        }
      } else {
        console.log('头像上传失败！')
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
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/pages/register.scss';
</style>
