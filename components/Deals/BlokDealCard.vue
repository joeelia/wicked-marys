<template>
  <li
    v-editable="blok"
    class="bg-orange-300 bg-cover md:bg-fill"
    :style="
      `background-repeat: no-repeat; background-image: url(${blok.image.filename})`"
    :class="{ 'row-span-2': blok.isLarge }"
  >
    <div class="relative h-88" :class="{ 'md:h-48': !blok.isLarge }">
      <div
        class="absolute bottom-0 left-0 z-20 flex flex-col p-6 font-heron-sans"
      >
        <span
          class="flex items-start text-6xl font-bold leading-none tracking-tight text-gray-50"
        >
          <span class="mt-2 mr-2 text-4xl"> $ </span>
          <span> {{ blok.dollars }} </span>
          <span class="self-center mt-5 mr-2 text-4xl tracking-tight">
            .{{ blok.cents }}
          </span>
        </span>
        <p class="text-3xl leading-none tracking-tight uppercase text-gray-50">
          {{ blok.title }}
        </p>
        <span class="inline-flex mt-2 shadow-sm">
          <a v-if="blok.button_link.url !== null" target="_blank" :href="blok.button_link.url">
            <button
              type="button"
              class="inline-flex items-center px-6 py-2 text-sm font-medium leading-5 text-white uppercase transition duration-150 ease-in-out bg-orange-600 border border-transparent hover:bg-orange-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-orange-700"
            >
              {{ blok.button_title  }}
            </button>
          </a>
          <n-link v-else :to="blok.button_link.cached_url" prefetch>
            <button
              type="button"
              class="inline-flex items-center px-6 py-2 text-sm font-medium leading-5 text-white uppercase transition duration-150 ease-in-out bg-orange-600 border border-transparent hover:bg-orange-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-orange-700"
            >
              {{ blok.button_title  }}
            </button>
          </n-link>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'BlokDealCard',
  props: ['blok']
}
</script>
