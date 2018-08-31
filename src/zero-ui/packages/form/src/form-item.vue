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
import emitter from 'element-ui/src/mixins/emitter'
export default {
  name: 'z-form-item',
  componentName: 'z-form-item',
  mixins: [emitter],
  inject: ['zForm'],
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  computed: {
    form () {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'z-form') {
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    },
    fieldValue: {
      get () {
        const model = this.form.model
        if (!model || !this.prop) { return }
        return model[this.prop]
      }
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('z-Form', 'el.form.addField', [this])

      // let initialValue = this.fieldValue
      // if (Array.isArray(initialValue)) {
      //   initialValue = [].concat(initialValue)
      // }
      // Object.defineProperty(this, 'initialValue', {
      //   value: initialValue
      // })

      // let rules = this.getRules()

      // if (rules.length || this.required) {
      //   this.$on('z.form.blur', this.onFieldBlur)
      //   this.$on('z.form.change', this.onFieldChange)
      // }
    }
  },
  beforeDestroy () {
    this.dispatch('z-form', 'z.form.removeField', [this])
  },
  methods: {
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      this.validate('change')
    },
    // validate (trigger, callback = noop) {},
    getRules () {
      // let formRules = this.form.rules
      // const selfRules = this.rules
      // const requiredRule = this.required !== undefined ? { required: !!this.required } : []

      // const prop = getPropByPath(formRules, this.prop || '')
      // formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : []

      // return [].concat(selfRules || formRules || []).concat(requiredRule)
    }
  }

}
</script>
