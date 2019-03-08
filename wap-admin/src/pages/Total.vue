<template>
  <div>
    <img class="logo" src="http://www.saoxiankeji.com/img/shibie.png">
    <!-- 内容容器 -->
    <div class="content">
      <Task/>
    </div>
    <!-- 底部导航 -->
    <cube-toolbar
      class="toolbar"
      :actions="actions"
      :checked="true"
      @click="barClick"
      ></cube-toolbar>
  </div>
</template>
<script>
import Task from '../components/Task'

export default {
  name: 'total',
  components: {
    Task,
  },
  data() {
    return {
      actions: [
        {
          text: '总任务',
          action: 'Total',
          nub: 0,
        },
        {
          text: '新增任务',
          action: 'AddTask',
          nub: 1,
        },
        {
          text: '个人详情',
          action: 'Personal',
          nub: 3,
        },
      ],
    }
  },
  created() {
    //管理员和高级会员回比普通会员多出一个选择来
    this.common.getCookie('userJuri') > 1 ? this.actions.push({
      text: '权限管理',
      action: 'Admin',
      nub: 3,
    }) : '';
  },
  methods: {
    barClick: function(item) {
      const self = this;
      self.$router.push({
        path: '/'+item.action,
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/pages/total.scss';
</style>
<style>
  .cube-toolbar-group {
      background-color: red;
  }
  .cube-toolbar-group>li:first-child {
    background-color: #fc9153;
  }
  .cube-toolbar-group>li:first-child button {
    color: #fff;
  }
</style>
