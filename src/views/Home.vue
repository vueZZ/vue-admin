<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="item in lists" :key="item.id">
      <span>{{ item.name }}</span>
      <span>{{ item.id }}</span>
      <img :src="item.img" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      lists: []
    }
  },
  created () {
    console.log(process.env)
    this.$api('goods.lists').then(data => {
      console.log('返回数据')
      console.log(data)
      this.lists = data
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  color: $color;
}
</style>
