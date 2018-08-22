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
      <router-view class="web-container"></router-view>
    </div>
  </section>
</template>

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
    min-height: 500px;
    background: #fff;
    transition: all 5s;
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
