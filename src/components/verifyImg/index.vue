<template>
  <img :src="`${src}?${code}`" alt="" @click="getVerifyCode" class="verifyImg">
</template>

<script>
export default {
  name: 'verifyImg', // 验证码值
  props: {
    type: {
      required: true
    }
  },
  data () {
    return {
      src: `sendmsg`,
      code: '1'
    }
  },
  created () {
    this.getVerifyCode()
  },
  methods: {
    getVerifyCode () {
      this.code = getNum()
      function getNum () {
        return Math.floor(Math.random() * 100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .verifyImg{
    width: 100px;
    height: 30px;
    border: 1px solid;
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>
