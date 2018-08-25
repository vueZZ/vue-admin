<template>
  <div v-loading="loading">
    <h2>个人信息</h2>
    <div>
      {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      loading: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      this.loading = true
      try {
        this.user = await this.$api('user.info')
      } catch (error) {
        this.$emit('error', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
