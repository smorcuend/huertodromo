<template>
  <main class="content w-5">
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <section class="section">
          <div v-if="!profile && !submitted && !invitedUser && !showResetPassword" class="flex flex-col box">
            <h2 class="text-2xl">Iniciar sesión</h2>
            <b-field label="Email">
              <b-input type="email" v-model="email" maxlength="30" placeholder="E-Mail"> </b-input>
            </b-field>
            <b-field label="Contraseña">
              <b-input
                type="password"
                v-model="password"
                maxlength="30"
                minlength="3"
                placeholder="Password"
                password-reveal
              >
              </b-input>
            </b-field>
            <b-field>
              <p class="control">
                <b-button label="Acceder" type="is-primary" @click="signIn" />
              </p>
            </b-field>
            <b-field>
              <p class="control">
                <b-button label="Eres usuario invitado? Pulsa aquí" type="is-primary" @click="invitedUser = true" />
              </p>
            </b-field>
            <b-field>
              <p class="control">
                <b-button label="Resetear contraseña" type="is-primary" @click="showResetPassword = true" />
              </p>
            </b-field>
          </div>
          <div v-if="!profile && !submitted && invitedUser" class="flex flex-col box">
            <h2 class="text-2xl">Escribe el email con el que te han invitado</h2>
            <b-field label="Email">
              <b-input type="email" v-model="email" maxlength="30" placeholder="E-Mail"> </b-input>
            </b-field>
            <b-button @click="signIn">Acceder</b-button>
            <b-button @click="invitedUser = false"> Volver atrás </b-button>
          </div>
          <div v-if="!profile && !submitted && showResetPassword" class="flex flex-col box">
            <h2 class="text-2xl">Genera una nueva contraseña</h2>
            <b-field label="Email">
              <b-input type="email" v-model="email" maxlength="30" placeholder="E-Mail"> </b-input>
            </b-field>
            <b-button @click="resetPassword" type="is-primary"> Envíar </b-button>
            <b-button @click="showResetPassword = false" type="is-secondary"> Volver atrás </b-button>
            <p>
              {{ alert }}
            </p>
          </div>
          <div v-if="profile">
            <h2 class="text-xl">Hola, {{ profile.email }}</h2>
            <p class="text-gray-400 my-3">User ID: {{ profile.id }}</p>
            <b-button @click="signOut">Salir</b-button>
          </div>
          <div v-if="submitted">
            <h1 class="text-xl text-center">Revisa tu correo para iniciar sesión :)</h1>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    profile: null,
    submitted: false,
    showResetPassword: false,
    email: '',
    password: null,
    passwordTmp: null,
    passwordTmp2: null,
    invitedUser: false,
    alert: ''
  }),
  methods: {
    async signOut() {
      await this.$supabase.auth.signOut();
      this.profile = null;
    },
    async signIn() {
      const { email, password } = this;
      if (!email) return;
      const { error, data } = await this.$supabase.auth.signIn({
        email,
        password
      });

      console.log(error, data);
      this.submitted = true;
    },
    resetPassword() {
      // const { passwordTmp, passwordTmp2 } = this;
      // this.alert = '';
      // if (passwordTmp !== passwordTmp2) {
      //   alert = 'Las contraseñas no coinciden, intenta de nuevo';
      //   return;
      // }
      // this.password = passwordTmp;
      const { data, error } = this.$supabase.auth.api.resetPasswordForEmail(this.email);
      console.log(data, error);
      this.submitted = true;
      this.showResetPassword = false;
    }
  },
  async mounted() {
    const profile = await this.$supabase.auth.user();
    this.profile = profile;
  }
};
</script>
