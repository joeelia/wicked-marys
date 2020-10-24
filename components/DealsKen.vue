<template>
  <section class="w-full py-10 bg-white">
    <div class="px-0 pt-12 mx-auto max-w-screen-xl space-y-6 md:px-4">
      <div class="block px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="text-center">
          <p
            class="mt-1 text-3xl font-medium text-gray-900 uppercase leading-10 font-heron-sans sm:text-4xl sm:leading-none sm:tracking-tighter lg:text-5xl"
          >
            Meals For A Deal
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center h-full">
        <div class="flex-1 max-w-5xl md:p-10">
          <!-- was ul -->
          <div class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2">
            <LargeDeal />
            <SmallDeal />
            <SmallDeal :is-first="false" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DealsKen',
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
