<template>
  <section class="hero-section">
    <div class="hero-info">
      <p class="g-overline">New Product</p>
      <h1>
        XX99 Mark || <br />
        Headphones
      </h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <NuxtLink to="/Product/xx99-mark-two-headphones">
        <UIButtonPrimary class="btn-primary">See Product</UIButtonPrimary>
      </NuxtLink>
    </div>
    <div class="hero-spacer">
      <img src="/home/desktop/headphones-hero.png" />
    </div>
  </section>
  <CategoryList />
  <HomeSpeakerGrid />
  <AudioText />
</template>

<style lang="scss" scoped>
.hero-section {
  background-color: #141414;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 5rem;
  & p {
    color: $p-dark-grey;
  }
}

.hero-info {
  background-color: #141414;
  flex: 1;
  height: 100%;
  padding-left: 10%;
  padding-right: 2%;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    margin: 2rem 0;
  }

  & .btn-primary {
    margin-top: 2rem;
    width: 40%;
  }
}
.hero-spacer {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    height: 100%;
    width: auto;
  }
}

.hero-bg-image {
  width: auto;
  height: 600px;
}

h1 {
  color: $white;
}

.speaker-hero-holder {
  padding: 0 10%;
}


@media screen and (max-width: $tablet) {
  .hero-section{
    top: -8rem;
    background-color: rgba($color: #000000, $alpha: 1);
    height: auto;    
    padding-top:0 ;
    padding-bottom: 0;

    & img{
      position: relative;
      
      width: 100%;
      height: auto;
      z-index: 1;
    }
  }

  .hero-info{
    position: absolute;
    width: 40%;
    background-color: rgba($color: #000000, $alpha: 0.0);
    z-index: 2;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    
    padding-top: 0;
  }

}



</style>
