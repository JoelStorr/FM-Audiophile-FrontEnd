<template>
   <section class="hero-section">
    <div class="hero-info">
        <p class="g-overline">New Product</p>
        <h1>XX99 Mark || <br/> Headphones</h1>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <UIButtonPrimary class="btn-primary">See Product</UIButtonPrimary>
    </div>
   <div class="hero-spacer">
    <img src="/home/desktop/headphones-hero.png"/>
   </div>
    


   </section>
</template>


<style lang="scss" scoped>

.hero-section{
    background-color: #141414;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: row;
    min-width: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-bottom: 5rem;
    & p{
        color: $p-dark-grey;
    }
}


.hero-info{
    background-color: #141414;
    flex: 1;
    height: 100%;
    padding-left: 10%;
    padding-right: 2%;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & h1{
        margin: 2rem 0;
    }

    & .btn-primary{
        margin-top: 2rem;
        width: 40%;
    }
    
}
.hero-spacer{
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    & img{
        height: 100%;
        width: auto;
        
    }
}
h1{
    color: $white;
}

.hero-bg-image{
    width: auto;
    height: 600px;

    border: 1px solid red;
}


</style>