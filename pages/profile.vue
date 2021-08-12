<template>
  <main class="m-auto py-20" style="width: 700px">
    <div v-if="!profile && !submitted && !invitedUser" class="flex flex-col">
      <h2 class="text-2xl">Iniciar sesión</h2>
      <input
        v-model="email"
        placeholder="Email"
        type="email"
        class="border py-2 px-4 rounded mt-4"
      />
      <input
        v-model="password"
        placeholder="Contraseña"
        type="password"
        class="border py-2 px-4 rounded mt-4"
      />
      <button @click="signIn" class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold">
        Acceder
      </button>
      <button
        @click="invitedUser = true"
        class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold"
      >
        Eres un usuario invitado? Pulsa aquí
      </button>
    </div>
    <div v-if="!profile && !submitted && invitedUser" class="flex flex-col">
      <h2 class="text-2xl">Escribe el email con el que te han invitado</h2>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border py-2 px-4 rounded mt-4"
      />
      <button @click="signIn" class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold">
        Acceder
      </button>
      <button
        @click="invitedUser = false"
        class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold"
      >
        Volver atrás
      </button>
    </div>
    <div v-if="profile && submitted && invitedUser" class="flex flex-col">
      <h2 class="text-2xl">Genera una nueva contraseña</h2>
      <input
        v-model="passwordTmp"
        placeholder="Nueva contraseña"
        type="password"
        class="border py-2 px-4 rounded mt-4"
      />
      <input
        v-model="passwordTmp2"
        placeholder="Repetir nueva contraseña"
        type="password"
        class="border py-2 px-4 rounded mt-4"
      />
      <button
        @click="resetPassword"
        class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold"
      >
        Envíar
      </button>
      <button
        @click="invitedUser = false"
        class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold"
      >
        Volver atrás
      </button>
      <p>
        {{ alert }}
      </p>
    </div>
    <div v-if="profile">
      <h2 class="text-xl">Hola, {{ profile.email }}</h2>
      <p class="text-gray-400 my-3">User ID: {{ profile.id }}</p>
      <button @click="signOut" class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold">
        Salir
      </button>
    </div>
    <div v-if="submitted">
      <h1 class="text-xl text-center">Revisa tu correo para iniciar sesión :)</h1>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    profile: null,
    submitted: false,
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
    async resetPassword() {
      const { passwordTmp, passwordTmp2 } = this;
      this.alert = '';
      if (passwordTmp !== passwordTmp2) {
        alert = 'Las contraseñas no coinciden, intenta de nuevo';
        return;
      }
      this.password = passwordTmp;
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password
      });
      this.submitted = true;
      this.invitedUser = false;
    }
  },
  async mounted() {
    const profile = await this.$supabase.auth.user();
    this.profile = profile;
  }
};
</script>
