<template>
	<div class="w-4/5 m-auto flex flex-col items-start lg:items-center">

		<BlogHeader :path="slug" />

		<article class="prose w-full lg:prose-xl prose-code:bg-base-300 prose-code:text-base-content prose-code:p-5 prose-code:rounded-none prose-code:block prose-code:mb-20">

			<client-only>
				<ContentDoc :path="slug" />
			</client-only>

		</article>

	</div>
	
	

	
</template>

<script setup>
	const route = useRoute()
	const slug = route.params.slug.toString()

	onMounted(() => {
		window.scrollTo(0, 0)
	})
</script>