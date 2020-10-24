<template>
  <div v-editable="blok" class="bg-gray-800">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
      <div class="flex flex-wrap content-center text-center md:flex-no-wrap ">
        <div class="flex justify-center m-auto">
           <nuxt-link to="/" v-html="blok.logo"></nuxt-link>
        </div>
        <div class="flex flex-wrap justify-center max-w-6xl m-auto text-gray-800">
          <component
            :key="blok._uid"
            v-for="blok in blok.container"
            :blok="blok"
            :is="blok.component | dashify"
          />
        </div>
      </div>
      <div class="pt-8 mt-12 border-t border-gray-700">
        <p class="text-base leading-6 text-center text-gray-400 md:text-right">
          &copy; 2020 Wicked Mary's Chicken. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokDarkFooter',
  props: ['blok']
}
</script>
