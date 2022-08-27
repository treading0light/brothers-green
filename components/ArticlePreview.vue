<template>

	<div class="card bg-base-100 shadow-xl p-2">
	    <NuxtLink :to="link"> 
			<figure><img class="w-full" :src="article.thumbnail" alt="Article" /></figure>
			<div class="card-body">
			<h2 class="card-title">{{ article.title }}</h2>
			<p>{{ article.description }}</p>
			</div>
		</NuxtLink>
	</div>

	
	
</template>

<script setup>
	const props = defineProps({
		article: Object
	})

	const link = '/blog/' + props.article.slug

	// console.log(props.article.link)
</script>