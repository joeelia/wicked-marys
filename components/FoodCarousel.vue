<template>
  <section class="w-full pt-10 pb-16 bg-red-600">
    <div class="max-w-screen-xl pt-10 mx-auto space-y-10 font-heron-sans">
      <!-- Todo: simplify margin bottom values and test across screen sizes -->
      <div
        class="block max-w-screen-xl px-4 mx-auto mb-4 sm:mb-6 lg:mb-20 sm:px-6 lg:px-8"
      >
        <div class="text-center">
          <p
            class="mt-1 text-4xl font-medium leading-10 text-white uppercase sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
          >
            Order Your <br class="hidden sm:block" />
            Saroki's Now
          </p>
        </div>
      </div>
      <swiper ref="mySwiper" class="pl-4 swiper" :options="swiperOption">
        <swiper-slide v-for="slide in slides" :key="slide.title">
          <center>
            <img
              class="w-32 h-32 md:h-48 md:w-48"
              :src="slide.img"
              :alt="slide.title"
            />
            <p class="pt-6 text-xs font-medium text-white truncate md:text-xl">
              {{ slide.title }}
            </p>
            <button
              class="px-4 py-2 mt-2 font-semibold text-white uppercase truncate bg-transparent border border-white hover:bg-white hover:text-black hover:border-transparent"
            >
              Order Now
            </button>
          </center>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'FoodCarousel',
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        // Some Swiper option/callback...
      },
      slides: [
        {
          title: 'Fried Chicken',
          img: require('~/assets/images/CrispyChicken.png'),
        },
        {
          title: 'Pepperoni Sticks',
          img: require('~/assets/images/PizzaHero.png'),
        },
        {
          title: 'Calzone',
          img: require('~/assets/images/CrispyChicken.png'),
        },
        {
          title: 'Pasta',
          img: require('~/assets/images/PizzaHero.png'),
        },
        {
          title: 'Supreme Pizza',
          img: require('~/assets/images/CrispyChicken.png'),
        },
        {
          title: 'House Pizza',
          img: require('~/assets/images/PizzaHero.png'),
        },
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          380: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
    }
  },
}
</script>

<style>
.text-fill-red-600 {
  -webkit-text-fill-color: #e02424;
}

.text-expose-red-600 {
  text-shadow: -1px 1px 0 #e31837, -2px 2px 0 #e31837, -3px 3px 0 #e31837,
    -4px 4px 0 #e31837, -5px 5px 0 #000, -6px 6px 0 #000;
}

:root {
  --swiper-theme-color: #ffffff;
}

.swiper-pagination {
  position: relative;
  margin-top: 2rem;
}
</style>
