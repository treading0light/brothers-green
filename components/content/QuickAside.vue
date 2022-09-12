<template>
	<div>
		<div class="relative text-right hover:cursor-pointer font-extrabold border border-accent underline">
			<p @click="appear">Quick Aside</p>
		</div>

		<div id="quick" class="absolute bg-secondary text-secondary-content max-w-screen-2xl top-0 hidden">
			<slot />
		</div>

		

	</div>
</template>

<script setup>
	const appear = () => {
		const el = document.getElementById('quick')

		el.classList.toggle('hidden')

		console.log('doing something')
	}
</script>

