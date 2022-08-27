<template>

	<div class="flex flex-col items-center w-full min-h-screen bg-primary">
		<h1 class="text-3xl font-bold mt-10 mb-10">Latest blog posts</h1>

		<div class="w-10/12 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-20">
			<ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
		</div>	
	</div>
</template>

<script setup>
	const articles = ref(null)
	articles.value = await queryContent('articles').find()

	// console.log(JSON.stringify(articles.value))
</script>