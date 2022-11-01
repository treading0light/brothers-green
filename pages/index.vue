<template>
  <div class="min-h-screen w-4/5 m-auto flex flex-col gap-32 items-center">

    <!-- <Background /> -->

    <div class="w-full mt-28 flex flex-col items-center gap-10 text-center text-base-content
    text-5xl" style="z-index: 2; text-shadow: 5px 5px black; font-family: 'UnifrakturCook', cursive;;">
      <h1>The Brothers</h1>
      <h1>Green</h1>
      <p class="text-xl">We can see the future.</p>
    </div>

    <div class="flex flex-col items-center gap-10 self-end bg-secondary bg-opacity-20 p-20
     w-3/4 md:w-1/2"
     style="z-index: 2; text-shadow: 2px 2px black;">

      <h1 class="text-base-content self-center
      text-2xl sm:text-3xl md:text-5xl"
      >Something from the blog</h1>

      <ArticlePreview v-if="article" class="" :article="article" />
    </div>

    <div class="flex flex-col self-start bg-secondary bg-opacity-20 gap-5 w-1/3 p-32 items-center text-center
    text-2xl sm:text-3xl md:text-5xl"
    style="z-index: 2; text-shadow: 2px 2px black;">
      <h1>Explore the artwork</h1>
      <button @click="" class="btn">Explore</button>
    </div>
    


  </div>

  
  
</template>


<script setup>

  const article = ref(null)

  const randInt = (max) => Math.floor(Math.random() * max)

  // const randomBlog = async () => {

  //   // get slugs from all posts as an array of objects
  //   const list = await queryContent().only('slug').find()

  //   // randomly select one slug object
  //   const blogSlug = list[randInt(list.length)]

  //   // query single blog post, .find() returns array, .findOne() returns error.
  //   const tinyArray = await queryContent().where(blogSlug).find()

  //   article.value = tinyArray[0]

  // }

  const randomBlog = async () => {
    const list = await queryContent().find()

    const blog = list[randInt(list.length)]
    
    return blog
  }

 
  const emit = defineEmits(['isHome'])

  const isHome = (bool) => emit('isHome', bool)

  onMounted(async () => {
     article.value = await randomBlog()
     console.log(article.value)

    isHome(true)
  })

  onUnmounted(() => {
    isHome(false)
  })
  

  

</script>


