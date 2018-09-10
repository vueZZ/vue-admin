<template>
  <div class="web">
    <z-top></z-top>
    <sidebar class="web-sidebar"></sidebar>
    <wrap class="web-container"></wrap>
    <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.path" class="web-container"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.path" class="web-container"></router-view> -->
  </div>
</template>

<script>
import sidebar from './components/sidebar'
import wrap from './components/wrap'
export default {
  components: {
    sidebar,
    wrap
  }
}
</script>

<style lang="scss" scoped>
.web{
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  box-sizing: border-box;
  &-sidebar {
    min-height: 100vh;
  }
  &-container{
    min-height: 100vh;
    flex: 1;
    box-sizing: border-box;
  }
}
</style>
