<template>
  <div class="m-4">
    <h1 class="text-2xl text-red-800">{{ $t('about.title') }}</h1>
    <p>
    {{ $t('about.par_1', {xxx: 'NUXT.JS'}) }}  
    </p>
    <div class="flex flex-col">
      <p>{{ $t('about.par_2') }}</p>
      <ul>
        <li>Nuxt {{ $t('about.li_1') }}</li>
        <li>@nuxt/http {{ $t('about.li_2', {xxx: 'Axios'}) }}</li>
        <li>@nuxt/i18n</li>
      </ul>
    </div>
    <p> {{ $t('about.par_3') }}</p>
    <p> {{ $t('about.par_4') }}</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('about.title'),  
      meta: [
        {
          hid: "description",
          name: "description",
          content: "First website in NuxtJS by Andrea La Camera"
        }
      ]
    }
  },

}
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>