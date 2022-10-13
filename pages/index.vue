<template>
  <div class="min-h-screen w-4/5 m-auto flex flex-col gap-10 items-center">
    <Intro />

    <h1 class="text-base-content text-5xl self-start">Something from the blog</h1>

    <ArticlePreview class="w-1/2" :article="article" />


  </div>

  
  
</template>


<script setup>
  const article = ref(null)

  const randInt = (max) => Math.floor(Math.random() * max)

  const list = await queryContent().only(['slug']).find()
  console.log(list)

  const blogSlug = list[randInt(list.length -1)]
  console.log(blogSlug)
  const holder = await queryContent().where(blogSlug).find()

  article.value = holder[0]

  console.log(article.value[0])

  

</script>


