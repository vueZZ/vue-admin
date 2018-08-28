<script>
export default {
  props: {
    tag: {
      default: `div`,
      type: String
    },
    type: String
  },
  render (h) {
    return h(this.tag, {
      class: [
        'el-row',
        this.type === '1' ? `is-justify-${this.type}` : ''
      ]
    }, this.$slots.default)
  }
}
</script>
