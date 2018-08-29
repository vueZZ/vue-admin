<template>
  <button class="z-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      type ? 'z-button--' + type : '',
      size ? 'z-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]">
    <i class="iconfont icon-loading z-icon-loading" v-if="loading"></i>
    <i class="iconfont" :class="icon" v-if="icon && !loading"></i>
    <!-- TODO:意义？ -->
    <!-- <span v-if="$slots.default"><slot></slot></span> -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'z-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
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
@mixin active-colors(
    $default,
    $hover,
    $active,
    $disabled: #fff,
    $color: #fff
  )
{
  color: $color;
  background-color: $default;
  border-color: $default;
  &:hover, &:focus {
    color: $color;
    background-color: $hover;
    border-color: $hover;
  }
  &:active {
    color: $color;
    background-color: $active;
    border-color: $active;
  }
  &.is-disabled {
    color: $color;
    background-color: $disabled;
    border-color: $disabled;
  }
}

.z-icon-loading{
  display: inline-block;
  font-size: inherit;
  animation: rotating 2s linear infinite;
}
.z-button{
  display: inline-block;
  line-height: 1;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid;
  border-color: #dcdfe6;
  border-radius: 4px;
  background: #fff;
  outline: none;
  appearance: none;
  transition: 0.1s;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
  }
  &.is-loading{
    position: relative;
    pointer-events: none;
    &::before{
      pointer-events: none;
      content: '';
      position: absolute;
      left: -1px;
      right: -1px;
      top: -1px;
      bottom: -1px;
      background-color: rgba(255,255,255,.35);
    }
  }
  &.is-disabled{
    cursor: not-allowed;
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &--primary{
    @include active-colors(#409eff, #66b1ff, #3a8ee6, #a0cfff);
  }
  &--success{
    @include active-colors(#67c23a, #85ce61, #5daf34, #b3e19d);
  }
  &--info{
    @include active-colors(#909399, #a6a9ad, #82848a, #c8c9cc);
  }
  &--warning{
    @include active-colors(#e6a23c, #ebb563, #cf9236, #f3d19e);
  }
  &--danger{
    @include active-colors(#f56c6c, #f78989, #dd6161, #fab6b6);
  }
  &--mini, &--small{
    font-size: 12px;
    border-radius: 3px;
  }
  &--mini{
    padding: 7px 15px;
  }
  &--small{
    padding: 9px 15px;
  }
  &--medium{
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &--large{
    padding: 12px 30px;
    font-size: 14px;
    border-radius: 4px;
  }
  // 额外细节
  .iconfont{
    margin-right: 5px;
    font-size: inherit;
  }
}
</style>
