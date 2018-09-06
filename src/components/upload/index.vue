<template>
  <div class="upload" :class="classObject">
      <!-- :action="`/seller/image/uploadFiles.json?userId=${userId}`" -->
    <el-upload ref="upload"
      :action="`/file.json`"
      list-type="picture-card"
      :file-list="fileList"
      :on-success="handleAvatarSuccess"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :class="{disabled: isUpload}"
      :before-upload="hanldeIsUpload">
      <!-- TODO:后续修改 -->
      <!-- <span class="upload-reuload" v-if="isUpload">重新上传</span> -->
      <i class="el-icon-plus upload-reuload" v-if="isUpload" ></i>
      <!-- <span v-if="isUpload" class="a-link">上传图片</span> -->
      <i class="el-icon-plus" v-else>
        <div class="upload-label">{{ label }}</div>
      </i>
    </el-upload>
    <img src="/img/all_image_positive@3x.jpg" alt="" class="upload-img" v-if="label === '身份证正面照'">
    <!-- <img :src="img" alt="" class="upload-img" v-if="img"> -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'upload',
  props: {
    type: {
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    img: {
      type: String
    }
  },
  data () {
    return {
      lists: [], // idlists
      isUpload: false, // 上传过
      fileList: [], // 显示图片列表
      dialogVisible: false, // 放大图片模态框
      dialogImageUrl: '' // 放大图片
    }
  },
  computed: {
    classObject () {
      return {
        line: this.isUpload,
        box: this.isUpload === false
      }
    }
  },
  created () {
    if (this.img) {
      this.setImg()
    }
  },
  methods: {
    setImg () {
      let obj = {
        url: this.img
      }
      this.fileList.push(obj)
    },
    hanldeIsUpload (file) { // 图片格式限制
      const isLtTp = file.type === 'image/png' || file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLtTp) {
        this.$message.error('上传图片只能是 jpg或png 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      this.isUpload = true
      return isLtTp && isLt2M
    },
    handleRemove (file, fileList) { // 删除图片
      this.lists.shift()
      if (this.$refs.upload.uploadFiles.length <= 0) {
        this.isUpload = false
      }
      this.returnValue()
    },
    handlePictureCardPreview (file) { // 预览图片
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleAvatarSuccess (res, file) { // 图片上传成功
      let id = ''
      if (res.data.items.length > 0) {
        id = res.data.items[0].id
        this.lists.unshift(id)
        this.returnValue()
      }
    },
    returnValue () {
      let id = ''
      if (this.lists.length > 0) {
        id = this.lists[0]
      }
      this.$emit('update:return', id)
    }
  }
}
</script>

<style lang="scss">
.upload{
  position: relative;
  &-label{
    font-size: 20px;
  }
  // .el-icon-delete{
  //   display: none;
  // }
  .upload-img{
    position: absolute;
    left: 220px;
    top: 0px;
    width: 200px;
    height: 120px;
  }
  .el-upload-list__item{
    width: 200px!important;
    height: 120px!important;
  }
  .el-upload{
    width: 200px;
    height: 120px;
  }
  &.box{
    display: flex;
    width: 420px;
    flex-direction: row;
    justify-content: space-between;
    & + .upload {
      margin-top: 20px;
    }
  }
  &.line{
    .el-upload{
      border: none;
      text-align: left;
      line-height: 0;
      height: 1em;
    }
  }
  .disabled{
    .el-upload-list__item{
      display: inline-block;
    }
    .el-upload-list__item:not(:last-of-type){
      display: none;
    }
    .el-upload--picture-card{
      position: absolute;
      width: 30px;
      height: 30px;
      background: inherit;
      margin-left: -39px;
      margin-top: 88px;
      color: #fff;
    }
  }
}
</style>
