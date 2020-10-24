<template>
  <button :id="id" :class="buttonStyle">
    <a v-if="data.url !== null" :href="data.url">
      {{ title }}
    </a>
    <n-link v-else :to="data.story.url" prefetch>
      {{ title }}
    </n-link>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['data', 'id', 'title', 'buttonStyle'],
}
</script>
