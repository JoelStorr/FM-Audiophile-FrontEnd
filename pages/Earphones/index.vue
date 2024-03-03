<template>
  <div class="header">
    <h2>Earphones</h2>
  </div>
  <section class="products">
    <ProductPrev :imgLeft="true" />
  </section>
  <CategoryList />
  <AudioText />
</template>

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
