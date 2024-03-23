<template>
  <div id="albums">
    <div class="py-4 py-lg-6">
          <h2 class="text-center mt-0">Albums</h2>
          <hr class="divider" />
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :autoplay="true"
      :spaceBetween="10"
      :navigation="false"
      :thumbs="{ swiper: tSwip.value }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        ><div class="slideImg">
          <div class="container h-50">
            <div
              class="row h-50 align-items-start justify-content-start text-start"
            >
              <div class="col-lg-8 align-self-start">
                <h1 class="text-white title">
                  Aklowa Djormo
                  <hr class="divider-2" />
                </h1>
              </div>
              <p class="text-white-75 mb-3"> Cross Tradition</p>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-3">
                  Get the tracks on
                </p>
                <div class="col-md-8 col-lg-8 ml-lg-0 text-start text-md-start">
                  <!-- Facebook -->
                  <a class="btn btn-outline-light btn-floating m-1" role="button">
                    <img class="serv_img_2 text-primary" src="../assets/img/proper/amazon.svg"></img></a>
                  <!-- Twitter -->
                  <a class="btn btn-outline-light btn-floating m-1" role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/boomplay.svg"></img></a>
                  <!-- Google -->
                  <a class="btn btn-outline-light btn-floating m-1" role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/qobuz.svg"></img></a>
                  <!-- Instagram -->
                  <a class="btn btn-outline-light btn-floating m-1" role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/youtube.svg"></img></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><div class="slideImg2">
          <div class="container h-50">
            <div
              class="row h-50 align-items-start justify-content-start text-start"
            >
              <div class="col-lg-8 align-self-start">
                <h1 class="text-white title">
                  Aklowa Drum Band Djorwaa Dancers
                  <hr class="divider-2" />
                </h1>
              </div>
              <p class="text-white-75 mb-3"> Hot African Drum Beats</p>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-3">
                  Get the tracks on:
                </p>
                <div class="col-md-8 col-lg-8 ml-lg-0 text-start text-md-start">
                  <!-- Facebook -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://www.amazon.com/African-Djorwaa-Dancers-Aklowa-Ghana/dp/B07N6MNCDD" role="button">
                    <img class="serv_img_2 text-primary" src="../assets/img/proper/amazon.svg"></img></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab" role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/qobuz.svg"></img></a>
                </div>
              </div>
            </div>
          </div>
        </div></swiper-slide>
        <swiper-slide
        >
        <div class="slideImg3">
          <div class="container h-50">
            <div
              class="row h-50 align-items-start justify-content-start text-start"
            >
              <div class="col-lg-8 align-self-start">
                <h1 class="text-white title">
                  Aklowa Djormo 
                  <br>Cross Tradition
                  <hr class="divider-2" />
                </h1>
                <p class="text-white-75 mb-3">Near and Far</p>
              </div>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-3">
                  Get the tracks on
                </p>
                <div class="col-md-8 col-lg-8 ml-lg-0 text-start text-md-start">
                  <!-- Facebook -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" role="button">
                    <img class="serv_img_2 text-primary" src="../assets/img/proper/amazon.svg"></img></a>
                  <!-- Twitter -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://www.boomplay.com/artists/2882588"role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/boomplay.svg"></img></a>
                  <!-- Google -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab" role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/qobuz.svg"></img></a>
                  <!-- Instagram -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ" role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/youtube.svg"></img></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </swiper-slide
      ><swiper-slide
        >
      <div class="slideImg4">
          <div class="container h-50">
            <div
              class="row h-50 align-items-start justify-content-start text-start"
            >
              <div class="col-lg-8 align-self-start">
                <h1 class="text-white title">
                  Aklowa Drum Band
                  <br>Djormo Cross Tradition
                  <hr class="divider-2" />
                </h1>
              </div>
              <p>Kpo keke</p>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-3">
                  Get the tracks on
                </p>
                <div class="col-md-8 col-lg-8 ml-lg-0 text-start text-md-start">
                  <!-- Facebook -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" role="button">
                    <img class="serv_img_2 text-primary" src="../assets/img/proper/amazon.svg"></img></a>
                  <!-- Twitter -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://www.boomplay.com/artists/2882588"role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/boomplay.svg"></img></a>
                  <!-- Google -->
                  <a class="btn btn-outline-light btn-floating m-1" role="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/qobuz.svg"></img></a>
                  <!-- Instagram -->
                  <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ"ole="button"
                    ><img class="serv_img_2 text-primary" src="../assets/img/proper/youtube.svg"></img></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="onSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class=""
    >
      <swiper-slide
        ><img
          src="../assets/img/proper/ak2.webp" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/proper/ak1.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/proper/ak3.webp" /></swiper-slide
      ><swiper-slide
        ><img src="../assets/img/proper/ak4.webp"
      /></swiper-slide>
    </swiper>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const tSwip = ref(0);
    const onSwiper = (swiper) => {
      tSwip.value = swiper;
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      tSwip,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Autoplay, FreeMode, Thumbs],
    };
  },
};
</script>
