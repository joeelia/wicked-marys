<template>
  <!--
    My attempt at the hero component
  -->
  <div class="bg-gray-300">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 block w-full h-full">
        <div class="relative h-full">
          <svg
            class="absolute transform right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)"
            />
          </svg>
          <svg
            class="absolute transform left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-10">
        <!-- where desktop nav was -->
        <!--
          Mobile menu, show/hide based on menu open state.
        -->
        <div
          class="max-w-screen-xl px-4 mx-auto mt-10 sm:px-6 md:mt-16 lg:mt-20"
        >
          <div class="text-center font-heron-sans">
            <h2
              class="text-4xl font-medium leading-10 tracking-tight text-white uppercase sm:text-5xl sm:leading-none md:text-7xl"
            >
              Always fresh.
              <br />
              <span>always hot. for you.</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="relative flex justify-center">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
          <img
            class="relative"
            src="~/static/food/pizzabig-even.png"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroKen',
}
</script>
