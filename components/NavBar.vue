<template>
  <b-navbar fixed-top centered type="is-success" shadow>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <NuxtLink to="/"> Inicio </NuxtLink>
      </b-navbar-item>
      <b-navbar-item href="#">
        <NuxtLink to="/agenda"> Agenda </NuxtLink>
      </b-navbar-item>
      <b-navbar-item href="#">
        <NuxtLink to="/whoarewe"> Quienes somos </NuxtLink>
      </b-navbar-item>
      <b-navbar-item href="#">
        <NuxtLink to="/where"> Dónde estamos </NuxtLink>
      </b-navbar-item>
      <b-navbar-item href="#">
        <NuxtLink to="/library"> Biblioteca </NuxtLink>
      </b-navbar-item>
      <b-navbar-dropdown label="Editar" v-if="authenticated">
        <b-navbar-item href="#">
          <NuxtLink to="/my-posts"> Mis entradas </NuxtLink>
        </b-navbar-item>
        <b-navbar-item href="#">
          <NuxtLink to="/create-post"> Crear entrada </NuxtLink>
        </b-navbar-item>
        <b-navbar-item href="#">
          <NuxtLink to="/profile"> Perfil </NuxtLink>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light">
            <NuxtLink to="/profile"> Iniciar sesión </NuxtLink>
          </a>
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