<template>
    <div class="related-product-lits">
        <RelatedProductsElement />
        <RelatedProductsElement />
        <RelatedProductsElement />

    </div>
</template>
<script setup>

    let props = defineProps({
        recomndList: Object
    })


</script>

<style lang="scss" scoped>

    .related-product-lits{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: relative;
    }

</style>