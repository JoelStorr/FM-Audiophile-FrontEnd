<template>
  <div class="content-holder">
    <img :src="props.item['image']" />
    <div class="name-holder">
      <p>{{ props.item["name"].slice(0, 12) }}...</p>
      <p>$ {{ props.item["price"] }}</p>
    </div>
    <p class="count">x{{ props.item["count"] }}</p>
  </div>
</template>
<script setup>
let props = defineProps({ item: Object });
</script>

<style lang="scss" scoped>
.content-holder {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

img {
  width: 25%;
  margin-right: 2rem;
  border-radius: 1rem;
}

.name-holder {
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;

  & p:first-of-type {
    font-weight: bold;
  }

  & p {
    margin: 0;
  }
}

.count {
  margin: 0;
  align-self: flex-start;
  font-weight: bold;
  color: $p-dark-grey;
}
</style>
