<template>
  <div>
    <cube-toolbar
      ref="bar"
      class="toolbar"
      :actions="actions"
      :checked="true"
      @click="barClick"/>
  </div>
</template>
<script>
export default {
  name: 'toolbar',
  props: ['index'],
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
  mounted() {
    const _dom = this.$refs.bar.$el.children[0].children[ this.index ];
    _dom.style.cssText = 'background-color: #fc9153;';
    _dom.children[0].style.cssText = "color: #ffffff";
  },
  methods: {
    barClick: function(item) {
      const self = this;
      self.$router.push({
        path: '/'+item.action,
      })
    },
  },
}
</script>
