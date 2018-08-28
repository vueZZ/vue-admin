<template>
  <div class="z-geetest">
    <div class="z-geetest__head">
      请在下图依次点击<span class="z-geetest__tip" :style="{ backgroundImage: `url(${src})` }"></span>
    </div>
    <div class="z-geetest__item">
      <div class="z-geetest__item__wrap">
        <img :src="src" alt="" class="z-geetest__item__img" @click="handleChoice">
        <div v-for="(item, index) in marks" :key="index" @click="removeMark(index)"
          class="z-geetest__mark" :style="{ left: `${item.x}px`, top: `${item.y}px` }">
          {{ index + 1 }}
        </div>
      </div>
    </div>
    <div class="z-geetest__panel">
      <button @click="refresh">刷新</button>
      <button @click="commit">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zGeetest',
  data () {
    return {
      src: 'https://resources.geetest.com/nerualpic/harley4/fa0c6c808df4f1b66fa2093892b778e9.jpg?challenge=4c90e9cbfdca65e0a848a5be5048d0f5',
      marks: []
    }
  },
  methods: {
    async commit () {
      console.log(this.marks)
      try {
        await this.checkResults(this.marks)
        console.log('ok')
      } catch (error) {
        console.error(error)
      }
    },
    async checkResults (data) {
      let results = [
        { minX: 0, maxX: 100, minY: 0, maxY: 100 },
        { minX: 0, maxX: 100, minY: 0, maxY: 100 },
        { minX: 0, maxX: 100, minY: 0, maxY: 100 }
      ]
      let flag = true
      for (let index = 0; index < results.length; index++) {
        let { minX, maxX, minY, maxY } = results[index]
        let falgX = data[index].x >= minX && data[index].x <= maxX
        let falgY = data[index].y >= minY && data[index].y <= maxY
        if (falgX && falgY) {
        } else {
          flag = false
          return false
        }
      }
      if (flag) {
        return true
      } else {
        let msg = false
        throw msg
      }
    },
    handleChoice (event) {
      if (this.marks.length < 9) {
        let obj = {
          x: event.layerX,
          y: event.layerY
        }
        this.marks.push(obj)
      } else {
        event.preventDefault()
      }
    },
    refresh () {
      this.marks.splice(0, this.marks.length)
    },
    removeMark (index) {
      this.marks.splice(index, this.marks.length - index)
    }
  }
}
</script>

<style lang="scss" scoped>
.z-geetest{
  position: relative;
  width: 250px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  overflow: hidden;
  padding: 2px;
  &__tip{
    display: inline-block;
    width: 116px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: 0% 100%;
  }
  &__item{
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-bottom: 95.8%;
    &__wrap {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    &__img{
      top: 0;
      left: 0;
      width: 100%;
      height: 112%;
    }
  }
  &__mark{
    position: absolute;
    left: 0;
    top: 0;
    width: 10%;
    height: 10%;
    transform: translate(-50%, -50%);
    border: 3px solid white;
    border-radius: 50%;
    background-color: #f70;
    box-sizing: border-box;
    box-shadow: 0 0 10px black;
    transition: all .3s ease;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    cursor: default;
  }
  &__panel{
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: 16%;
  }
}
</style>
