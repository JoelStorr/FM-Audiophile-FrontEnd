<template>
  <div class="header"></div>
  <div class="product-content-holder">
    <UIButtonBack />

    <section class="main-product-section">
      <div class="image-holder">
        <img src="/product-yx1-earphones/desktop/image-product.jpg" />
      </div>
      <div class="product-content">
        <p class="g-overline higlight">New Product</p>
        <h2>XX99 Mark || Headphones</h2>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <h6>$ 2,999</h6>
        <div class="add-cart-btn">
          <UICounter />
          <UIButtonPrimary>Add to cart</UIButtonPrimary>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature-text">
        <h3>Features</h3>
        <p>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
          <br />
          <br />
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>

    

      <div class="in-the-box">
        <h4>In the Box</h4>
        <ul>
            <li>
                <span>1x</span> Headphone Unit
            </li>
            <li>
                <span>2x</span> Replacement Earcups
            </li>
            <li>
                <span>1x</span> User Manual
            </li>
            <li>
                <span>1x</span> 3.5mm 5m Audio Cabel
            </li>
            <li>
                <span>1x</span> Travel Bag
            </li>
        </ul>
      </div>
    </section>

    <section class="image-grid">
        <div class="image-grid-column">
            <img src="/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg" />
            <img src="/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg" />
        </div>
        <div class="image-grid-column-full">
            <img src="/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" />
        </div>
    </section>

    <section class="related-products" >
        <h2>You may also like</h2>

        <RelatedProductsList />

    </section>
</div>
<CategoryList />
<AudioText />
</template>

<script setup></script>

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


.features{
    position: relative;
    display: flex;
}

.in-the-box{
    min-width: 30%;

    & ul{
        
        list-style: none;
        & li{
            font-size: 1.5rem;
            line-height: 200%;

        }

        & span{
            color: $primary;
            font-size: 1.5rem;
            font-weight: bold;
            padding-right: .5rem;
        }
    }


}

.image-grid{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.image-grid-column{
    position: relative;
    
    height: auto ;
    padding: 1.5rem;
    padding-left:0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    & img{
        width: 100%;
        height: auto;
        border-radius: 1rem;
    }


}

.image-grid-column-full{
    
    padding: 1.5rem;
    padding-right: 0;
    & img{
        width: 100%;
        height: auto;
        border-radius: 1rem;
    }
}

.related-products{

    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
