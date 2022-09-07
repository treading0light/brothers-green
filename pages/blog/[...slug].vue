<template>
	<div class="w-4/5 m-auto flex flex-col items-start lg:items-center">

		<BlogHeader :path="path" />

		<article class="prose w-full lg:prose-xl prose-code:bg-base-300 prose-code:text-base-content prose-code:p-5 prose-code:rounded-none prose-code:block prose-code:mb-20">
			<ContentDoc class="" :path="path" />
		</article>

	</div>
	
	

	
</template>

<script setup>
	const route = useRoute()
	const path = route.params.slug.toString()	
</script>