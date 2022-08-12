<template>
	<div class="flex h-screen w-full items-center justify-around">

		<div class="w-1/3 flex flex-col items-center gap-10 bg-base-300">
			<h2>This picture is hard coded in</h2>
			<img class="w-4/5 mb-20" src="assets/images/350z.jpg">		
		</div>

		<div class="w-1/3 flex flex-col items-center gap-10 bg-base-300">
			<h2>{{ message }}</h2>
			<img class="w-4/5 mb-20" v-bind:src="url">
		</div>


		
	</div>
	
</template>

<script setup>
	const props = defineProps({
		message: String,
		url: String
	})


</script>
