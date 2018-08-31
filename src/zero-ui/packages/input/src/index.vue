<template>
    <!-- TODO:listeners和element做法优劣 -->
  <div class="z-input"
    :class="[
      size ? 'z-input--' + size : '',
      {
        'is-disabled': disabled
      }
    ]"
  >
    <input class="z-input__inner"
      v-bind="$attrs"
      v-on="inputListeners"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autoComplete"
      :autofocus="autofocus"
      :value="currentValue"
    >
    <span class="z-input__icon">
      <i class="iconfont icon-close" @click="clear"></i>
    </span>
  </div>
</template>

<script>
import emitter from 'zero-ui/src/mixins/emitter.js'
export default {
  name: 'z-input',
  mixins: [emitter],
  inheritAttrs: false,
  props: {
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'large'
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    autofocus: Boolean
  },
  data () {
    return {
      currentValue: this.value === undefined || this.value === null ? '' : this.value
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            let value = event.target.value
            vm.setCurrentValue(value)
            vm.$emit('input', value)
          },
          blur: function (event) {
            vm.$emit('blur', event)
            this.dispatch('z-form-item', 'z.form.blur', [this.currentValue])
          }
        }
      )
    }
  },
  watch: {
    'value' (val, oldValue) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    setCurrentValue (value) {
      this.currentValue = value
      this.dispatch('z-form-item', 'z.form.change', [value])
    },
    clear () {
      this.$emit('input', '')
      this.setCurrentValue('')
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss">
@mixin input-height(
    $height
  )
{
  height: $height;
  line-height: $height;
}

@mixin input(
    $large,
    $medium,
    $small,
    $mini
  )
{
  &--large{
    font-size: $large;
    @include input-height(40px)
  }
  &--medium{
    font-size: $medium;
    @include input-height(36px)
  }
  &--small{
    font-size: $small;
    @include input-height(32px)
  }
  &--mini{
    font-size: $mini;
    @include input-height(28px)
  }
}

.z-input {
  position: relative;
  display: inline-block;
  font-size: 14px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  @include input(14px, 14px, 13px, 12px);
  &__inner{
    display: inline-block;
    padding: 0 15px;
    width: 100%;
    height: inherit;
    line-height: inherit;
    color: #606266;
    font-size: inherit;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background-color: #fff;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    outline: 0;
    appearance:none;
    &:focus{
      border-color: #409EFF;
    }
    &:hover{
      border-color: #c0c4cc
    }
  }
  &__icon{
    position: absolute;
    right: 0;
    width: 20px;
    line-height: inherit;
    cursor: pointer;
  }
}
</style>
