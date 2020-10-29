<template>
  <div v-editable="blok">
    <div class="flex items-center justify-between w-full md:hidden">
      <nuxt-link class="pl-4 -ml-4" to="/">
        <img src="~/assets/images/wicked-marys-logo.png" />
      </nuxt-link>
      <button
        id="686353761330209738"
        class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white truncate transition duration-150 ease-in-out bg-orange-600 border border-transparent hover:bg-orange-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-orange-700"
      >
        <span
          class="cursor-pointer"
          data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03"
          data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91"
          id="glfButton0"
        >
          Order Mary's
        </span>
      </button>
      <div class="flex items-center">
        <button
          @click="showMobileMenu = true"
          type="button"
          class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out bg-orange-600"
          id="main-menu"
          aria-label="Main menu"
          aria-haspopup="true"
        >
          <svg
            class="w-6 h-6 text-white stroke-current"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out transform"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in transform"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="showMobileMenu"
        class="absolute inset-x-0 top-0 z-50 transition origin-top-right transform md:hidden"
      >
        <div class="h-screen mx-auto bg-orange-600">
          <div
            class="absolute top-0 right-0 inline object-none w-8 h-8 mt-2 mr-6"
          >
            <button
              @click="showMobileMenu = false"
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-label="Close menu"
            >
              <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="34.425"
                  height="4.17273"
                  rx="2.08637"
                  transform="matrix(0.677836 0.735213 -0.677836 0.735213 3.24609 0.860352)"
                  fill="white"
                />
                <rect
                  width="34.425"
                  height="4.17273"
                  rx="2.08637"
                  transform="matrix(0.677835 -0.735214 0.677835 0.735214 0.417969 26.1709)"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <center class="grid content-center grid-cols-1 pt-20 space-y-10">
            <a
              href="#"
              class="text-3xl font-medium text-white transition duration-150 ease-in-out hover:text-gray-900"
              >Menu</a
            >
            <a
              href="#"
              class="text-3xl font-medium text-white transition duration-150 ease-in-out hover:text-gray-900"
              >Catering</a
            >
            <a
              href="#"
              class="text-3xl font-medium text-white transition duration-150 ease-in-out hover:text-gray-900"
              >Find a Mary's</a
            >
            <a
              href="#"
              class="text-3xl font-medium text-white transition duration-150 ease-in-out hover:text-gray-900"
              >Contact</a
            >
          </center>
          <div class="bottom-0 abosulte">
            <center class="pt-10">
              <button id="686353761330209738" class="py-5">
                <span
                  class="cursor-pointer mx-auto uppercase px-6 py-5 border border-transparent text-sm leading-6 font-medium text-gray-700 hover:text-gray-600 bg-orange-50 hover:bg-orange-100 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-white transition ease-in-out duration-150"
                  data-glf-cuid="3516bd06-4b16-4167-a366-16f327720e03"
                  data-glf-ruid="da5cbba8-e8b2-4fd3-a14c-8085c95f1b91"
                  id="glfButton0"
                >
                  Order Online
                </span>
              </button>
            </center>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'BlokHeaderMobile',
  props: ['blok'],
  data() {
    return {
      showMobileMenu: false,
    }
  },
  watch: {
    showMobileMenu: function () {
      //prevent scroll on modal
      document.body.style.overflow = this.showMobileMenu ? 'hidden' : ''
      //prevent scroll on iOS
      const isSafari = navigator.userAgent.indexOf('Safari') !== -1
      const isIphone = navigator.userAgent.indexOf('iPhone') !== -1
      const isMobileIosSafari = isSafari && isIphone
      // modalOpen is a boolean assigned when modal is opened
      if (this.showMobileMenu && isMobileIosSafari) {
        document.ontouchmove = (e) => e.preventDefault()
      } else {
        document.ontouchmove = (e) => true
      }
    },
  },
}
</script>
