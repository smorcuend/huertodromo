<template>
  <b-navbar fixed-top centered type="is-success">
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> Inicio </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: 'agenda' }"> Agenda </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'whoarewe' }"> Quienes somos </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'where' }"> Dónde estamos </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'network' }"> Redes sociales </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'library' }"> Biblioteca </b-navbar-item>
      <b-navbar-dropdown label="Editar" v-if="authenticated">
        <b-navbar-item tag="router-link" :to="{ name: 'my-posts' }"> Mis entradas </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'create-post' }">
          Crear entrada
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'profile' }"> Perfil </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light" href="/profile"> Iniciar sesión </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>


<script>
export default {
  data: () => ({
    authenticated: false,
    authListener: null
  }),
  async mounted() {
    /* When the app loads, check to see if the user is signed in */
    /* also create a listener for when someone signs in or out */
    const { data: authListener } = this.$supabase.auth.onAuthStateChange(() => this.checkUser());
    this.authListener = authListener;
    this.checkUser();
  },
  methods: {
    async checkUser() {
      const user = await this.$supabase.auth.user();
      if (user) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    }
  },
  beforeUnmount() {
    this.authListener?.unsubscribe();
  }
};
</script>