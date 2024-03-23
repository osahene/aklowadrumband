// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/aklowadrumband/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
        head: {
          meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
    script: [
               
            ],
            link: [
            // Fonts
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' },
                { rel: 'stylesheet', type:'text/css', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' },

                //StyleSheets
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css' },
                
              //Icons
                { rel: 'icon', type: 'image/png', href: "./assets/img/proper/aklowalogo.png" }
            ]
        }
  },
  build: {
  transpile: ['@fortawesome/vue-fontawesome']
},
  modules: [
    'usebootstrap',
    '@hypernym/nuxt-gsap',
    'nuxt-swiper',
    // 'nuxt-icon',
    // 'usebootstrap',
  ],
  // usebootstrap: {
  //   bootstrap: {
  //     prefix: ``
  //   },
  //   html: {
  //     prefix: `B`
  //   },
  // },
  css: [
    '~/assets/css/alb.css',
    '~/assets/css/khan.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    // 'bootstrap/dist/css/bootstrap.min.css',
    
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,    },
  ],
})
