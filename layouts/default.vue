<template>
  <div>
    <header>
      <div class="main-header">
        <div class="logo-holder">
          <img src="/shared/tablet/icon-hamburger.svg" v-if="width < 1025" @click="switchMenu"/>
          <img src="/shared/desktop/logo.svg" alt="logo audiophile" @click="navigateTo('/')"/>
        </div>

        <nav v-if="width > 1025">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          <NuxtLink class="nav-link" to="/Headphones">Headphones</NuxtLink>
          <NuxtLink class="nav-link" to="/Speakers">Speakers</NuxtLink>
          <NuxtLink class="nav-link" to="/Earphones">Earphones</NuxtLink>
        </nav>

        <button class="cart-btn" @click="switchCard">
          <img src="/shared/desktop/icon-cart.svg" alt="Cart" />
        </button>
      </div>
      <hr />
      <div class="mobile-menu" v-if="showMobileMenu">
      <CategoryList />
    </div>
    </header>
    <div class="cart-card" v-if="showCartCard">
      <CartCard @hideCard="switchCard" />
    </div>
    <div class="bg-dark" v-if="showCartCard || showMobileMenu" @click="hideOverlays"></div>
    
    <slot></slot>
    <footer>
      <div class="highlight"></div>
      <div>
        <img src="/shared/desktop/logo.svg" alt="logo audiophile" />
        <p class="footer-text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p class="footer-text">Copyright 2021. All Rights Reserved</p>
      </div>
      <div class="link-holder">
        <nav>
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          <NuxtLink class="nav-link" to="/Headphones">Headphones</NuxtLink>
          <NuxtLink class="nav-link" to="/Speakers">Speakers</NuxtLink>
          <NuxtLink class="nav-link" to="/Earphones">Earphones</NuxtLink>
        </nav>
        <div>
          <img class="social-icon"src="/shared/desktop/icon-facebook.svg" />
          <img class="social-icon"src="/shared/desktop/icon-twitter.svg" />
          <img class="social-icon"src="/shared/desktop/icon-instagram.svg" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
let showCartCard = useState("showCartCard", () => false);
let showMobileMenu = useState("showMobile", () => false);

let width = computed(()=>{
  if(process.client){
    return window.innerWidth;
  }
})

function switchMenu(){
  showMobileMenu.value = !showMobileMenu.value
}
function switchCard() {
  showCartCard.value = !showCartCard.value;
}

function hideOverlays(){
  if(showCartCard.value){
    showCartCard.value = false
  }

  if(showMobileMenu.value){
    showMobileMenu.value = false
  }
}

</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  border: none;
  padding: 2rem 0;
}

.main-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  margin-bottom: 2rem;
}

.nav-link {
  font-size: 1.3rem;
  margin: 0 2rem;
  text-decoration: none;
  

  &:visited{
    color: $white;
  }

}

.nav-link:hover {
 color: $primary;
}




.cart-btn {
  background-color: rgba(0, 0, 0, 0);
  border: none;
}

.cart-card {
  position: absolute;

  top: 10rem;
  right: 10%;
  z-index: 2;
}

.bg-dark {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

hr {
  height: 0;
  border: none;
  border-top: 0.5px solid $p-dark-grey;
}

.mobile-menu{
  position: relative;
  background-color: $white;
  width: 100%;
  border-radius: 0 0 1rem 1rem;
}

footer {
  position: relative;
  margin-top: 15rem;
  background-color: $p-black;
  padding: 5rem 10% 2rem 10%;
  color: $white;
  display: flex;
}

.link-holder {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 6rem;

  & img {
    padding: 0 0.8rem;
  }
}

.footer-text {
  margin-top: 3rem;
}

.highlight {
  position: absolute;
  top: 0;
  width: 12rem;
  height: 0.4rem;
  background-color: $primary;
}


.social-icon:hover{
  filter: brightness(0) saturate(100%) invert(54%) sepia(47%) saturate(577%) hue-rotate(337deg) brightness(94%) contrast(93%);
}

@media screen and (max-width: $tablet) {
  .logo-holder{
    display: flex;
    align-items: center;

    & img:first-of-type{
      margin-right: 4rem;
    }
  }
}

</style>
