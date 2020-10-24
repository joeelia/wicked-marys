<template>
  <section v-editable="blok" class="w-full pt-10 pb-24 bg-orange-600">
    <div class="max-w-screen-xl pt-10 mx-auto space-y-10 font-heron-sans">
      <!-- Todo: simplify margin bottom values and test across screen sizes -->
      <div
        class="block max-w-screen-xl px-4 mx-auto mb-4 sm:mb-6 lg:mb-20 sm:px-6 lg:px-8"
      >
        <div class="text-center">
          <p
            class="mt-1 text-4xl font-medium leading-10 text-white uppercase sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
          >
            {{ blok.title }}
          </p>
        </div>
      </div>
      <div class="something">
        <swiper ref="mySwiper" class="pl-4 swiper" :options="swiperOption">
          <component
            :key="blok._uid"
            v-for="blok in blok.container"
            :blok="blok"
            :is="blok.component | dashify"
          />
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'BlokFoodCarousel',
  props: ['blok'],
  components: {
    Swiper,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  data() {
    return {
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
:root {
  --swiper-theme-color: #ffffff;
}

.swiper-pagination {
  position: relative;
  margin-top: 2rem;
}
</style>
