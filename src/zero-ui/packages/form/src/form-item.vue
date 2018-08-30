<template>
  <div class="el-form-item"
    :class="[
      {
        'is-error': validateState === 'error',
        'is-validating': validateState === 'validating',
        'is-success': validateState === 'success',
        'is-required': isRequired || required
      },
      sizeClass ? 'el-form-item--' + sizeClass : ''
    ]"
  >
    <label :for="labelFor" class="el-form-item__label" :style="labelStyle" v-if="label || $slots.label">
      <slot name="label">{{ label + form.labelSuffix }}</slot>
    </label>
    <div class="el-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <div
          v-if="validateState === 'error' && showMessage && form.showMessage"
          class="el-form-item__error"
          :class="{
            'el-form-item__error--inline': typeof inlineMessage === 'boolean'
              ? inlineMessage
              : (elForm && elForm.inlineMessage || false)
          }"
        >
          {{validateMessage}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-form-item'
}
</script>
