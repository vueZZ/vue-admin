<template>
  <div class="web">
    <web-header></web-header>
    <sidebar class="web-sidebar"></sidebar>
    <router-view class="web-content"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import webHeader from './header'
import sidebar from './sidebar'
export default {
  components: {
    sidebar, webHeader
  },
  computed: {
    ...mapGetters([
      'user'
    ]),
    userName () {
      return this.user.contacts
    }
  },
  methods: {
    exit () {
      this.$store.dispatch('handleExit').then(() => {
        this.$notify({
          type: 'success',
          message: '已退出'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.web{
  $backgroud: #444444;
  &-head{
    position: fixed;
    z-index: 2000;
    top: 0;
    width: 100%;
    height:50px;
    line-height: 50px;
    color: #FFFFFF;
    background:$backgroud;
    padding-left: 18px;
    padding-right: 60px;
    box-sizing: border-box;
    &_logo{
      width: 104px;
      height: 36px;
      padding-top: 7px;
    }
    &_right{
      float: right;
    }
    &_item{
      margin-left: 40px;
      cursor: pointer;
    }
  }
  &-sidebar{
    position: fixed;
    left: 0;
    width: 160px;
    height: 100vh;
    padding-top: 73px;
    z-index: 1998;
    background:$backgroud;
  }
  &-content{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding-left: 160px;
    padding-top: 50px;
    box-sizing: border-box;
  }
  &-left{
    position: fixed;
    left: 0;
    width: 160px;
    height: 100vh;
    padding-top: 73px;
    background:$backgroud;
  }
  &-right{
    flex: 1;
  }
}
</style>
