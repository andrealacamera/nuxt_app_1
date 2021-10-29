<template>
  <div>
    <nav class="flex flex-row justify-between items-center p-4 bg-blue-800 text-blue-100"> 
      <h1 class="text-4xl text-blue-200">Nuxt App 1</h1>
      <div class="flex gap-4">
        <nuxt-link :to="localePath('/')">Home</nuxt-link>
        <nuxt-link :to="localePath('/beers')">{{ $t('header_beers') }} </nuxt-link>
        <nuxt-link :to="localePath('/about')">{{ $t('header_about') }} </nuxt-link>
        <nuxt-link v-if="$i18n.locale == 'it'" :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link v-else :to="switchLocalePath('it')">Italiano</nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>