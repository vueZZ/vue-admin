<template>
  <div>
    <h2>首页</h2>
    <section>
      <z-img src="www.baidu.com" @click="$preview($event.target.src)"></z-img>
    </section>
    {{ n | number }}
    <input type="text" name="" id="" v-model="n">
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
