<template>
  <div class="category-card">
    <div class="card">
      <img :src="props.imgSrc" alt="category image"/>

      <h6>{{ props.name }}</h6>
      <NuxtLink :to="props.to">
        <UIButtonSimple @on-click="handleClick"></UIButtonSimple>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
let props = defineProps(["imgSrc", "name", "to"]);
let emits = defineEmits(['onClick'])

function handleClick(){
  emits('onClick');
}


</script>

<style lang="scss" scoped>
.category-card {
  position: relative;
  width: 30%;
  height: 180px;
}

.card {
  width: 100%;
  height: 100%;
  background-color: $p-grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 1rem;
  padding-bottom: 1.5rem;

  & h6 {
    margin: 0.5rem;
  }
}

img {
  position: absolute;
  top: -35%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: auto;
}

@media screen and (max-width: $tablet) {
  img {
    width: 80%;
    top: -20%;
  }
}

@media screen and (max-width: $phone) {
  .category-card{
    width: 100%;
    margin: 8rem 0 0 0;
  }

  img{
    top: -30%;
    width: 50%;
  }
}
</style>
