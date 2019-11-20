<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  body {
    margin: 0;
    font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .fd_clr::after {
    content: ' ';
    display: block;
    position: relative;
    clear: both;
  }

</style>
