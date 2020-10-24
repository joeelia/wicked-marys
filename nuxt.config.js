export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sarokis - Pizza and Chicken - Michigan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~layouts/global.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/gmap.js',
    '@/plugins/components.js',
    '@/plugins/filters',
  ],

  // TailwindCSS config
  tailwindcss: {
    configPath: './tailwind.config.js',
    cssPath: './assets/css/tailwind.css',
    exposeConfig: true,
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@teamnovu/nuxt-breaky',
    [
      'storyblok-nuxt-routes',
      {
        accessToken: 'NEHvar0usQ6j6jLgWojJtwtt',
        defaultLanguage: '',
        contentTypes: 'page,location',
        resolveLinks: 'url',
        resolve_relations: 'page,saroki-stores.location,header,footer',
      },
    ],
  ],
  generate: {
    fallback: true,
    interval: 100,
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'mTZgj8b2r04hwWw3MS4lcwtt',
        cacheProvider: 'memory',
      },
    ]
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^vue2-google-maps.js($|\/)/],
  },
  router: {
    base: '/'
  }
}
