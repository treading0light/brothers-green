<template>

	<div class="card bg-primary glass text-primary-content hover:text-base-content shadow-xl p-2">
	    <NuxtLink :to="link"> 
			<figure><img class="w-full" :src="article.thumbnail" alt="Article" /></figure>
			
			<div class="card-body">
				<h2 class="card-title text-sm sm:text-xl ">{{ article.title }}</h2>
				<p class="text-xs sm:text-base">{{ article.description }}</p>
			</div>

			<div class="flex flex-col self-end text-sm">
					<p>Author:</p>
					<p>{{ article.author }}</p>
				</div>
		</NuxtLink>
	</div>

	
	
</template>

<script setup>
	const props = defineProps({
		article: Object
	})

	const shortString = (string) => {
		let array = string.split(' ')

		if (array.length >= 20) {
			array = array.slice(0,20)
			array.push('...')
		}

		return array.join(' ')
	}

	onUpdated(() => {
		let prop = props.article.description
		// console.log('before', prop)
		props.article.description = shortString(prop)
		// console.log('after', prop)
	})

	onMounted(() => {
	})
	

	
	const link = '/blog/' + props.article.slug

</script>