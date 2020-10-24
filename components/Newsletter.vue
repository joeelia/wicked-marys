<template>
  <div class="flex items-center justify-center w-full py-12 bg-red-600">
    <!-- <h3 class="text-xl font-bold text-white uppercase">sign up to receive constant deals</h3> -->
    <div class="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:py-16 lg:px-8">
      <h2
        id="newsletter-headline"
        class="text-3xl font-medium tracking-tighter uppercase leading-9 font-heron-sans sm:text-4xl text-red-50 sm:leading-10 lg:text-5xl"
      >
        sign up to receive constant deals
      </h2>
      <form
        class="justify-center mt-8 sm:flex"
        aria-labelledby="newsletter-headline"
      >
        <div class="relative px-4 py-4 mt-1 border border-red-400">
          <input
            class="block w-full pr-10 placeholder-red-100 bg-transparent text-red-50 focus:outline-none sm:pr-40 sm:leading-5"
            placeholder="Email"
          />
          <button
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none focus:outline-none"
          >
            <svg
              class="w-5 h-5 text-red-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsletter',
}
</script>
