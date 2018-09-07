<template>
  <div class="web">
    <sidebar></sidebar>
    <z-top></z-top>
    <!-- TODO:更好的路由设计以及路由器切换动画 -->
    <wrap class="web-container">
    </wrap>
    <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.path" class="web-container"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.path" class="web-container"></router-view> -->
  </div>
</template>

<script>
import sidebar from './sidebar'
import wrap from '@/components/wrap/index.vue'
export default {
  components: {
    sidebar,
    wrap
  }
}
</script>

<style lang="scss" scoped>
.web{
  &-container{
    margin-left: 150px;
    box-sizing: border-box;
  }
}
</style>
