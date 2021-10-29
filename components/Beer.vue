<template>
  <div class="flex flex-col items-center justify-between h-72 border border-gray-300 rounded-lg p-2 w-full md:w-1/5" > 
    <div class="">
      <h1 class="text-xl">{{beer.name}}</h1>
      <h2 class="text-lg">{{beer.type}}</h2>
    </div>   
    <img :src="beer.image_url" class="w-40" />
  </div>
</template>

<script>
export default {
  props: {
    'beer': Object
  }
}
</script>

<style>

</style>