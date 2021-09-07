<template>
  <section class="section card">
    <h1 class="title">Donde estamos</h1>
    <div class="columns">
      <div class="column">
        <div class="card p-4">
          <h2 class="card-title subtitle mt-4">Localización:</h2>
          Parte trasera del velódromo, C/Valdemaría s/n <br />
          Polígono Sta María de Benquerencia - Toledo (45007)
        </div>
        <div class="card p-4 mt-4">
          <h2 class="card-title subtitle mt-4">Contacto:</h2>
          <p>
            Si estás interesado en participar, visitarnos o simplemente conocer un poco más de este
            proyecto comunitario puedes acercarte los jueves a las 16:30 al huertódromo ó
            escribirnos al correo: <a href="mailto:huertodromotoledo@gmail.com">huertodromo@gmail.com</a>
            <br>
            Te esperamos!
          </p>
        </div>
      </div>
      <div class="column">
        <div id="map-wrap" style="height: 400px">
          <client-only>
            <l-map :zoom="13" :center="[39.8674631, -3.95526]">
              <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
              <l-marker :lat-lng="[39.8674631, -3.95526]"></l-marker>
            </l-map>
          </client-only>
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
#map-wrap {
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 500px;
}
</style>
