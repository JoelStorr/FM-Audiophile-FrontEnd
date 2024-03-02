<template>

    <div class="product-prev" v-if="props.imgLeft">
        <div class="image-holder">
            <img src="/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" />
        </div>
        <div class="content-holder">
            <p class="g-subtitle">New Product</p>
            <h2>XX99 Mark || <br/> Headphones</h2>
            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            <UIButtonPrimary>See Product</UIButtonPrimary>
        </div>
    </div>
    <div class="product-prev" v-else>
        
        <div class="content-holder">
            <p class="g-subtitle">New Product</p>
            <h2>XX99 Mark || <br/> Headphones</h2>
            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            <UIButtonPrimary>See Product</UIButtonPrimary>
        </div>
        <div class="image-holder">
            <img src="/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" />
        </div>
    </div>

</template>

<script setup>

    const props = defineProps({
        imgLeft: Boolean
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

</style>