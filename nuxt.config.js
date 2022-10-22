/*

<meta name="twitter:card" content="summary_large_image">

<!--  Non-Essential, But Recommended -->

<meta name="twitter:image:alt" content="Alt text for image">
*/
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chez jeanjean - Bistrot de saison',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Jean Jean, c\'est bistrot moderne et à l\'ambiance chaleureuse. \n' +
          'Avec un menu rythmé par les saisons, les plats sont conçus sous vos yeux à partir de produits bruts.'
      },
      { name: 'og:title', content: 'JeanJean, bistrot moderne au coeur du quartier garibaldi' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: '/bg-jeanjean.webp' },
      {
        name: 'og:description',
        content: 'Jean Jean, c\'est bistrot moderne et à l\'ambiance chaleureuse. \n' +
          'Avec un menu rythmé par les saisons, les plats sont conçus sous vos yeux à partir de produits bruts.'
      },
      { name: 'og:site_name', content: 'JeanJean' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
