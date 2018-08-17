<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
  created () {
    console.log(process.env)
    console.log(process.env.hasOwnProperty('BASE_URL'))
    console.log(process)
  }
}
</script>

<style lang="scss" scoped>
.home{
  color: $color;
}
</style>
