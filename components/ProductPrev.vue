<template>

    <div class="product-prev" v-if="props.imgLeft">
        <div class="image-holder">
            <img :src="props.product['categoryImage']['desktop']" />
        </div>
        <div class="content-holder">
            <p class="g-subtitle" v-if="props.product['new']">New Product</p>
            <h2>{{ props.product['name'] }}</h2>
            <p>{{ props.product['description'] }}</p>
            <NuxtLink :to="`/product/${props.product['id']}`">
                <UIButtonPrimary>See Product</UIButtonPrimary>
            </NuxtLink>
        </div>
    </div>
    <div class="product-prev" v-else>
        
        <div class="content-holder">
            <p class="g-subtitle" v-if="props.product['new']">New Product</p>
            <h2>{{ props.product['name'] }}</h2>
            <p class="description">{{ props.product['description'] }}</p>
            <NuxtLink :to="`/product/${props.product['id']}`">
                <UIButtonPrimary>See Product</UIButtonPrimary>
            </NuxtLink>
        </div>
        <div class="image-holder">
            <img :src="props.product['categoryImage']['desktop']" />
        </div>
    </div>

</template>

<script setup>

    const props = defineProps({
        imgLeft: Boolean,
        product: Object
    });

</script>


<style lang="scss" scoped>
    .product-prev{
        display: flex;
        align-items: center;
        margin: 10rem 0;
        
    }

    .image-holder{
        position: relative;
        max-width: 50%;
        
    }

    img{
        position: relative;
        width: 90%;
        height: auto;
        border-radius: 1rem;
    }

    .content-holder{
        flex: 1;
    }

    .description{
        padding-right: 6rem;
    }
</style>