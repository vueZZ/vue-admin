<template>
  <div class="web">
    <sidebar></sidebar>
    <router-view class="web-content"></router-view>
  </div>
</template>

<script>
import sidebar from './sidebar'
export default {
  components: {
    sidebar
  }
}
</script>

<style lang="scss" scoped>
.web{
  // $backgroud: #444444;
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
  }
  &-right{
    flex: 1;
  }
}
</style>
