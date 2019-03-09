<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
  @import 'assets/scss/utiy/index.scss';
  @import 'assets/scss/app.scss';
  #app {
    padding: 0 0 100px;
  }
</style>
