<template>
	<div class="hover:cursor-pointer flex flex-col items-center gap-3 text-2xl">
		<img class="" :src="article.thumbnail">
		<h3>{{ article.title }}</h3>
		<p>{{ article.description }}</p>
		<p>{{ article.link }}</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		article: Object
	})
</script>