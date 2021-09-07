<template>
  <section class="section card">
    <h1 class="title">Plano del Huertodromo</h1>
    <div class="columns">
      <div class="column">
        <div class="card p-4">
            <div id="svgmap"></div>
        </div>
      </div>
    </div>
  </section>
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
<style>
#svgmap {
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 500px;
}
</style>
