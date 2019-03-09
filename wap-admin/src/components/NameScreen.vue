<template>
  <div class="content fd-clr">
    <div class="f-l title">名称筛选：</div>
    <div class="f-l ipt">
      <cube-input @input="nameChange(value)" v-model="value" ></cube-input>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nameScreen',
  props: ['nameChange'],
  data() {
    return {
      value: '',
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/components/nameScreen.scss';
</style>

