<template>
	<div id="root" :data-theme="theme" class="bg-base-100 min-h-screen">
		<TheHeader @themeSelected="changeTheme" />

		<NuxtPage />

		<TheFooter />
		
	</div>
	
</template>

<script setup>
	const theme = ref('night')

	const changeTheme = (newTheme) => {
		theme.value = newTheme
		// console.log('chosen theme: ' + newTheme)
		} 



</script>