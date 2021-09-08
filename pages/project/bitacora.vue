<template>
  <section class="section card">
    <h1 class="title">Bitácora Huertódromo</h1>
    <b-button
      v-if="profile"
      label="Añadir nuevo registro"
      type="is-primary"
      size="is-medium"
      @click="cardModal"
    />
    <div class="columns">
      <div class="column is-full">
        <table class="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Autor</th>
              <th>Contenido</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="log in logbook" :key="log.id">
              <td>{{ log.updated_at | date('DD/MM/YYYY') }}</td>
              <td>{{ log.author }}</td>
              <td>{{ log.content }}</td>
            </tr>
          </tbody>
        </table>
        <h1 v-if="loaded && !logbook.length">No hay registros aún...</h1>
      </div>
    </div>
  </section>
</template>

<script>
import newLogModal from '../../components/newLogModal.vue';
export default {
  components: {
    newLogModal
  },
  async created() {
    const { data: logbook, error } = await this.$supabase.from('logbook').select('*');
    this.logbook = logbook;
    this.loaded = true;
  },
  data() {
    return {
      profile: null,
      loaded: false,
      logbook: []
    };
  },
  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: newLogModal,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      });
    },

  },
  async mounted() {
    const profile = await this.$supabase.auth.user();
    this.profile = profile;
  }
};
</script>

<style>
</style>