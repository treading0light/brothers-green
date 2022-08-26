<template>
	<TheHeader />
	<div class="flex flex-col items-center w-full h-screen bg-base-300">
		<h1 class="text-3xl font-bold">Latest blog posts</h1>

		<div class="grid grid-cols-3 gap-20">
			<ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
		</div>
		
		
			
		
	</div>
</template>

<script setup>
	const {path} = useRoute()
	console.log(path)
	const articles = ref(null)
	articles.value = await queryContent('articles').find()

	console.log(JSON.stringify(articles.value))
</script>