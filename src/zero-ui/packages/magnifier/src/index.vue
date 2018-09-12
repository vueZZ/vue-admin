<template>
  <div class="z-magnifier" ref="box" @mouseover="mouseover" @mouseout="mouseout" @mousemove="mousemove">
    <img :src="src" :width="width">
    <div class="z-magnifier-cover"></div>
  </div>
</template>

<script>
import Magnifier from './Magnifier'
export default {
  name: 'z-magnifier',
  props: {
    src: String,
    bigPic: {
      type: String
    },
    scale: {
      type: Number,
      default: 4
    },
    width: {
      type: String,
      default: '500'
    }
  },
  data () {
    return {
      magnifier: {} // 放大镜函数
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      let box = this.$refs.box
      let img = box.querySelector('img')
      img.onload = () => {
        let cover = box.querySelector('.z-magnifier-cover')
        cover.style.width = box.offsetWidth / this.scale + 'px'
        cover.style.height = box.offsetHeight / this.scale + 'px'
        this.magnifier = new Magnifier(img, cover, this.scale, this.bigPic)
      }
    },
    mouseover () {
      this.magnifier.show()
    },
    mouseout () {
      this.magnifier.hide()
    },
    mousemove (e) {
      this.magnifier.handle(e)
    }
  }
}
</script>

<style lang="scss">
.z-magnifier{
  display: inline-block;
  line-height: 0;
  &-cover {
    position: fixed;
    left: -100%;
    top: -100%;
    background-color: rgba(103, 194, 58, 0.3);
    cursor: move;
  }
}
</style>
