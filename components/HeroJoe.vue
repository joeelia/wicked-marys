<template>
  <section>
    <div class="mx-auto max-w-screen-xl">
      <h1
        class="text-5xl font-medium tracking-tighter text-white uppercase md:text-7xl lg:text-10xl"
      >
        <marquee class="tracking-tighter"
          >Always Fresh, Always, For You.</marquee
        >
      </h1>
      <center>
        <img class="h-full shadowed" src="~/assets/images/PizzaHero.png" />
      </center>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroJoe',
  data() {
    return {
      heroFocus: false,
    }
  },
}
</script>
<style scoped>
.shadowed {
  width: 150px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
}
</style>
