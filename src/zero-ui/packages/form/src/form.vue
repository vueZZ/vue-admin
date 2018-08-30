<template>
  <form class="el-form" 
    :class="[
      labelPosition ? 'el-form--label-' + labelPosition : '',
      { 'el-form--inline': inline }
    ]"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'z-form'
}
</script>
