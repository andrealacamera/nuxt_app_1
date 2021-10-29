<template>
  <div class="w-full" :class="[ transparent ? ['bg-transparent', 'absolute', 'top-0', 'left-0', 'z-10'] : 'bg-blue-800']"
    >
    <nav 
    class="flex flex-row justify-between items-center p-4 text-blue-100" > 
      <h1 class="text-2xl md:text-4xl text-blue-100">Nuxt App 1</h1>
      <div class="flex gap-4 text-sm md:text-base">
        <nuxt-link :to="localePath('/')">Home</nuxt-link>
        <nuxt-link :to="localePath('/beers')">{{ $t('header_beers') }} </nuxt-link>
        <nuxt-link :to="localePath('/about')">{{ $t('header_about') }} </nuxt-link>
        <nuxt-link v-if="$i18n.locale == 'it'" :to="switchLocalePath('en')">Eng</nuxt-link>
        <nuxt-link v-else :to="switchLocalePath('it')">Ita</nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>