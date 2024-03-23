// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
    script: [
                // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' },
                // { src: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js' },
      // { src: 'https://cdn.startbootstrap.com/sb-forms-latest.js' },
                // { src: 'aklowa_web/assets/js/scripts.js', tagPosition: 'bodyClose' },
                // { src: 'https://code.jquery.com/jquery-3.6.4.min.js', integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=', crossorigin: 'anonymous' },
            ],
            link: [
            // Fonts
                // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' },
                { rel: 'stylesheet', type:'text/css', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' },


                //StyleSheets
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css' },
                // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' },
                // { rel: 'stylesheet', media: 'screen', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css' },
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
    // '~/assets/css/style.css',
    '~/assets/css/alb.css',
    '~/assets/css/khan.css',
    // 'bootstrap/scss/bootstrap.scss',
    // '~/assets/css/foot.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    // 'bootstrap/dist/css/bootstrap.min.css',
    
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,    },
  ],
})
