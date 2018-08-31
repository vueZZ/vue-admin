<template>
    <!-- :class="[
      labelPosition ? 'el-form--label-' + labelPosition : '',
      { 'el-form--inline': inline }
    ]" -->
  <form class="el-form"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'z-form',
  componentName: 'z-form',
  props: {
    model: Object,
    rules: Object
  },
  data () {
    return {
      // form数据
      fields: []
    }
  },
  created () {
    this.$on('el.form.addField', (field) => {
      if (field) {
        this.fields.push(field)
      }
    })
    this.$on('z.button.click', (e) => {
      console.log(e)
    })
    this.$on('ssr', (e) => {
      console.log(e)
    })
    /* istanbul ignore next */
    this.$on('el.form.removeField', (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  }
}
</script>
