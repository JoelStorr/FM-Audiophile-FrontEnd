<template>
  <div class="product-item">
    <img :src="props.item['image']" />
    <div class="name-holder">
      <p>{{ props.item["name"].slice(0, 12) }}...</p>
      <p>${{ props.item["price"] }}</p>
    </div>
    <UICounter
      :count="props.item['count']"
      :index="props.item['name']"
      @on-number-change="numberchange"
    />
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";

const store = useMainStore();
const { changeProductCount } = store;

let props = defineProps({
  item: Object,
});

function numberchange(value) {
  changeProductCount(props.item["slug"], value);
}
</script>

<style lang="scss" scoped>
.product-item {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  & img {
    width: 15%;
    height: 15%;
    border-radius: 1rem;
    margin-right: 1rem;
  }
}

.name-holder {
  flex: 1;
  margin-left: 1rem;

  & p {
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  & p:last-child {
    color: $p-dark-grey;
  }
}
</style>
