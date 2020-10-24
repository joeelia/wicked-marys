<template>
  <div class="bg-gray-200">
     <component
        :key="blok._uid"
        v-for="blok in header.content.body"
        :blok="blok"
        :is="blok.component | dashify"
      />
    <main>
      <Nuxt />
    </main>
    <component
        :key="blok._uid"
        v-for="blok in footer.content.body"
        :blok="blok"
        :is="blok.component | dashify"
      />
  </div>
</template>
<script>
export default {
  computed: {
      header() {
        return this.$store.state.header.story
      },
       footer() {
        return this.$store.state.footer.story
      }
 },
 head: {
    script: [
      { src: 'https://www.fbgcdn.com/embedder/js/ewm2.js', body:true}
    ]
  }
}
</script>