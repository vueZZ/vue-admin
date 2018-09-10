<template>
  <div class="z-magnifier" ref="layer">
    <img :src="img" alt="" @mouseover="mouseover" @mouseout="mouseout" @mousemove="mousemove">
    <div class="z-magnifier-wrap"
      :style="[
        {
          left: wrap.x + 'px',
          top: wrap.y + 'px'
        }
      ]">
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-magnifier',
  data () {
    return {
      wrap: {
        x: 0,
        y: 0
      },
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
      this.wrap = {
        x: e.clientX - 80,
        y: e.clientY - 80
      }
    }
  }
}
</script>

<style lang="scss">
.z-magnifier{
  // position: relative;
  img {
    position: relative;
  }
  &-wrap {
    position: fixed;
    width: 160px;
    height: 160px;
    // transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.5);
    opacity: 0.3;
    cursor: move;
  }
}
</style>
