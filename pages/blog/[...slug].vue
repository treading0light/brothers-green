<template>
	<div class="w-10/12 m-auto flex flex-col items-start">

		<BlogHeader :path="path" />

		<ContentDoc class="prose lg:prose-xl" :path="path" />
		
	</div>
	
	<article class="prose lg:prose-xl prose-h1:bg-slate-500">
		<ContentDoc :path="path" />
	</article>

	
</template>

<script setup>
	const route = useRoute()
	const path = route.params.slug.toString()	
</script>