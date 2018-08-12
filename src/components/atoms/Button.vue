<template>
  <button type="button" class="btn" @click.stop='event()'>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['event', 'text']
}
</script> 

<style lang="scss" scoped>
.btn {
  align-items: center;
  background-color: #ccc;
  color: $white;
  display: inline-flex;
  padding: 10px;

  @include min-mq(sm) {
    &:hover {
      background-color: currentColor;
    }
  }
}
</style>
