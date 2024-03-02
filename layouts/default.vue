<template>
  <div>
    <header>
      <div class="main-header">
        <img src="/shared/desktop/logo.svg" alt="logo audiophile" />

        <nav>
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          <NuxtLink class="nav-link" to="/Headphones">Headphones</NuxtLink>
          <NuxtLink class="nav-link" to="/Speakers">Speakers</NuxtLink>
          <NuxtLink class="nav-link" to="/Earphones">Earphones</NuxtLink>
        </nav>

        <button class="cart-btn" @click="switchCard">
          <img src="/shared/desktop/icon-cart.svg" alt="Cart" />
        </button>

        <div class="cart-card" v-if="showCartCard">
          <CartCard />
        </div>
        <div class="bg-dark" v-if="showCartCard" @click="switchCard"></div>
      </div>

      <hr />
    </header>
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
          <img src="/shared/desktop/icon-facebook.svg" />
          <img src="/shared/desktop/icon-twitter.svg" />
          <img src="/shared/desktop/icon-instagram.svg" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
let showCartCard = useState("showCartCard", () => false);

function switchCard() {
  showCartCard.value = !showCartCard.value;
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  border: none;
  padding: 2rem 10%;
}

.main-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
}

.nav-link {
  font-size: 1.3rem;
  margin: 0 2rem;
  text-decoration: none;
  color: $white;
}

.nav-link:visited {
  color: $white;
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
</style>
