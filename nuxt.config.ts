import { Static } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  target: Static,
  app: {
    baseURL: '/aklowadrumband/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
        head: {
          meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
    script: [
                {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
        crossorigin: 'anonymous', type: 'script'},
                // { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.6.0/umd/popper.min.js', integrity: 'sha512-BmM0/BQlqh02wuK5Gz9yrbe7VyIVwOzD1o40yi1IsTjriX/NGF37NyXHfmFzIlMmoSIBXgqDiG1VNU6kB5dBbA==', crossorigin: 'anonymous', type: 'text/javascript' },
                { src: 'https://code.jquery.com/jquery-3.4.1.min.js', integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=', crossorigin: 'anonymous', type: 'text/javascript' },
            ],
            link: [
            // Fonts
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' },
                { rel: 'stylesheet', type:'text/css', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' },

              //StyleSheets
                { rel: 'stylesheet', media: 'screen', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css' },
              // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css' },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC', crossorigin: 'anonymous' },
                
              //Icons
                { rel: 'icon', type: 'image/png', href: "./assets/img/proper/aklowalogo.png" }
            ]
        }
  },
  build: {
  transpile: ['@fortawesome/vue-fontawesome'],
    chunkSizeWarningLimit: 1600,
  cssMinify: {
      preset: 'default',
    },
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
