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
  margin-top: 15rem;
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
</style>
