<template>
<div v-editable="blok" class="flex items-center justify-center h-auto lg:justify-between">
  <ul class="hidden w-1/3 md:flex">
    <component
      :key="blok._uid"
      v-for="blok in blok.links_left"
      :blok="blok"
      :is="blok.component | dashify"
    />
  </ul>
  <div class="items-center justify-center hidden w-1/3 md:flex">
    <nuxt-link to="/" v-html="blok.logo"></nuxt-link>
  </div>
  <ul class="items-center justify-end hidden w-1/3 md:flex">
    <component
        :key="blok._uid"
        v-for="blok in blok.links_right"
        :blok="blok"
        :is="blok.component | dashify"
      />
  </ul>
</div>
</template>

<script>
export default {
  name: 'BlokHeaderDesktop',
  props: ['blok']
}
</script>
