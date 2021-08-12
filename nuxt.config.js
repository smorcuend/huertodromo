export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-supabase',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'simplemde/dist/simplemde.min.css',
  ],

  plugins: [
    { src: '~plugins/client.js' },
    { src: '~plugins/simplemde.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL || 'http://localhost:3000',
    SUPABASE_KEY: process.env.SUPABASE_KEY || ''
  },
  // publicRuntimeConfig: {
  //   SUPABASE_URL: process.env.SUPABASE_URL || 'http://localhost:3000',
  //   SUPABASE_KEY: process.env.SUPABASE_KEY || ''
  // },
  // privateRuntimeConfig: {
  //   SUPABASE_URL: process.env.SUPABASE_URL || 'http://localhost:3000',
  //   SUPABASE_KEY: process.env.SUPABASE_KEY || ''
  // }
}
