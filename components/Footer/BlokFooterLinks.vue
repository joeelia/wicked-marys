<template>
  <div v-editable="blok">
    <a
      class="block my-3 text-white"
      v-if="blok.url !== null"
      :href="blok.link.cached_url"
    >
      {{ blok.title }}
    </a>
    <n-link
      v-else
      :id="id"
      :to="blok.link.cached_url"
      class="block my-3 text-white"
      prefetch
    >
      {{ blok }}
    </n-link>
  </div>
</template>

<script>
export default {
  name: 'BlokFooterLinks',
  props: ['blok'],
}
</script>
