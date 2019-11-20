<template>
  <div style="width: 256px">
    <!-- <a-menu
      mode="inline"
      theme="dark">
      <template v-for="item in menus">
        <a-menu-item v-if="!item.children" :key="item.path ? item.path : item.key" :title="item.title">
          <router-link :to="item.path">
            <a-icon :type="item.icon"/>
            <span>{{item.title}}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu> -->
    <s-menu
      :menu="menus"
      @select="onSelect"
      style="padding: 16px 0px;"></s-menu>
  </div>
</template>

<script>
  import SMenu from './menu'
  import SubMenu from './SubMenu';

  export default {
    components: {
      SubMenu,
      SMenu,
    },
    data() {
      return {
      }
    },
    props: {
      menus: {
        type: Array,
        default: [],
      }
    },
    methods: {
      onSelect (obj) {
        this.$emit('menuSelect', obj)
      }
      // updateMenu () {
      //   const routes = this.$route.matched.concat()
      //   const { hidden } = this.$route.meta
      //   return;
      //   if (routes.length >= 3 && hidden) {
      //     routes.pop()
      //     this.defaultSelectedKeys = [routes[routes.length - 1].path]
      //   } else {
      //     this.defaultSelectedKeys = [routes.pop().path]
      //   }
      //   const openKeys = []
      //   routes.forEach(item => {
      //     openKeys.push(item.path)
      //   })

      //   this.collapsed ? (this.cachedOpenKeys = openKeys) : (this.openKeys = openKeys)

      //   console.log('routes:',routes);
      //   console.log('openKeys:',openKeys);
      //   console.log('selectedKeys:',this.defaultSelectedKeys);
      //   console.log('collapsed:',this.collapsed);
      //   console.log('cachedOpenKeys',this.cachedOpenKeys);
      // },
    },
  };
</script>