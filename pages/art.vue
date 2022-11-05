<template>
	<div class="min-h-screen">
		<Background ref="background" /> 
	</div>
</template>

<script setup>
	const background = ref(null)
	
	onMounted(() => {
		window.scrollTo(0, 0)
		background.value.explore()
	})
</script>