<template>
  <div class="z-magnifier">
    <img :src="img" alt="" @mouseover="mouseover" @mouseout="mouseout" @mousemove="mousemove">
    <div class="z-magnifier-wrap" ref="magnifier"
      :style="[
        {
          left: layer.x + 'px',
          top: layer.y + 'px'
        }
      ]">
    </div>
    <div class="z-magnifier-wrap">

    </div>
  </div>
</template>

<script>
export default {
  name: 'z-magnifier',
  data () {
    return {
      layer: {
        x: 0,
        y: 0
      },
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1536310639&di=8763dea58fa9b1300d78f93b19462b08&src=http://a3.topitme.com/0/82/57/11302368668ab57820o.jpg'
    }
  },
  methods: {
    mouseover (e) {
      // let left = e
      // console.log(e)
      // console.log(this.$refs.magnifier)
    },
    mouseout () {

    },
    mousemove (e) {
      this.layer = {
        x: e.offsetX - 80,
        y: e.offsetY - 80
      }
      if (e.offsetX - this.layer.x > 50 || e.offsetY - this.layer.y > 50) {
      }
    }
  }
}
</script>

<style lang="scss">
.z-magnifier{
  position: relative;
  img {
    position: relative;
  }
  &-wrap {
    position: absolute;
    width: 160px;
    height: 160px;
    // transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.5);
    opacity: 0.3;
    cursor: move;
  }
}
</style>
