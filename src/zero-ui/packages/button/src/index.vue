<template>
  <button class="z-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :class="[
      type ? 'z-button--' + type : '',
      {
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]">
    <i class="iconfont icon-loading z-icon-loading" v-if="loading"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'zButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    loading: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
.z-icon-loading{
  display: inline-block;
  animation: rotating 2s linear infinite;
}
.z-button{
  padding: 12px 20px;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid;
  border-color: #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>
