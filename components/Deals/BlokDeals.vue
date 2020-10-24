<template>
  <section v-editable="blok" class="w-full py-10 bg-white">
    <div class="px-0 pt-10 mx-auto max-w-screen-xl space-y-10 md:px-4">
      <div class="block px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="text-center">
          <p
            class="mt-1 text-4xl font-extrabold text-gray-900 uppercase leading-10 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
          >
            {{ blok.title }}
          </p>
        </div>
      </div>
      <div class="flex items-center h-full">
        <div class="flex-1 max-w-4xl p-0 mx-auto md:p-10">
          <ul class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2">
            <component
              :key="blok._uid"
              v-for="blok in blok.container"
              :blok="blok"
              :is="blok.component | dashify"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlokDeals',
  props: ['blok'],
}
</script>
