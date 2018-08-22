<template>
  <div class="web">
    <sidebar></sidebar>
    <!-- TODO:路由器切换动画 -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.path" class="web-container"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.path" class="web-container"></router-view>
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
  &-container{
    margin-left: 90px;
    box-sizing: border-box;
  }
}
</style>
