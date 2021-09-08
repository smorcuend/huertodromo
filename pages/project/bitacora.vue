<template>
  <section class="section card">
    <h1 class="title">Bitácora</h1>
    <div class="columns">
      <div class="column" v-if="profile">
        <div class="fields">
          <b-field label="Content" label-position="inside">
            <b-input v-model="newlog.content" type="textarea" />
          </b-field>
          <b-button
            class="float__left"
            size="is-medium"
            type="is-danger"
            outlined
            @click="$router.go(-1)"
          >
            Cancel
          </b-button>
          <b-button
            class="float__right"
            type="is-success"
            icon-right="check-outline"
            size="is-medium"
            @click="createLog"
          >
            Registro jornada
          </b-button>
        </div>
      </div>
      <div class="column">
        <div class="card p-4">
          <div v-for="log in logbook" :key="log.id">
            <h3>{{ log.updated_at }}</h3>
            <p class="text-gray-500 mt-2">Author: {{ log.user_email }}</p>
            <p>{{ log.content }}</p>
          </div>
          <div class="box text-center">
            <h1 v-if="loaded && !logbook.length">No hay registros aún...</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  async created() {
    const { data: logbook, error } = await this.$supabase.from('logbook').select('*');
    this.logbook = logbook;
    this.loaded = true;
  },
  data() {
    return {
      profile: null,
      loaded: false,
      logbook: [],
      newlog: {
        content: ''
      }
    };
  },
  methods: {
    async createLog() {
      const { content } = this.newlog;
      if (!content) return;
      const user = this.$supabase.auth.user();
      const { data } = await this.$supabase
        .from('logbook')
        .insert([{ content, user_id: user.id, user_email: user.email }])
        .single();
      console.log(data);
    }
  },
  async mounted() {
    const profile = await this.$supabase.auth.user();
    this.profile = profile;
  }
};
</script>

<style>
</style>