使用：
<el-form-item label="图片验证码" prop="verifyImg">
  <div class="form-item">
    <el-input v-model="data.verifyImg" maxlength="4" placeholder="请输入图片验证码"></el-input>
    <verifyImg class="form-item--insert" type="reg"></verifyImg>
  </div>
</el-form-item>