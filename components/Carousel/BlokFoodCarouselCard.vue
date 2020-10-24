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
      <div id="686353761330209738">
        <span class="cursor-pointer inline-block px-4 py-2 mt-2 font-semibold text-white uppercase truncate bg-transparent border border-white hover:bg-white hover:text-black hover:border-transparent" data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03" data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91" id="glfButton0">
          {{ blok.button_title }}
        </span> 
      </div>
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
