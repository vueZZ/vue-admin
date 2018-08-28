<template>
  <!-- TODO:自己封装nav -->
  <el-menu class="web-sidebar" background-color="#444"
    :router="true" :default-active="deafultRoute"
    text-color="#cacaca" active-text-color="#333">
    <el-menu-item index="/">
      <div class="web-logo"></div>
    </el-menu-item>
    <el-menu-item index="/home">
      <i class="iconfont icon-home"></i>概况
    </el-menu-item>
    <el-menu-item index="/goods">
        <i class="iconfont icon-goods"></i>商品
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="iconfont icon-settings"></i>设置
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      deafultRoute: ''
    }
  },
  created () {
    this.deafultRoute = this.$route.path
  }
}
</script>

<style lang="scss">
  .web-sidebar {
    position: fixed!important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 90px;
    box-sizing: border-box;
    .iconfont {
      margin-right: 5px;
      vertical-align: baseline;
    }
    .el-menu-item.is-active{
      background-color: #f8f8f8!important;
    }
  }
  .web-logo {
    width: 32px;
    height: 32px;
    margin: auto;
    background-image: url('../../assets/img/logo.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #fff;
    top: 50%;
    transform: translateY(50%);
  }
</style>
