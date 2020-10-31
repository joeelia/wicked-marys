<template>
  <div
    v-editable="blok"
    v-html="$md.render(blok.body)"
    class="p-4 prose bg-white lg:prose-xl"
  />
</template>

<script>
export default {
  name: 'BlokMarkdown',
  props: ['blok'],
}
</script>
