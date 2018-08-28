<template>
  <div>
    <h2>首页</h2>
    <!-- <section>
      <z-img src="www.baidu.com" @click="$preview($event.target.src)"></z-img>
    </section>
    <hr> -->
    {{ n | number }}
    <input type="text" name="" id="" v-model="n">
    <hr>
    <!-- <z-geetest src="https://resources.geetest.com/nerualpic/harley4/fa0c6c808df4f1b66fa2093892b778e9.jpg?challenge=4c90e9cbfdca65e0a848a5be5048d0f5"></z-geetest>
    <a href="/excel (38).xls" download="excel (38).xls" target="_blank">点击下载</a>
    <hr> -->
    <el-button>确定</el-button>
    <el-button :loading="true">确定</el-button>
    <z-button @click="hanlde">确定</z-button>
    <z-button :loading="true" @click="hanlde">确定</z-button>
  </div>
</template>

<script>
import textr from '@/components/test/index.vue'
export default {
  components: {
    textr
  },
  data () {
    return {
      n: '',
      text: {}
    }
  },
  methods: {
    hanldeexport () {
      let href = './index.vue'
      window.location.href = href
    },
    hanlde () {
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
hr{
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>
