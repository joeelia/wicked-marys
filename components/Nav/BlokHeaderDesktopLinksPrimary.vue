<template>
  <li class="mr-8">
    <a class="text-gray-600 truncate hover:text-gray-800" :href="linkValue">
      {{ blok.title }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'BlokHeaderDesktopLinksPrimary',
  props: ['blok'],
  computed: {
    linkValue: function () {
      if (this.blok.link.cached_url == 'home') {
        return ''
      } else {
        return this.blok.link.cached_url
      }
    },
  },
}
</script>
