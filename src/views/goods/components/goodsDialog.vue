<!-- 商品模态框 -->
<template>
  <el-dialog :title="title" :visible.sync="visible" @close="handleClose('form')">
    <el-form :model="form" label-width="80px" ref="form" :rules="rules">
      <el-form-item label="商品id" prop="id" v-if="type === 'edit'">
        <el-input v-model="form.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="img">
        <el-input v-model="form.img"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="handleConfirm('form')" :loading="btnLoading">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      rules: {
        id: [
          { required: true, message: '请输入id', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请选择name', trigger: 'change' }
        ],
        img: [
          { required: true, message: '请选择img', trigger: 'change' }
        ]
      },
      type: '',
      visible: false,
      form: {},
      btnLoading: false
    }
  },
  computed: {
    title () {
      if (this.type === 'edit') {
        return '修改商品'
      } else {
        return '添加商品'
      }
    }
  },
  methods: {
    open (params) {
      if (params) {
        this.type = 'edit'
        this.form = {
          ...params
        }
        this.visible = true
      } else {
        this.type = 'add'
        this.visible = true
      }
    },
    close () {
      this.visible = false
    },
    handleConfirm (formName) {
      this.$refs[formName].validate().then(() => {
        this.btnLoading = true
        this.handle().then(() => {
          this.close()
          this.$emit('refresh')
        }).catch(e => {
          this.btnLoading = false
          this.$message.error(e)
        })
      })
    },
    async handle (params) {
      if (this.type === 'edit') {
        await this.handleEdit(params)
      } else {
        await this.handleAdd(params)
      }
    },
    async handleAdd (params) {
      await this.$api('good.add', params)
      this.$message.success('添加成功')
    },
    async handleEdit (params) {
      await this.$api('good.edit', params)
      this.$message.success('修改成功')
    },
    handleClose (formName) {
      this.$refs[formName].resetFields()
      this.btnLoading = false
    }
  }
}
</script>
