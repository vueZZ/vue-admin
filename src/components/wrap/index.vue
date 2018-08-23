<!-- 默认路由页面布局 -->
<template>
  <section class="wrap">
    <div class="wrap-head">
      <slot></slot>
      <div class="wrap-help">
        <i class="iconfont icon-shezhi"></i>
      </div>
    </div>
    <div class="wrap-container">
      <div v-if="!netWork">
        <h2>断网了</h2>
        <el-button @click="refresh">刷新</el-button>
      </div>
      <router-view v-else class="web-container"></router-view>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'netWork'
    ])
  },
  methods: {
    refresh () {
      if (navigator.onLine) {
        this.$store.dispatch('changeNetwork', true)
        this.$router.replace('/other/refresh')
      } else {
        this.$message.error({
          info: '错误',
          message: '未连接到互联网'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  &-head {
    position: relative;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    font-size: 14px;
    padding: 17px 21px;
    color: #333;
  }
  &-container {
    margin: 10px;
    padding: 15px;
    min-width: 750px;
    background: #fff;
  }
  &-help{
    position: absolute;
    right: 20px;
    top: 8px;
    width: 42px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #bbb;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
