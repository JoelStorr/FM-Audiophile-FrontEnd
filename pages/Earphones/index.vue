<template>
  <div class="header">
    <h2>Earphones</h2>
  </div>
  <section class="products">
    <ProductPrev v-for="item in categoryProducts" key="item.id" :imgLeft="item.id % 2 == 0 ? true : false" />
    <p v-for="item in categoryProducts" key="item.id">{{ item.id }}</p>
    {{ categoryProducts }}
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

  console.log('Ran Hearphones')


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
