<template>
  <div class="table-pagination">
    <el-pagination background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :total="total"
      :current-page="pageNo"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pageNo: '',
    pageSize: '',
    total: ''
  },
  data () {
    return {
      pageSizes: [5, 10, 20, 50]
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('update:pageNo', val)
      this.$emit('change')
    },
    handleSizeChange (val) {
      this.$emit('update:pageSize', val)
      this.$emit('change')
    }
  }
}
</script>
