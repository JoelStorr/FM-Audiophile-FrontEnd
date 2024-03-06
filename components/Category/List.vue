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

<style scoped>
.category-cards {
  padding: 20rem 10% 15rem 10%;
  display: flex;
  justify-content: space-between;
}
</style>
