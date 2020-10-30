<template>
  <div v-editable="blok">
    <section class="w-full bg-orange-600">
      <div
        class="relative flex flex-wrap items-center justify-center w-full h-auto mx-auto max-w-7xl"
      >
        <h2
          class="text-4xl italic font-medium leading-loose tracking-wide text-center text-expose-red-600 md:text-5xl lg:text-6xl text-fill-white text-stroke-black font-heron-sans"
        >
          {{ blok.title }}
        </h2>
        <button
          @click="clickedOrder"
          id="686353761330209738"
          class="hidden lg:inline-block"
        >
          <span
            class="cursor-pointer align-middle ml-8 lg:inline-block uppercase px-6 py-2.5 border border-transparent text-sm leading-6 font-medium text-gray-700 hover:text-gray-600 bg-orange-50 hover:bg-orange-100 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-white transition ease-in-out duration-150"
            data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03"
            data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91"
            id="glfButton0"
          >
            {{ blok.button_title }}
          </span>
        </button>

        <!-- mobile button markup (appears below) -->
        <div class="flex items-center justify-center w-full mb-6 lg:hidden">
          <button @click="clickedOrder" id="686353761330209738" class="py-5">
            <span
              class="px-6 py-5 mx-auto text-sm font-medium leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent cursor-pointer hover:text-gray-600 bg-orange-50 hover:bg-orange-100 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-white"
              data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03"
              data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91"
              id="glfButton0"
            >
              {{ blok.button_title }}
            </span>
          </button>
        </div>
      </div>
    </section>
    <!-- end mobile button -->
  </div>
</template>

<script>
export default {
  name: 'OrderBanner',
  props: ['blok'],
  methods: {
    clickedOrder() {
      this.$gtm.push({ event: 'clickedOrder' })
    },
  },
}
</script>

<style scoped>
.text-fill-red-600 {
  -webkit-text-fill-color: #e02424;
}

.text-expose-red-600 {
  text-shadow: -1px 1px 0 #e31837, -2px 2px 0 #e31837, -3px 3px 0 #e31837,
    -4px 4px 0 #e31837, -5px 5px 0 #000, -6px 6px 0 #000;
}
</style>
