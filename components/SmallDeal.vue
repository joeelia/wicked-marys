<template>
  <div>
    <span
      :style="'background-image: url(' + correctPic + ')'"
      class="relative flex flex-col justify-end row-span-1 bg-center bg-cover shadow-xl"
    >
      <div class="w-full h-full" />
      <DealLabel
        :price="isFirst ? '14' : '19'"
        :subtitle="
          isFirst ? 'Krispy krunch for lunch!' : 'The perfect combo deal'
        "
        :small="true"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'LargeDeal',
  props: {
    isFirst: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    correctPic() {
      return this.isFirst ? this.pics[0] : this.pics[1]
    },
  },
  data() {
    return {
      pics: [
        require('~/static/featured/small1.jpg'),
        require('~/static/featured/small2.jpg'),
      ],
    }
  },
}
</script>
