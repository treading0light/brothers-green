<template>


      <div id="parent" @mouseover="mouseOver" @mouseleave="mouseLeave" class=" w-4/5 flex flex-col items-center text-center p-10 gap-5 relative"
      style="font-family: 'UnifrakturCook', cursive;">

        <img id="img" class="w-full opacity-30 absolute top-0" src="/images/homepage/dall-e-1-banner.png" />
        <h1 class="justify-self-start text-base-content md:text-5xl lg:text-7xl">The Brothers</h1>
        
        <h1 class="justify-self-end md:text-5xl lg:text-7xl">Green</h1>
        <h1 id="hidden-text" class="invisible p-3 md:text-3xl lg:text-5xl glass" style="z-index: 5;">We see the future</h1>
      </div>

</template>

<script setup>
  const mouseOver = () => {
    const img = document.getElementById('img')

    img.classList.add('opacity-100')

    showText()
  }

  const mouseLeave = () => {

    img.classList.remove('opacity-100')

    hideText()
  }

  const showText = () => {
    const el = document.getElementById('hidden-text')

    el.classList.remove('invisible')
  }
  
  const hideText = () => {
    const el = document.getElementById('hidden-text')

    el.classList.add('invisible')
  }

  const equalize = () => {
    const div = document.getElementById('parent')
    const img = document.getElementById('img')

    const height = img.offsetHeight + 'px'

    div.style.minHeight = height
  }

  onMounted(() => {
    equalize()

    window.addEventListener('resize', () => equalize())
  })
  

</script>

<style>
  
</style>

