<template>
	<div id="blog-header" class="w-full border-b-4 flex flex-col items-center gap-5 mb-10">
		<img :src="article.thumbnail">
		<h1 class="text-5xl md:text-8xl">{{ article.title }}</h1>
		<h2 class="text-xl md:text-5xl">{{ article.description }}</h2>

		<div class="flex gap-3 justify-center items-center self-start">

			<p>By:</p>
			<div class="avatar">
			  <div class="w-10 rounded-full">
			    <img src="/images/tony-avatar.jpg" />
			  </div>
			</div>
			<p>{{ article.author }}</p>

		</div>
	</div>
</template>

<script setup>
	const article = ref(null)

	const props = defineProps({
		path: String
	})

	const data = await queryContent().where({slug: props.path}).find()

	article.value = data[0]

</script>