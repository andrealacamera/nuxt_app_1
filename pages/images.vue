<template>
  <div class="w-full" >
    <nuxt-picture src="sky.jpg" alt="sky background" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />
    <div :style="mystyle" class="w-full ">
      <div class="flex flex-col justify-center items-center text-white py-16 mt-0">
        <h1 class="text-4xl"> TITLE {{ ypos }} </h1>
        <p class="text-xl"> PARAGRAPH </p>
      </div>
    </div>

    <nuxt-picture src="sky.jpg" alt="sky background" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />
    <nuxt-picture src="sky.jpg" alt="sky background" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />
    <nuxt-picture src="sky.jpg" alt="sky background" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />
    <nuxt-picture src="sky.jpg" alt="sky background" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />



  </div>
</template>

<script>
export default {
  layout: `home`,
  computed: {
    ypos() {
      if (process.client) {
        return window.scrollY
      }
      return -1;
    }
  },
  mounted() {
    
  },
  data() {
    return {
      mystyle: {
        backgroundImage: `url('${require('~/assets/images/bw.jpg?resize&sizes[]=375&sizes[]=768&sizes[]=1024')}')`,
        backgroundPosition: '10% 80%',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100vw',
        backgroundColor: `rgba(0,15,25,0.8)`,
        backgroundBlendMode: `multiply`
      }
    }
  }
}
</script>

<style>

</style>