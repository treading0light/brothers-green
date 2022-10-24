<template>
	<div>
		<NuxtLink :to="target"> <slot /> </NuxtLink>
	</div>
	
</template>

<script setup>
	const props = defineProps({
		target: String
	})
</script>
