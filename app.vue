<template>
	<div id="root" :data-theme="theme">
		<TheHeader @themeSelected="changeTheme" />

		<NuxtPage />
		
	</div>
	
</template>

<script setup>
	const theme = ref('night')

	const changeTheme = (newTheme) => {
		theme.value = newTheme
		// console.log('chosen theme: ' + newTheme)
		} 



</script>