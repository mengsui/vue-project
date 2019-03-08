<template>
  <div>
    <img class="logo" src="http://www.saoxiankeji.com/img/logo-1-03.png">
    <table class="tab">
      <tr>
        <th style="width: 20%;">姓名</th>
        <th>用户类型</th>
        <th>用户状态</th>
      </tr>
      <tr :key="nub" v-for="(item, nub) in handleUser">
        <td>
          <p @click="superClick(item)">{{item.name}}</p>
        </td>
        <td class="user">
          {{item.vip}}
        </td>
        <td>
          <cube-select
            v-model="item.state"
            :options="stateArr"
            :disabled="item.disabled"/>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'admin',
  data() {
    return {
      userArr: ['高级用户', '普通用户'],
      stateArr: ['启用', '停用'],
      user: [
        {
          name: '张三',//用户名称
          id: '1',//该用户的唯一id标示(如有同名后期可以通过唯一id区分)
          vip: '2',//用户类型1 == 普通用户  2 == 高级用户  3 == 管理员
          state: '1',//用户状态
        },
        {
          name: '李四',//用户名称
          id: '2',//该用户的唯一id标示(如有同名后期可以通过唯一id区分)
          vip: '2',//用户类型
          state: '-1',//用户状态
        },
        {
          name: '赵五',//用户名称
          id: '3',//该用户的唯一id标示(如有同名后期可以通过唯一id区分)
          vip: '1',//用户类型
          state: '1',//用户状态
        }
      ],
      handleUser: []//处理过的数据
    }
  },
  created() {
    //处理后台返回的数据
    const newArr = [];
    const userJuri = Number( this.common.getCookie('userJuri') );//获取当前权限等级
    this.user.forEach(item => {
      newArr.push({
        name: item.name,
        id: item.id,
        disabled: ( userJuri > Number( item.vip ) ? false : true ),//是否禁用修改用户状态
        vip: ( Number(item.vip) > 1 ? '高级用户' : '普通用户' ),
        state: ( Number(item.state) == 1 ? '启用' : '停用' ),
      });
    });
    this.handleUser = newArr;
  },
  methods: {
    superClick(item){//管理员可以去修改别的账号密码等信息
      const juri = Number( this.common.getCookie('userJuri') );

      if(juri>=3){
        this.$router.push({
          name: 'Super',
          params: {
            mid: item.id,//用户的唯一标示。防止用户的姓名相同
          },
        });
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/pages/admin.scss';
</style>
