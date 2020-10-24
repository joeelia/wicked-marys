<template>
  <swiper-slide>
    <center v-editable="blok">
      <img
        class="w-32 h-32 md:h-48 md:w-48"
        :src="blok.image.filename"
        :alt="blok.image.name"
      />
      <p class="pt-6 text-xs font-medium text-white truncate md:text-xl">
        {{ blok.title }}
      </p>
      <NuxtButton
        :data="blok.button_link"
        :title="blok.button_title"
        buttonStyle="px-4 py-2 mt-2 font-semibold text-white uppercase truncate bg-transparent border border-white hover:bg-white hover:text-black hover:border-transparent"
      />
    </center>
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'BlokFoodCarouselCard',
  props: ['blok'],
  components: {
    SwiperSlide,
  },
}
</script>
