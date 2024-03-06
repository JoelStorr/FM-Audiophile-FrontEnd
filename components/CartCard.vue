<template>
  <div class="container">
    <div class="header">
      <h6>Cart ({{ cart.length }})</h6>
      <a @click="deleteCart">Remove all</a>
    </div>
    <div class="product-list">
      <CartItem v-for="(item, index) in cart" :key="index" :item="item" />
    </div>
    <div class="total">
      <p>Total</p>
      <h6>$ {{ total }}</h6>
    </div>
    <NuxtLink class="nuxt-link" to="/checkout">
      <UIButtonPrimary @on-click="hider">Checkout</UIButtonPrimary>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";

const store = useMainStore();
const { deleteCart, getCartTotal } = store;

let emit = defineEmits(["hideCard"]);

function hider() {
  console.log("Ran hider");
  emit("hideCard");
}

let cart = computed(() => {
  return store.cart;
});

let total = computed(() => {
  return store.cartTotal;
});
</script>

<style lang="scss" scoped>
.container {
  background-color: $white;
  width: 35vw;
  border-radius: 2.5rem;
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

a {
  font-size: 1.5rem;
  text-decoration: underline;
  color: $p-dark-grey;
}

.total {
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.product-list {
  position: relative;
  width: 100%;
}

.nuxt-link {
  width: 100%;
  & :first-child {
    width: 100%;
  }
}
</style>
