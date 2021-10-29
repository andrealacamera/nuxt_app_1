<template>
  <div class="m-4">
    <h1 class="text-2xl">{{ $t('beers_title') }}</h1>
    <p>{{ $t('beers_intro') }} <a :href="URL" target="_blank">{{ URL }}</a></p>
    <div class="flex flex-col md:flex-row md:flex-wrap gap-4 mt-16">
      <Beer v-for="beer in beers" :key="beer.beer_id" :beer="beer" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('beers_title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('beers_meta_description')
        },
      ],
    }
  },
  data() {
    return {
      URL: `https://api.nuxtjs.dev/beers`,
      beers: []
    }
  },
  async fetch() {
    // this.beers = await fetch(this.URL).then(res => {
      // return res.json()
    // }
    // );
    this.beers = await this.$http.$get(this.URL);
    // console.log(this.beers)
  }
 

}
</script>

<style>

</style>