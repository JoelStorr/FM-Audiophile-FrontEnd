<template>
  <section class="category-cards">
    <CategoryCard
      name="Headphones"
      to="/headphones"
      img-src="/shared/desktop/image-category-thumbnail-headphones.png"
      @on-click="handelClick"
    />
    <CategoryCard
      name="Speakers"
      to="/speakers"
      img-src="/shared/desktop/image-category-thumbnail-speakers.png"
      @on-click="handelClick"
    />
    <CategoryCard
      name="Earphones"
      to="/headphones"
      img-src="/shared/desktop/image-category-thumbnail-earphones.png"
      @on-click="handelClick"
    />
  </section>
</template>

<script setup>

  let emits = defineEmits(['onClick']);

  function handelClick(){
    emits('onClick');
  }

</script>

<style lang="scss" scoped>
.category-cards {
  padding: 20rem 10% 15rem 10%;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: $tablet) {
  .category-cards {
    padding-top: 10rem;
  }
}

@media screen and (max-width: $phone) {
  .category-cards{
    flex-direction: column;
    align-items: center;
    
  }
}

</style>
