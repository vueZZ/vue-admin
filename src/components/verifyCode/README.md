使用：
<el-form-item label="短信验证码" prop="verifyCode">
  <div class="form-item">
    <el-input v-model="data.verifyCode" maxlength="6" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入短信验证码"></el-input>
    <verifyCode class="form-item--insert" :code="data.verifyImg" :phone="data.phone" type="reg"></verifyCode>
  </div>
</el-form-item>

<el-form-item label="邮箱验证码" prop="verifyEmail">
  <div class="form-item">
    <el-input v-model="data.verifyEmail" minlength="4" maxlength="20" placeholder="请输入邮箱验证码"></el-input>
    <verifyCode class="form-item--insert" :email="data.corporationEmail" type="apply" :name="data.corporation"></verifyCode>
  </div>
</el-form-item>
