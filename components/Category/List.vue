<template>
  <section class="category-cards">
    <CategoryCard
      name="Headphones"
      to="/headphones"
      img-src="/shared/desktop/image-category-thumbnail-headphones.png"
    />
    <CategoryCard
      name="Speakers"
      to="/speakers"
      img-src="/shared/desktop/image-category-thumbnail-speakers.png"
    />
    <CategoryCard
      name="Earphones"
      to="/headphones"
      img-src="/shared/desktop/image-category-thumbnail-earphones.png"
    />
  </section>
</template>

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
