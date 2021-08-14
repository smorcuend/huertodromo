<template>
  <main>
    Donde estamos
    <div id="map-wrap" style="height: 400px">
      <client-only>
        <l-map :zoom="13" :center="[39.8674631, -3.95526]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[39.8674631,-3.95526]"></l-marker>
        </l-map>
      </client-only>
    </div>
  </main>
</template>

<script>
export default {
  async created() {},
  data() {
    return {
      loaded: false
    };
  },
  methods: {}
};
</script>
