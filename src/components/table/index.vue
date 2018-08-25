<template>
  <div class="table">
    <div class="table-form">
      <slot name="form"></slot>
    </div>
    <div class="table-table">
      <slot name="table"></slot>
    </div>
    <div class="table-pagination">
      <slot name="pagination"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.table{

}
.table-form{

}
.table-table{

}
.table-pagination{
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
}
</style>
