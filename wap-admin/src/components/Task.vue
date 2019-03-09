<template>
  <div ref="content" class="content">
    <table class="tab" border="0">
      <tr class="tab-head">
        <th>项目名称</th>
        <th>重要程度</th>
        <th>状态</th>
        <th>优先级</th>
      </tr>
      <tr class="tab-con" :key="nub" v-for="(item,nub) in task">
        <td>
          <p @click="companyClick(item)">{{item.title}}</p>
        </td>
        <td>{{item.degree}}</td>
        <td>{{item.stateturn}}</td>
        <td>{{item.priority}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'task',
  props: ['task'],
  data() {
    return {}
  },
  methods: {
    companyClick(item){
      const self = this;
      //打开一个新页面并把当前点击了那个项目的唯一标示传递到下一个页面。下一个页面通过唯一标示请求后台数据
      self.$router.push({
        // path: '/Detail',
        // query: {//注意：这个后拼接到url上面 如果敏感信息要加密处理下
        //   code: item.code,
        // },
        name: 'Detail',//这个中方法传输不会拼接到url上面
        params: {
          code: item.code,//项目的唯一标示
        }
      });
    },
  },

}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/components/task.scss';
</style>
