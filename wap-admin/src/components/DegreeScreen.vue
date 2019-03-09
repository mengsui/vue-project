<template>
  <div class="content fd-clr">
    <div class="f-l title">状态筛选：</div>
    <div class="f-l ipt">
      <cube-select
          v-model="value"
          @change="degreeChange"
          :options="[{text: '中断关闭',value: '-1'},{text: '计划中',value: '0'},{text: '执行中',value: '1'},{text: '已完成',value: '2'},{text: '暂停中',value: '3'}]"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'degreeScreen',
  props: ['degreeChange'],
  data() {
    return {
      value: ''
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/components/degreeScreen.scss';
</style>
