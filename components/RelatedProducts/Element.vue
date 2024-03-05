import type { NuxtLink } from "#build/components";

<template>

    <div class="content-holder">

       
            <img class="product-image" :src="props.item['image']['desktop']" />
      
        <h3>{{ props.item['name'] }}</h3>
        <NuxtLink :to="`/product/${props.item['slug']}`">
            <UIButtonPrimary>See Product</UIButtonPrimary>
        </NuxtLink>
    </div>

</template>

<script setup>

const props = defineProps({
    item: Object
});

</script>


<style lang="scss" scoped>


    .content-holder{
        position: relative;
        width: 100%;
        margin: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    .product-image{
        width: 100%;
        height: auto;
        border-radius: 1rem;
    }


</style>