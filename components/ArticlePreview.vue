<template>

	<div class="card bg-primary text-primary-content shadow-xl p-2">
	    <NuxtLink :to="link"> 
			<figure><img class="w-full" :src="article.thumbnail" alt="Article" /></figure>
			<div class="card-body">
			<h2 class="card-title">{{ article.title }}</h2>
			<p class="">{{ article.description }}</p>
			</div>
		</NuxtLink>
	</div>

	
	
</template>

<script setup>
	const props = defineProps({
		article: Object
	})

	// console.log(JSON.stringify(props))

	const link = '/blog/' + props.article.slug

	// console.log(props.article.link)
</script>