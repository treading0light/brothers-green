<template>
	<div id="root" :data-theme="theme">
		<TheHeader @themeSelected="changeTheme" />

		<Background v-if="home == true" />

		<NuxtPage />

		<TheFooter />
		
	</div>
	
</template>

<script setup>
	const theme = ref('night')
	const home = ref(false)

	const changeTheme = (newTheme) => {
		theme.value = newTheme
		// console.log('chosen theme: ' + newTheme)
		} 

	const markHome = (bool) => home.value = bool



</script>
