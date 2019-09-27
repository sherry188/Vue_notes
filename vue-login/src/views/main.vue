<template>
  <div class="main">
    <el-container height="100%">
      <el-aside width="150px">
        <el-menu
        class="menu"
          default-active="2">
          <router-link to="/main/home">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <router-link to="/main/user">
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">用户信息</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
        <el-dropdown>
          <div class="user-info">
            <img src="../assets/logo.png" class="img">
            <div class="name">admin</div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>
              <span @click="loginOut">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut () { // 登出
      this.$cookies.remove('userInfo')  // 清除cookies
      this.$router.push({
        path: '/login'  //跳回首页
      })
    }
  }
}
</script>

<style lang="less">
  .main{
    height: 100vh;
    .el-container{
      height: 100%;
    }
    .header{
      text-align: right;
    }
    .menu{
      height: 100%;
      li{
        text-align: center;
        line-height: 56px;
      }
    }
    .el-aside{
      height: 100%;
      display: inline-table;
    }
    .user-info{
      height: 60px;
      min-width: 100px;
      float: right;
      .img{
        height: 100%;
        padding: 10px 0;
        width: auto;
        box-sizing: border-box;
        float: left;
      }
      .name{
        text-align: center;
        line-height: 60px;
      }
    }
  }
</style>
