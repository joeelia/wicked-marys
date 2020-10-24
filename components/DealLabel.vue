<template>
  <div class="relative z-20 flex flex-col p-6 font-heron-sans">
    <span
      class="flex items-start text-6xl font-bold leading-none tracking-tight text-gray-50"
    >
      <span class="mt-2 mr-2 text-4xl"> $ </span>
      <span> {{ price }} </span>
      <span class="self-center mt-5 mr-2 text-4xl tracking-tight"> .99 </span>
    </span>
    <p
      v-if="small"
      class="w-3/4 text-3xl leading-none tracking-tight uppercase lg:w-1/2 text-gray-50"
    >
      {{ subtitle }}
    </p>
    <p
      v-else
      class="w-3/4 text-3xl leading-none tracking-tight uppercase lg:w-full text-gray-50"
    >
      {{ subtitle }}
    </p>
    <span class="inline-flex mt-2 shadow-sm">
      <button
        type="button"
        class="inline-flex items-center px-6 py-2 text-sm font-medium leading-5 text-white uppercase transition duration-150 ease-in-out bg-orange-600 border border-transparent hover:bg-orange-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-orange-700"
      >
        Order now
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DealLabel',
  props: {
    price: {
      type: String,
      default: '19',
    },
    small: {
      type: Boolean,
      default: false,
    },
    subtitle: {
      type: String,
      default: 'The perfect combo deal',
    },
  },
}
</script>
