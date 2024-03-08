<template>
  <div class="content-holder">
    <div class="text-holder">
      <h2>Bringing you the <span class="highlight">best</span> audio gear</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <div class="img-holder">
      <img src="/shared/desktop/image-best-gear.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-holder {
  width: 100%;
  display: flex;

  padding: 15rem 10% 2rem 10%;
}

.img-holder {
  width: 50%;
  height: auto;
  padding-left: 5rem;

  & img {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
}

.text-holder {
  width: 50%;
  padding-right: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.highlight {
  font-size: 4rem;
  color: $primary;
}


@media screen and (max-width: $tablet) {
  .content-holder{
    flex-direction: column;
    flex-direction: column-reverse;
    padding-top: 10rem;
  }

  .img-holder{
    width: 100%;
    padding: 0;
  }
  .text-holder{
    width: 100%;
    text-align: center;
    padding: 5rem 10rem 0 10rem;
  }
  
}


@media screen and (max-width: $phone){
  .text-holder{
    padding: 0rem;

    & h2{
      font-size: 2.8rem;
    }

    & .highlight{
      font-size: 2.8rem;
    }
  }
}

</style>
