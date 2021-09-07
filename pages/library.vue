<template>
  <main>
    <section class="section card">
      <h1 class="title">Biblioteca Huertodromo</h1>
      <div class="columns">
        <div class="column">
          <b-tabs v-model="activeTab" :multiline="true" type="is-boxed" size="is-medium">
            <b-tab-item label="Asamblea">
              <Asamblea />
            </b-tab-item>
            <b-tab-item label="Huerto">
              <Huerto />
            </b-tab-item>
            <b-tab-item label="Botánica">
              <Botanic />
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Asamblea from './library/asamblea.vue';
import Huerto from './library/huerto.vue';
import Botanic from './library/botanic.vue';
export default {
  name: 'library',
  components: {
    Asamblea,
    Huerto,
    Botanic
  },
  async created() {},
  data() {
    return {
      activeTab: 'Asamblea'
    };
  },
  computed: {}
};
</script>
