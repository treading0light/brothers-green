<template>
	<div id="root" :data-theme="theme" class="">
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