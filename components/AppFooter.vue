<template>
  <div class="fixed left-0 bottom-0 w-full bg-blue-800 text-blue-100 p-2">
    <p>
    LOCALE: {{ $i18n.locale }}
    </p>
    <p>
    BROWSER: {{ $i18n.getBrowserLocale() }}
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>