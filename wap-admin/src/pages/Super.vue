<template>
  <div>
    <img class="logo" src="http://www.saoxiankeji.com/img/logo-1-03.png">
    <div class="table">
      <div class="tr fd-clr">
        <div class="tit f-l">昵称：</div>
        <div class="content f-l">
          <cube-input
            class="title ipt"
            v-model="title"
            :disabled="disabled"
            placeholder="请输入昵称"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">姓名：</div>
        <div class="content f-l">
          <cube-input
            class="title ipt"
            v-model="name"
            :disabled="disabled"
            placeholder="请输入姓名"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">手机号：</div>
        <div class="content phone f-l">
          <cube-input
            class="title ipt"
            v-model="phone"
            :disabled="disabled"
            @blur="phoneFun()"
            placeholder="请输入手机号"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">用户类型：</div>
        <div class="content phone f-l">
          <cube-select
            v-model="vipturn"
            :options="userArr"
            :disabled="disabled"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">邮箱：</div>
        <div class="content mail f-l">
          <cube-input
            class="title ipt"
            v-model="mail"
            @blur="email()"
            :disabled="disabled"
            placeholder="请输入邮箱"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="tit f-l">岗位：</div>
        <div class="content f-l">
          <cube-input
            class="post ipt"
            v-model="post"
            :disabled="disabled"
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
            :disabled="disabled"
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
            :disabled="disabled"
            placeholder="在次输入密码"/>
        </div>
      </div>
    </div>

    <div class="bot">
      <p @click="subClick($event)" class="btn">修改</p>
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
  name: 'super',
  data() {
    return {
      mid: '',//用户的唯一标示

      userArr: ['高级用户', '普通用户'],
      disabled: true,//是否可以修改
      headimg: 'wu',//头像
      title: '不服就是干',//昵称
      vip: '1',//用户类型
      vipturn: '',//vip文字转换
      name: '平头哥',//姓名
      phone: '15810240230',//手机号
      mail: '1198810568@qq.com',//邮箱
      post: '非洲',//岗位
      pass: '000',//密码
      againpass: '000',//在次确认密码
    }
  },
  created() {
    this.mid = this.$route.params.mid;//用户的唯一标示
    console.log(this.mid)
    this.vipturn =  Number(this.vip) > 1 ? '高级用户' : '普通用户' ;
  },
  methods: {
    subClick(event){
      const self = this;
      const _clas = event.currentTarget.className;
      if (_clas.includes('active')) {
        //保存
        event.currentTarget.className = 'btn';
        event.currentTarget.innerHTML = '修改';
        self.disabled = true;
      } else {
        //修改
        event.currentTarget.className = 'btn active';
        event.currentTarget.innerHTML = '保存';
        self.disabled = false;
      };
      self.iptJudge(function(){
        console.log('昵称：'+self.title, '姓名：'+self.name, '用户类型：'+self.vipturn + '：'+self.vip, '手机号:'+self.phone, '邮箱：'+self.mail, '岗位：'+self.post, '密码：'+self.pass)
      });
    },
    iptJudge(fn){//判断当前是否全部填写 fn == 全部正确填写回调
      const self = this;
      if(self.headimg){
        if(self.title){
          if(self.name){
            if(self.phone && self.phoneFun()){
              if (self.mail && self.email()) {
                if (self.post) {
                  if (self.pass && self.againpass) {
                    if (self.pass == self.againpass) {
                      fn && fn();
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
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/pages/super.scss';
</style>
