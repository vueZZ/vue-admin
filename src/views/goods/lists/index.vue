<template>
  <div>
    <section>
      <el-button @click="handleAdd" type="primary" size="small">添加</el-button>
    </section>
    <el-form label-width="80px" :model="query" ref="query" :inline="true" class="form" size="small">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="query.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品id" prop="name">
        <el-input v-model="query.id" placeholder="商品id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doQuery" type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" class="table" width="100%" :empty-text="tableText"
      v-loading="tableLoading">
      <el-table-column prop="name" label="商品">
        <template slot-scope="scope">
          <div class="goods">
            <img :src="scope.row.img" :title="scope.row.name" class="goods-img">
            <div class="goods-info">
              <router-link to="/goods/details" class="goods-info__title">
                {{ scope.row.name }}
              </router-link>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="商品id">
      </el-table-column>
      <el-table-column prop="op" label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <goodsDialog ref="goodsDialog" @refresh="doQuery"></goodsDialog>
  </div>
</template>

<script>
import goodsDialog from '../components/goodsDialog.vue'
export default {
  components: {
    goodsDialog
  },
  data () {
    return {
      query: {},
      tableData: [],
      tableLoading: false,
      tableText: '请点击查询'
    }
  },
  created () {
    this.doQuery()
  },
  activated () {
    if (this.$route.params.refresh) {
      console.log('refresh')
      this.doQuery()
    }
  },
  methods: {
    doQuery () {
      this.tableLoading = true
      this.getData().catch(e => {
        this.tableData = []
        this.tableText = '查询出错'
      }).finally(() => {
        this.tableLoading = false
      })
    },
    async getData () {
      let data = await this.$api('goods.lists', this.query)
      if (data.length === 0) {
        this.tableText = '查无数据'
      }
      this.tableData = data
    },
    handleAdd () {
      this.$refs.goodsDialog.open()
    },
    handleEdit (row) {
      this.$refs.goodsDialog.open(row)
    },
    handleDelete (row) {
      // this.$refs.goodsDialog.open()
    }
  }
}
</script>

<style lang="scss" scoped>
.goods{
  &-img{
    display: block;
    float: left;
    width: 60px;
    height: 60px;
  }
  &-info{
    margin-left: 70px;
    &__title{
      color: #38f;
    }
  }
}
.form {
  padding: 10px 0;
  margin-top: 15px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
}
</style>
