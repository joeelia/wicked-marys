<template>
  <div v-editable="blok" class="w-40 p-5">
    <div class="text-xs font-medium text-white uppercase text-white-500">
      {{ blok.title }}
    </div>
      <component
        :key="blok._uid"
        v-for="blok in blok.links"
        :blok="blok"
        :is="blok.component | dashify"
      />
  </div>
</template>

<script>
export default {
  name: 'BlokFooterCols',
  props: ['blok']
}
</script>
