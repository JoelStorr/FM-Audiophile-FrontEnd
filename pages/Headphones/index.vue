<template>
  <div class="header">
    <h2>Headphones</h2>
  </div>
  <section class="products">
    <ProductPrev 
      v-for="(item, index) in categoryProducts" 
      key="item.id" 
      :imgLeft="index % 2 == 0 ? true : false" 
      :product="item"
    />
  </section>
  <CategoryList />
  <AudioText />
</template>

<script setup>
  import {useMainStore} from '~/store/index';

  const store = useMainStore();
  const {getCategoryProducts} = store;

  let categoryProducts = computed(()=> {
    console.log('computed');
    return getCategoryProducts('headphones')
  });

</script>


<style lang="scss" scoped>
.header {
  padding-top: 5rem;
  background-color: $black;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
}

.products {
  width: 100vw;
  padding: 0 10%;
}
</style>
