<template>
  <div class="z-preview" v-if="show" @click="handleColse">
    <img :src="src" alt="" class="z-preview__img">
    <i @click="close" class="z-preview__button">关闭</i>
  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {
      show: true,
      src: ''
    }
  },
  created () {
    if (this.src === '') {
      this.show = false
    }
  },
  methods: {
    close () {
      this.show = false
      // document.body.style.overflow = 'visible'
      this.$emit('close')
    },
    handleColse (e) {
      let dom = e.target.className
      if (dom === 'z-preview') {
        this.close()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.z-preview{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  height: 100%;
  z-index: 2000;
  overflow: hidden;
  &__img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &__button{
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 50px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
