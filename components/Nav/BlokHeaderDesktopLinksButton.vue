<template>
<li class="inline-flex rounded-md shadow-sm">
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700"
    >
      <a v-if="blok.link.url !== null" :href="blok.link.url">
        {{ blok.title }}
      </a>
      <n-link v-else :to="blok.story.link.url" prefetch>
        {{ blok.title }}
      </n-link>
  </button>
</li>
</template>

<script>
export default {
  name: 'BlokHeaderDesktopLinksButton',
  props: ['blok']
}
</script>