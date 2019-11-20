<template>
  <div class="user-wrapper">
    <a-layout-header style="background: #fff; padding: 0 15px 0 0;">
      <!-- menu点击收起 -->
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggle"
      />

      <div class="content-box fr">
        <!-- 问号 -->
        <span class="action">
          <a-icon type="question-circle-o"></a-icon>
        </span>

        <!-- 用户信息 -->
        <a-dropdown>
          <span class="action ant-dropdown-link user-dropdown-menu">
            <a-avatar
              @click="navTo('/manage/setting')"
              class="avatar"
              size="small"
              :src="headImg"
            />
            <span>{{userName}}</span>
          </span>
          <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
            <a-menu-item>
              <a href="javascript:;" @click="handleLogout">
                <a-icon type="logout" style="margin-right: 8px;"/>
                <span>退出登录</span>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
  name: "UserMenu",
  props: ['collapsed', 'userName', 'headImg'],
  methods: {
    ...mapActions(['Logout']),
    toggle(){
      this.$emit('toggle')
    },
    navTo(url) {
      this.$router.push(url);
    },
    handleLogout() {
      const that = this;

      this.$confirm({
        title: "提示",
        content: "是否注销登录 ?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          return that
            .Logout({})
            .then(() => {
              window.location.reload();
            })
            .catch(err => {
              that.$message.error({
                title: "错误",
                description: err.msg
              });
            });
        },
      });
    }
  }
};
</script>
<style lang="less" scope>
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .action {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);
  }
  .action:hover {
    background: rgba(0, 0, 0, 0.025);
  }
  .action .avatar {
    margin: 20px 8px 20px 0;
    color: #1890ff;
    background: hsla(0, 0%, 100%, 0.85);
    vertical-align: middle;
  }
  .user-dropdown-menu-wrapper.ant-dropdown-menu .ant-dropdown-menu-item {
    width: 160px;
  }
</style>
