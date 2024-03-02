<template>

    <div class="speaker-hero">
        <div class="img-holder">
            <img class="speaker" src="/home/desktop/image-speaker-zx9.png" />
        </div>
        <img class="rings" src="/home/desktop/pattern-circles.svg" />
        <div class="content-holder">
            <h1>ZX9 <br/> Speaker</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <div>
                <UIButtonPrimaryDark>See Product</UIButtonPrimaryDark>
                <div class="btn-spacer"></div>
            </div>
        </div>
    </div>
    <div class="speaker-product">
        <h2>ZX7 Speaker</h2>
        <UIButtonSecondary></UIButtonSecondary>
    </div>

</template>

<script setup>


</script>


<style lang="scss" scoped>


.speaker-hero{
    position: relative;
    width: 100%;
    height: 50rem;
    background-color: $primary;
    display: flex;
    overflow: hidden;
    border-radius: 1rem;
    margin-bottom: 5rem;
}

.img-holder{
    position: relative;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    
}

.speaker{
    position: relative;
    z-index: 1;
    width: 60%;
    height: auto;
    top: 10px;
}

.rings{
    position: absolute;
    width: 90%;
    top: -10%;
    left: -20%;
}

.content-holder{
    width: 60%;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    padding-right: 10rem;


    & h1{
        margin: 0;
    }

    & p{
        margin: 4rem 0;
    }
}

.speaker-product{
    width: 100%;
    padding: 5rem;
    background-image: url("public/home/desktop/image-speaker-zx7.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
}

</style>