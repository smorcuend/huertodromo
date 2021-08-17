<template>
  <b-carousel :interval="5000" :indicator-inside="false">
    <b-carousel-item v-for="item in items" :key="item.id">
      <section class="hero is-small">
        <div class="hero-body has-text-centered">
          <b-image class="image c-image" :src="item.src" :alt="item.title"></b-image>
        </div>
      </section>
    </b-carousel-item>
    <template #indicators="props">
      <b-image class="al image" :src="items[props.i].src" :title="items[props.i].title"></b-image>
    </template>
  </b-carousel>
</template>

<script>
const PHOTO_ALBUM_SIZE = 21;
export default {
  name: 'Carousel',
  data() {
    return {
      items: [...Array(PHOTO_ALBUM_SIZE).keys()].map((i) => ({ id: i, src: `./photo${i}.jpg` }))
    };
  }
};
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
.c-image img {
  max-height: 800px;
}
</style>