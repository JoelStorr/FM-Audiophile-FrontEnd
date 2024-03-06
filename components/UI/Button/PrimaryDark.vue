<template>
  <button @click="emit('onClick')">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
const emit = defineEmits(["onClick"]);
</script>

<style lang="scss" scoped>
button {
  background-color: $black;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  color: $white;
  padding: 1.5rem 2rem;

  &:hover {
    background-color: #4C4C4C;
    cursor: pointer;
  }
}
</style>
