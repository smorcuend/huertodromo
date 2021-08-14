<template>
  <b-carousel :interval="5000" :indicator-inside="false">
    <b-carousel-item v-for="item in items" :key="item.id">
      <b-image class="image" :src="item.src" :alt="item.title"></b-image>
    </b-carousel-item>
    <template #indicators="props">
      <b-image class="al image" :src="items[props.i].src" :title="items[props.i].title"></b-image>
    </template>
  </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      items: [
        {
          id: 10,
          title: 'Slide 1',
          src: 'https://picsum.photos/id/0/1230/500'
        },
        {
          id: 11,
          title: 'Slide 2',
          src: 'https://picsum.photos/id/1/1230/500'
        },
        {
          id: 12,
          title: 'Slide 3',
          src: 'https://picsum.photos/id/2/1230/500'
        },
        {
          id: 13,
          title: 'Slide 4',
          src: 'https://picsum.photos/id/3/1230/500'
        },
        {
          id: 14,
          title: 'Slide 5',
          src: 'https://picsum.photos/id/4/1230/500'
        },
        {
          id: 15,
          title: 'Slide 6',
          src: 'https://picsum.photos/id/5/1230/500'
        },
        {
          id: 16,
          title: 'Slide 7',
          src: 'https://picsum.photos/id/6/1230/500'
        },
        {
          id: 17,
          title: 'Slide 8',
          src: 'https://picsum.photos/id/7/1230/500'
        }
      ]
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
</style>