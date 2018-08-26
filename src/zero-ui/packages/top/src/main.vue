<template>
  <transition name="z-fade-in">
    <section class="fabs-wrap" v-if="show">
      <div class="z-top" @click="scrollToUp">
        <i class="iconfont icon-androidarrowdropup"></i>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'z-top',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let barWidth = window.pageYOffset || document.body.scrollTop
      if (barWidth > 200) {
        this.show = true
      } else {
        this.show = false
      }
    },
    scrollToUp () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.fabs-wrap{
  position: fixed;
  right: 40px;
  bottom: 100px;
  z-index: 1000;
  transition: all .3s linear;
}
.z-top{
  position: relative;
  width: 40px;
  height: 40px;
  line-height: 1;
  color: #fff;
  background-color: #4967FF;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0,0,0,.05);
  cursor: pointer;
  &:hover{
    background-color: #344ad9;
  }
  .iconfont{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
  }
}
/* 显示 */
.el-fade-in-enter-active{
  transform: translateY(-40px);
}
/* 隐藏 */
.el-fade-in-leave-active {
  transform: translateY(-40px);
  opacity: 0;
}
</style>
