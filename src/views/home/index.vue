<template>
  <div>
    <h2>首页</h2>
    <section>
      <z-img src="www.baidu.com" @click="$preview($event.target.src)"></z-img>
    </section>
    <hr>
    {{ n | number }}
    <input type="text" name="" id="" v-model="n">
    <hr>
    <z-geetest></z-geetest>
  </div>
</template>

<script>
export default {
  data () {
    return {
      n: ''
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
