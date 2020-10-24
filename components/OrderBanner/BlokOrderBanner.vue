<template>
  <div v-editable="blok">
    <section class="w-full bg-red-600">
      <div
        class="relative flex flex-wrap items-center justify-center w-full h-auto mx-auto max-w-7xl"
      >
        <div class="relative w-full">
          <div class="grid w-full h-auto grid-cols-6 max-w-7xl">
            <span
              class="absolute col-span-1 left-2 top-1/3 sm:top-0 sm:left-0 sm:relative sm:flex sm:items-center sm:justify-end"
            >
              <svg
                viewBox="0 0 31 29"
                class="h-7 w-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7392 27.9805C23.6392 27.9805 23.5392 27.9805 23.4392 27.8805L15.5392 23.0805L7.63923 27.8805C7.43923 27.9805 7.13923 27.9805 6.93923 27.8805C6.73923 27.7805 6.63923 27.4805 6.63923 27.2805L8.53923 17.9805L1.23923 11.7805C1.03923 11.5805 0.93923 11.3805 1.03923 11.0805C1.13923 10.8805 1.33923 10.6805 1.63923 10.6805L11.0392 9.68051L14.9392 1.38051C15.0392 1.08051 15.4392 0.880506 15.7392 1.08051C15.9392 1.18051 16.0392 1.28051 16.0392 1.38051L19.9392 9.68051L29.3392 10.6805C29.6392 10.6805 29.8392 10.8805 29.9392 11.0805C30.0392 11.2805 29.9392 11.5805 29.7392 11.7805L22.5392 17.9805L24.3392 27.2805C24.3392 27.4805 24.2392 27.7805 24.0392 27.8805C24.0392 27.9805 23.8392 27.9805 23.7392 27.9805Z"
                  fill="white"
                  stroke="#303C42"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span
              class="flex items-center justify-center col-span-6 sm:col-span-4"
            >
              <h2
                class="text-4xl italic font-medium leading-loose tracking-wide text-center text-expose-red-600 md:text-5xl lg:text-6xl text-fill-white text-stroke-black font-heron-sans"
              >
                {{ blok.title }}
              </h2>
                <button id="686353761330209738" class="hidden lg:inline-block" >
                  <span class="cursor-pointer align-middle ml-8 lg:inline-block uppercase px-6 py-2.5 border border-transparent text-sm leading-6 font-medium text-gray-700 hover:text-gray-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-white transition ease-in-out duration-150" data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03" data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91" id="glfButton0">
                    {{ blok.button_title }}
                  </span> 
                </button>
            </span>
            <span
              class="absolute col-span-1 right-2 top-1/3 sm:top-0 sm:right-0 sm:relative sm:flex sm:items-center"
            >
              <svg
                viewBox="0 0 31 29"
                class="h-7 w-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7392 27.9805C23.6392 27.9805 23.5392 27.9805 23.4392 27.8805L15.5392 23.0805L7.63923 27.8805C7.43923 27.9805 7.13923 27.9805 6.93923 27.8805C6.73923 27.7805 6.63923 27.4805 6.63923 27.2805L8.53923 17.9805L1.23923 11.7805C1.03923 11.5805 0.93923 11.3805 1.03923 11.0805C1.13923 10.8805 1.33923 10.6805 1.63923 10.6805L11.0392 9.68051L14.9392 1.38051C15.0392 1.08051 15.4392 0.880506 15.7392 1.08051C15.9392 1.18051 16.0392 1.28051 16.0392 1.38051L19.9392 9.68051L29.3392 10.6805C29.6392 10.6805 29.8392 10.8805 29.9392 11.0805C30.0392 11.2805 29.9392 11.5805 29.7392 11.7805L22.5392 17.9805L24.3392 27.2805C24.3392 27.4805 24.2392 27.7805 24.0392 27.8805C24.0392 27.9805 23.8392 27.9805 23.7392 27.9805Z"
                  fill="white"
                  stroke="#303C42"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <!-- mobile button markup (appears below) -->
        <div class="flex items-center justify-center w-full mb-6 lg:hidden">
          <button id="686353761330209738" class="py-5">
            <span class="cursor-pointer mx-auto uppercase px-6 py-5 border border-transparent text-sm leading-6 font-medium text-gray-700 hover:text-gray-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-white transition ease-in-out duration-150" data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03" data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91" id="glfButton0">
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
  props: ['blok']
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
