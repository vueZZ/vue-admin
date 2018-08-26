<template>
  <img class="z-img"
    :src="imgSrc"
    @load="handleLoad"
    @error="handleError"
    @click="reLoad"
  >
</template>

<script>
const DEFAULT_IMG = 'https://user-gold-cdn.xitu.io/2018/8/12/1652de20a13a3e9c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1'
export default {
  name: 'zImg',
  props: {
    src: {
      type: String
    }
  },
  data () {
    return {
      imgSrc: '',
      timer: ''
    }
  },
  methods: {
    reLoad () {
      this.imgSrc = this.src
      console.log(1)
      this.$emit('reLoad')
    },
    handleLoad () {
      // this.imgSrc = this.src
      // this.$emit('handleLoad')
      // console.log(1)
    },
    handleError () {
      this.imgSrc = DEFAULT_IMG
      this.$emit('handleError')
      // if (this.timer) {
      //   clearTimeout(this.timer)
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.z-img{
  background-color: #f8f8f8;
}
</style>
