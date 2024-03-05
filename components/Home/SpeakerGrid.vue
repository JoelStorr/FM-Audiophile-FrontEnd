<template>
  <section class="speaker-grid">
    <div class="speaker-hero">
      <div class="img-holder">
        <img class="speaker" src="/home/desktop/image-speaker-zx9.png" />
      </div>
      <img class="rings" src="/home/desktop/pattern-circles.svg" />
      <div class="content-holder">
        <h1>
          ZX9 <br />
          Speaker
        </h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly
          remarkable sound.
        </p>
        <div>
          <NuxtLink to="/Product/6">
            <UIButtonPrimaryDark>See Product</UIButtonPrimaryDark>
          </NuxtLink>
          <div class="btn-spacer"></div>
        </div>
      </div>
    </div>
    <div class="speaker-product">
      <h2>ZX7 Speaker</h2>
      <NuxtLink to="/Product/5">
        <UIButtonSecondary></UIButtonSecondary>
      </NuxtLink>
    </div>
  
    <div class="headphones-product">
      <img src="/home/desktop/image-earphones-yx1.jpg" />
      <div class="">
        <h3>YX1 Earphones</h3>
        <NuxtLink to="/Product/1">
          <UIButtonSecondary></UIButtonSecondary>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>

.speaker-grid{
  padding: 2rem 10% 2rem 10%;
}


.speaker-hero {
  position: relative;
  width: 100%;
  height: 50rem;
  background-color: $primary;
  display: flex;
  overflow: hidden;
  border-radius: 1rem;

}



.img-holder {
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.speaker {
  position: relative;
  z-index: 1;
  width: 60%;
  height: auto;
  top: 10px;
}

.rings {
  position: absolute;
  width: 90%;
  top: -10%;
  left: -20%;
}

.content-holder {
  width: 60%;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  padding-right: 10rem;

  & h1 {
    margin: 0;
  }

  & p {
    margin: 4rem 0;
  }
}

.speaker-product {
  width: 100%;
  padding: 7rem;
  background-image: url("/home/desktop/image-speaker-zx7.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  margin-top: 5rem;
}

.headphones-product {
  margin-top: 5rem;
  display: flex;

  & img {
    border-radius: 1rem;
    margin-right: 1rem;

    flex: 1;
  }

  & div {
    flex: 2;
    background-color: $p-grey;
    margin-left: 1rem;
    border-radius: 1rem;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
