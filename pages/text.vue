<template>
	<TheHeader />
	<div class="flex flex-col items-center w-full h-screen bg-base-300">
		<h1 class="mt-20 text-3xl font-bold">Latest blog posts</h1>

		<div class="grid col-auto">
			<div class="w-1/4" v-for="article in articles" :key="article.slug">
				{{article.title}}
			</div>
			
		</div>
		
	</div>


</template>

<script setup>
	const articles = ref(null)
	articles.value = await queryContent('articles').find()

	console.log(JSON.stringify(articles.value))
</script>