<template>
  <div>
    <el-button @click="handleEdit">修改数据</el-button>
    <el-button @click="back">不修改数据返回</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'netWork'
    ])
  },
  methods: {
    handleEdit () {
      this.$router.push({
        name: '商品列表',
        params: {
          refresh: true
        }
      })
    },
    back () {
      this.$router.push({
        name: '商品列表'
      })
    }
  }
}
</script>
