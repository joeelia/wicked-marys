<template>
  <span
    :style="
      'background-image: url(' + require(`~/static/featured/large.jpg`) + ')'
    "
    class="relative flex flex-col justify-end row-span-2 bg-center bg-cover shadow-xl"
  >
    <div class="w-full h-full" />
    <DealLabel />
  </span>
</template>

<script>
export default {
  name: 'LargeDeal',
}
</script>
