<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" width="256">
      <div class="logo" />
      <Menu
        :menus="menus"/>
    </a-layout-sider>
    <a-layout>
      <global-header
        :userName="userName"
        :headImg="headImg"
        :collapsed="collapsed"
        @toggle="toggle"/>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import Vue from 'vue'
  import RouteView from './RouteView'
  import Menu from '@/components/Menu/Menu.vue'
  import GlobalHeader from '@/components/GlobalHeader/GlobalHeader.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      Menu,
      GlobalHeader,
      RouteView,
    },
    data() {
      return {
        collapsed: false,
        menus: [],
        userName: '',
        headImg: '',
      };
    },
    computed: {
      ...mapState({
        // 动态主路由
        mainMenu: state => state.permission.addRouters
      }),
    },
    created: function () {
      this.menus = this.mainMenu.find(item => item.path === '/manage').children
      const userInfo = Vue.ls.get('userInfo') || {}
      this.userName = userInfo.userName || ''
      this.headImg = userInfo.userHeadImg || ''
    },
    methods: {
      toggle(){
        this.collapsed = !this.collapsed
      },
    },
  };
</script>
<style lang="less" scope>
  #components-layout-demo-custom-trigger {
    min-height: 100vh;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
