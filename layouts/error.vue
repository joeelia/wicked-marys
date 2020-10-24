<template>
<div>
  <div class="flex flex-wrap content-center justify-center w-screen h-screen bg-orange-600">
    <p class="font-sans text-white error-text">Opps this page doesn't exist!</p>
      </div>
    <div class="absolute bottom-0 w-screen mb-6 font-sans text-xl text-center text-white">
    <span class="opacity-50">Take me back to</span>
    <a class="border-b" href="/" prefetch>Home</a>
  </div>
</div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blank' // you can set a custom layout for the error page
  }
</script>