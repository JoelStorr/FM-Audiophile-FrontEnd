<template>

    <div class="content-holder">
        <img src="/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" />
        <div class="name-holder">
            <p>XX99 MK ||</p>
            <p>$2.999</p>
        </div>
        <p>x1</p>
    </div>


</template>


<style lang="scss" scoped>

    .content-holder{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
    }

    img{
        width: 25%;
        margin-right: 2rem;
        border-radius: 1rem;
    }

    .name-holder{
        flex: 1;
        justify-content: center;
        align-items: center;
        height: 100%;

        & p:first-of-type{
            font-weight: bold;
        }
        
        & p{
            margin: 0;
        }
    }



</style>