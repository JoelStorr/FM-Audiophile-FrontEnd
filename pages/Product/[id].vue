<template>
  <div class="header"></div>
  <div class="product-content-holder">
    <UIButtonBack />

    <div v-if="loading">
      <section class="main-product-section">
        <div class="image-holder">
          <img :src="productData['image']['desktop']" alt="product image"/>
        </div>
        <div class="product-content">
          <p class="g-overline higlight" v-if="productData['new']">
            New Product
          </p>
          <h2>{{ productData["name"] }}</h2>
          <p>
            {{ productData["description"] }}
          </p>
          <h6>$ {{ productData["price"] }}</h6>
          <div class="add-cart-btn">
            <UICounter
              @onNumberChange="numberChange"
              :index="productData['name']"
            />
            <UIButtonPrimary 
              :class="width < 1025 ? 'btn-padder': ''"
              @on-click="addtoCart" 
              :full-length="width < 1025 ? true : false "
            >Add to cart</UIButtonPrimary>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="feature-text">
          <h3>Features</h3>
          <p>
            {{ productData["features"] }}
          </p>
        </div>

        <div class="in-the-box">
          <h4>In the Box</h4>
          <ul>
            <li v-for="(item, index) in productData['includes']" :key="index">
              <span>{{ item["quantity"] }}x</span> {{ item["item"] }}
            </li>
          </ul>
        </div>
      </section>

      <section class="image-grid">
        <div class="image-grid-column">
          <img :src="productData['gallery']['first']['desktop']" alt="gallary image"/>
          <img :src="productData['gallery']['second']['desktop']" alt="gallary image"/>
        </div>
        <div class="image-grid-column-full">
          <img :src="productData['gallery']['third']['desktop']" alt="gallary image"/>
        </div>
      </section>

      <section class="related-products">
        <h2>You may also like</h2>

        <RelatedProductsList :list="productData['others']" />
      </section>
    </div>
  </div>
  <CategoryList />
  <AudioText />
</template>

<script setup>
import { useMainStore } from "~/store/index";

definePageMeta({
  middleware: [
    async function (to, from) {
      const store = useMainStore();
      let val = await store.loadProducst().then((res) => {
        return res;
      });

      console.log(store.products.length);

      console.log("Ran local middleware");
      console.log("Value", val);
      console.log(store.products);
      return val;
    },
  ],
});

const route = useRoute();

const store = useMainStore();
const { getProduct, loadProducst, addToCart } = store;

let count = useState("count", () => 1);

let loading = useState("loading", () => {
  return false;
});

const productData = computed(() => {
  let prod = getProduct(route.params.id);
  if (prod) {
    loading.value = true;
  }
  return prod;
});

if (productData.value) {
  true;
}


let width = computed(()=>{
  if(process.client){
    return window.innerWidth;
  }
})

function numberChange(value) {
  count.value = value;
}

function addtoCart() {
  addToCart(
    route.params.id,
    count.value,
    productData.value["price"],
    productData.value["name"],
    productData.value["image"]["desktop"]
  );
}
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 10rem;
  background-color: $black;
}

.product-content-holder {
  padding: 4rem 10% 1rem 10%;
}

.main-product-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image-holder {
  position: relative;
  max-width: 45%;

  & img {
    width: 100%;
    border-radius: 1rem;
  }
}

.product-content {
  max-width: 45%;
}

.higlight {
  color: $primary;
}

.add-cart-btn {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

.features {
  position: relative;
  display: flex;
}

.in-the-box {
  min-width: 30%;

  & ul {
    list-style: none;
    & li {
      font-size: 1.5rem;
      line-height: 200%;
      padding: .5rem 0;
    }

    & span {
      color: $primary;
      font-size: 1.5rem;
      font-weight: bold;
      padding-right: 0.5rem;
    }
  }
}

.image-grid {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.image-grid-column {
  position: relative;

  height: auto;
  padding: 1.5rem;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
}

.image-grid-column-full {
  padding: 1.5rem;
  padding-right: 0;
  & img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
}

.related-products {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}


@media screen and (min-width: $largeScreen) {
  .product-content-holder {
  padding: 4rem 25% 1rem 25%;
}
}


@media screen and (max-width: $tablet) {
  .features{
    flex-direction: column;
  }

  .in-the-box{
    margin: 5rem 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    & h4{
      margin: 0;
    }

    & ul{
     padding-right: 20%; 
    }
  }

  .add-cart-btn{
    width: 100%;
  }

  .btn-padder{
    margin-left: 3rem ;
  }

  .related-products{
    margin-bottom: 3rem;
  }

}


@media screen and (max-width: $phone) {

  .main-product-section{
    flex-direction: column;
  }

  .product-content{
    max-width: 100%;
  }


  .image-holder{
    max-width: 100%;
  }

  .in-the-box{
    flex-direction: column;

    & ul{
      margin: 0;
      padding: 0;
    }
  }

  .image-grid{
    flex-direction: column;
  }

  .image-grid-column-full{
    margin: 0;
    padding: 0;
  }

  .image-grid-column{
    & img{
      margin: 1.5rem 0;
    }
  }

}


</style>
