<template>
  <!-- TODO:自己封装nav -->
  <el-menu class="web-sidebar" background-color="#444"
    :router="true" :default-active="$route.path"
    text-color="#cacaca" active-text-color="#333">
    <el-menu-item index="/">
      <div class="web-logo"></div>
    </el-menu-item>
    <template v-for="item in routes">
      <el-submenu v-if="item.children" :index="item.path" :key="item.path">
        <template slot="title">
          <i class="iconfont icon-settings"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <template v-for="n in item.children">
            <el-menu-item :key="n.path" :index="n.path" v-if="n.meta && n.meta.show">{{ n.name }}</el-menu-item>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else :index="item.path" :key="item.path">
        <i v-if="item.meta && item.meta.icon" class="iconfont" :class="item.meta.icon"></i>
        <i v-else class="iconfont icon-settings"></i>
        {{ item.name }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      deafultRoute: '',
      routes: []
    }
  },
  created () {
    let routes = this.$router.options.routes
    this.routes = routes[0].children
    this.deafultRoute = this.$route.path
  },
  methods: {
    checkRoute (item) {
      let flag = this.$route.fullPath.includes(item.path)
      this.$store.commit('changeSub', flag)
      if (flag) {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
  .web-sidebar {
    width: 150px;
    box-sizing: border-box;
    .iconfont {
      margin-right: 5px;
      vertical-align: baseline;
    }
    .el-menu-item.is-active{
      background-color: #f8f8f8!important;
    }
    .el-submenu .el-menu-item{
      min-width: 0;
      padding-left: 0;
    }
    &-sub {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 90px;
      width: 110px;
      background: #fff;
    }
  }
  .web-logo {
    width: 32px;
    height: 32px;
    margin: auto;
    background-image: url('~/assets/img/logo.png');
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
