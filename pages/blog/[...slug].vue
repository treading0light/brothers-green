<template>

	<article class="prose lg:prose-xl">
		<ContentDoc :path="path" />
	</article>

	
</template>

<script setup>

	// ContentDoc shouldn't need path defined but it does...
	const route = useRoute()

	const slug = route.params.slug

	const path = 'articles/' + slug
	
</script>