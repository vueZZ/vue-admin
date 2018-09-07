<template>
  <div v-loading="loading">
    {{ data }}
    <div>
      <el-button @click="handleEdit">修改数据</el-button>
      <el-button @click="back">不修改数据返回</el-button>
    </div>
    <el-button @click="toPath">前往下一个商品</el-button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data () {
    return {
      loading: false,
      data: {}
    }
  },
  created () {
    this.getData()
  },
  watch: {
    $route () {
      this.getData()
    }
  },
  methods: {
    getData () {
      this.loading = true
      this.$api('goods.details', this.id).then(data => {
        this.$emit('error', false)
        this.data = data
      }).catch(e => {
        this.$emit('error', true)
      }).finally(() => {
        this.loading = false
      })
    },
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
    },
    toPath () {
      this.$router.push({
        name: '商品详情',
        params: {
          id: this.id + 1
        }
      })
    }
  }
}
</script>
