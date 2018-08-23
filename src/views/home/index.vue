<template>
  <div>
    <h2>首页</h2>
    <div>
      {{ user }}
      <el-button @click="goPath">商品详情</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api('user.info').then(data => {
        this.user = data
      }).catch(e => {
        this.$emit('error', e)
      })
    },
    goPath () {
      this.$router.push({
        name: '商品详情',
        params: {
          name: 'zz'
        }
      })
    }
  }
}
</script>
