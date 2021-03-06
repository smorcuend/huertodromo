export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Huertodromo - Toledo',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Huertodromo, huerto, comunitario, comunidad, agroecología, Toledo, ecología'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['simplemde/dist/simplemde.min.css'],

  plugins: [
    { src: '~plugins/client.js' },
    { src: '~plugins/simplemde.js', mode: 'client' },
    { src: '~plugins/vuecal.js' },
    { src: '~plugins/Dayjs.ts' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/typescript-build'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Simple usage
    'nuxt-buefy',
    'nuxt-leaflet'

    // Or you can customize
    // ['nuxt-buefy', { css: false, materialDesignIcons: false }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-custom-properties': {
          preserve: false
        }
        // 'postcss-nested': false,
        // 'postcss-responsive-type': false,
        // 'postcss-hexrgba': false
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL || 'http://localhost:3000',
    SUPABASE_KEY: process.env.SUPABASE_KEY || ''
  }
};
