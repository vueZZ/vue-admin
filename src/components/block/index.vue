<template>
  <div class="block">
    <h3 v-if="title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.block{
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  & + & {
    border-top: none;
  }
}
</style>
