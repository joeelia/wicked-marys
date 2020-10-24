<template>
  <section class="w-full py-10 bg-white">
    <div class="px-0 pt-10 mx-auto max-w-screen-xl space-y-10 md:px-4">
      <div class="block px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="text-center">
          <p
            class="mt-1 text-4xl font-extrabold text-gray-900 uppercase leading-10 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
          >
            Meals For A Deal
          </p>
        </div>
      </div>
      <div class="flex items-center h-full">
        <div class="flex-1 max-w-4xl p-0 mx-auto md:p-10">
          <ul class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2">
            <li class="bg-orange-300 row-span-2">
              <div class="h-88"></div>
            </li>
            <li class="bg-orange-300">
              <div class="h-88 md:h-48"></div>
            </li>
            <li class="bg-orange-300">
              <div class="h-88 md:h-48"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Deals',
}
</script>

<style scoped>
.text-fill-red-600 {
  -webkit-text-fill-color: #e02424;
}

.text-expose-red-600 {
  text-shadow: -1px 1px 0 #e31837, -2px 2px 0 #e31837, -3px 3px 0 #e31837,
    -4px 4px 0 #e31837, -5px 5px 0 #000, -6px 6px 0 #000;
}
</style>
