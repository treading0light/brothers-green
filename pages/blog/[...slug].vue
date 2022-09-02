<template>

	<article class="prose lg:prose-xl prose-h1:bg-slate-500">
		<ContentDoc :path="path" />
	</article>

	
</template>

<script setup>

	// ContentDoc shouldn't need path defined but it does...
	const route = useRoute()

	const slug = route.params.slug

	const path = 'articles/' + slug
	
</script>