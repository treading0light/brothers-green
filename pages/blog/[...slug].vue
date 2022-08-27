<template>
	
	<article class="min-h-screen w-full bg-primary">
		<ContentDoc :path="path" />
	</article>

	
</template>

<script setup>

	const route = useRoute()

	const slug = route.params.slug

	const path = 'articles/' + slug
	

	const message = ref(null)

	message.value = 'welcome to the jungle!'
</script>