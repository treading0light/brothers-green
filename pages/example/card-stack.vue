<template>
	<div class="my-stack relative w-1/2 min-h-[600px]">

		<div v-for="item in items" :key="item" 
		class="my-card w-full absolute bg-base-200">
			<h1>{{ item }}</h1>
		</div>

	</div>
	
</template>

<script setup>
	const items = [
		'item 1',
		'item 2',
		'item 3',
	]

	const cards = Array.from(document.querySelectorAll('.my-card'))

	console.log(cards)

</script>