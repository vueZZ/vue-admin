<template>
  <div>
    <el-button type="primary" @click="handleLogin" :loading="btnLoading">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnLoading: false
    }
  },
  methods: {
    async handleLogin () {
      this.btnLoading = true
      try {
        await this.$store.dispatch('handleLogin')
        this.$router.push('/home')
      } catch (error) {
        this.$message.error(error)
      } finally {
        this.btnLoading = false
      }
    }
  }
}
</script>
