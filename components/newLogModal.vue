<script>
export default {
  template: `
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Nueva entrada en la bitácora</p>
          <button type="button" class="delete" @click="$emit('close')"/>
        </header>
        <section class="modal-card-body">
          <b-field label="Escribe aquí el autor" label-position="inside">
            <b-input v-model="author" type="input" />
          </b-field>
          <b-field label="Escribe aquí el registro de actividad" label-position="inside">
            <b-input v-model="content" type="textarea" />
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Cerrar" @click="$emit('close')" />
          <b-button label="Guardar" type="is-primary" @click="createLog" :disabled="checkInvalid()" />
        </footer>
      </div>
    </form>
`,
  data() {
    return {
      author: '',
      content: ''
    };
  },
  methods: {
    checkInvalid() {
      const { author, content } = this;
      console.log(!author || !content)
      return !author || !content;
    },
    async createLog() {
      const { author, content } = this;
      const user = this.$supabase.auth.user();
      const { data } = await this.$supabase
        .from('logbook')
        .insert([{ content, user_id: user.id, author }])
        .single();
      if (data) {
        this.$emit('close');
      }
    }
  }
};
</script>