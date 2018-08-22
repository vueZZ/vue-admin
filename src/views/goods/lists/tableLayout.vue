<template>
  <div>
    <div class="table-form-container">
      <slot name="form"></slot>
    </div>
    <div class="table-container">
      <slot name="table"></slot>
    </div>
    <div class="pagination-container">
      <slot name="pagination">
        
      </slot>
    </div>
  </div>
</template>
