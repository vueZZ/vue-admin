<template>
  <div>
    <el-button type="info" plain v-if="timer" disabled>{{second}}秒后重新获取</el-button>
    <el-button type="primary" plain @click="hanlde" v-else>获取验证码</el-button>
  </div>
</template>

<script>
export default {
  name: 'verifyCode',
  props: {
    type: { // 当前验证类型
      type: String,
      required: true
    },
    phone: '', // 发送电话
    code: '', // 发送电话所需图片验证值
    email: '', // 发送邮箱
    name: '' // 发送邮箱称呼
  },
  data () {
    return {
      second: 60,
      timer: '' // 当前计时器
    }
  },
  methods: {
    hanlde () {
      if (this.phone) {
        // FIXME:手机号校验取消
        this.handleGetVerifyCode()
        // let flag1 = this.$utils.isPhone(this.phone)
        // if (flag1) {
        //   this.handleGetVerifyCode()
        // } else {
        //   this.$message({
        //     message: '手机号格式不正确',
        //     type: 'warning'
        //   })
        // }
      } else if (this.email) {
        let flag2 = this.$utils.isEmail(this.email)
        if (flag2) {
          this.handleGetVerifyCode()
        } else {
          this.$message({
            message: '邮箱格式不正确',
            type: 'warning'
          })
        }
      }
    },
    handleGetVerifyCode () {
      let _this = this
      this.getVerifyCode()
      // this.$emit('return', verifyCode)
      this.timer = setInterval(() => {
        _this.second = _this.second - 1
        if (_this.second <= 0) {
          clearInterval(_this.timer)
          _this.timer = ''
          _this.second = 60
        }
      }, 1000)
    },
    getVerifyCode () {
      if (this.phone) {
        let phone = {
          type: this.type,
          code: this.code,
          phone: this.phone
        }
        this.$api.sendVerifyMsg(phone).then(a => {
        }).catch(e => {
          this.refash()
        })
      } else if (this.email) {
        let email = {
          type: this.type,
          email: this.email,
          name: this.name
        }
        this.$api.sendVerifyEmail(email).then(a => {
        }).catch(e => {
          this.refash()
        })
      }
    },
    refash () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = ''
      this.second = 60
    }
  },
  beforeDestroy () {
    this.refash()
  }
}
</script>
