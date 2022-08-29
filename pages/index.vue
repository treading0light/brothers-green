<template>
  <div>
    <Intro/>

    <BigPic v-bind:message="image.message" :url="image.url" />

    <button class="btn btn-primary self-center" @click="changeImage">Change Photo using JS!</button>
  </div>
  

</template>

<script setup>

  

  const image = ref({
    message: 'This is a dynamic image',
    url: 'assets/images/300zx.jpg'
  })

  

  // const getImage = () => {
  //   const imageData = {
  //     message: 'This is a dynamic image',
  //     url: 'assets/images/300zx.jpg'
  //   }

  //   image.value = imageData
  // }

  const changeImage = () => {
    const imageData = {
      message: 'Changed this at the press of a button!',
      url: 'assets/images/crashed.jpg'
    }

    image.value = imageData
  }

  
  
</script>

