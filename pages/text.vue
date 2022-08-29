<template>
	<div>
		<h1>Here is a blog that I am building.</h1>

		<p>I will also try to save some v bindings here in this markdown.</p>

		<p>{{ message }}</p>

		<input type="text" v-model="message">


	</div>


</template>

<script setup>
		const message = ref(null)

		message.value = 'welcome to the jungle!'

		const changeMessage = (e) => {
			message.value = e.target.value
			console.log('message changed!')
		}

</script>