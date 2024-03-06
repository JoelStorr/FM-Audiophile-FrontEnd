<template>
  <div class="related-product-lits">
    <RelatedProductsElement
      v-for="item in props.list"
      :key="item['slug']"
      :item="item"
    />
  </div>
</template>
<script setup>
let props = defineProps({
  list: Array,
});
</script>

<style lang="scss" scoped>
.related-product-lits {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
}
</style>
