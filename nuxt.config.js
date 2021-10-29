export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  //  Client side rendering means rendering the content in the browser using JavaScript. Instead of getting all of the content from the HTML we just get a basic HTML document with a JavaScript file that will then render the rest of the site using the browser. 
  ssr: true,

  // Change the value of this property at runtime will override the configuration of an app that has already been built.
  router: {
    base: '/nuxt_app_1/'
  },

  baseUrl: 'https://teiga.it',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead ? this.$nuxtI18nHead({ addSeoAttributes: true }) : null;
    // console.log(i18nHead);
    return {
      title: 'Generic title of the website',
      htmlAttrs: { 
        ...i18nHead?.htmlAttrs || {}
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'First example of NUXT.JS website' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead?.meta || []
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead?.link || []
      ]  
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-particles.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
    '@nuxtjs/i18n'
  ],


  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        name: 'English',
        file: 'en.js'
      },
      {
        code: 'it',
        iso: 'it-IT',
        name: 'Italiano',
        file: 'it.js'
      }      
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'it',
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    vueI18n: {
      fallbackLocale: 'en',
    }
  },

  image: {
    dir: 'assets/images',
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          format: "webp",
          width: 300,
          height: 300,
        },
      },
    },
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
