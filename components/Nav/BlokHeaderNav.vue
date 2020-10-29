<template>
  <nav v-editable="blok" class="px-2 py-6 mx-auto max-w-7xl sm:px-4 lg:px-8">
    <component
      :key="blok._uid"
      v-for="blok in blok.container"
      :blok="blok"
      :is="blok.component | dashify"
    />
  </nav>
</template>

<script>
export default {
  name: 'BlokHeaderNav',
  props: ['blok'],
}
</script>
