<template>
  <i class="iconfont" :class="iconType"></i>
</template>

<script>
export default {
  name: 'z-icon',
  props: {
    type: String
  },
  computed: {
    iconType () {
      if (this.type) {
        return `icon-${this.type}`
      }
    }
  }
}
</script>
