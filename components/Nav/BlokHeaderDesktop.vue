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
    <nuxt-link to="/">
      <img src="~/assets/images/wicked-marys-logo.png" />
    </nuxt-link>
  </div>
  <ul class="items-center justify-end hidden w-1/3 md:flex">
    <component
        :key="blok._uid"
        v-for="blok in blok.links_right"
        :blok="blok"
        :is="blok.component | dashify"
      />
      <li class="inline-flex rounded-md shadow-sm">
        <div id="686353761330209738" align="center" style="width: 100%; overflow-y: hidden;" class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-orange-600 border border-transparent hover:bg-orange-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-orange-700">
            <span class="cursor-pointer" data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03" data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91" id="glfButton0">
              Order Mary's
            </span> 
        </div>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'BlokHeaderDesktop',
  props: ['blok']
}
</script>
