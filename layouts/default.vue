<template>
    
    <div>
        <header>

            <img src="/shared/desktop/logo.svg" alt="logo audiophile"/>

            <nav>
                <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                <NuxtLink class="nav-link" to="/Headphones">Headphones</NuxtLink>
                <NuxtLink class="nav-link" to="/Speakers">Speakers</NuxtLink>
                <NuxtLink class="nav-link" to="/Earphones">Earphones</NuxtLink>  
            </nav>
            
            <button class="cart-btn" @click="switchCard">
                <img src="/shared/desktop/icon-cart.svg" alt="Cart"/>
            </button>

            <div class="cart-card" v-if="showCartCard">
                <CartCard />
            </div>
            <div class="bg-dark" v-if="showCartCard" @click="switchCard"></div>

        </header>
        <slot></slot>
    </div>

</template>

<script setup>
    

    let showCartCard = useState('showCartCard', ()=>false);

    function switchCard(){
        showCartCard.value = !showCartCard.value;
    }

</script>


<style lang="scss" scoped>

header{
    position: relative;
    background-color: $black;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 15%;

}

.nav-link{
    font-size: 1.3rem;
    margin: 0 2rem;
    text-decoration: none;
    color: $white;
}

.nav-link:visited{
    color: $white;
}

.cart-btn{
    background-color: rgba(0,0,0,0);
    border: none;
}

.cart-card{
    position: absolute;
    
    top: 10rem;
    right: 10%;
    z-index: 2;
}

.bg-dark{
    z-index: 1;
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.4);
}

</style>