<template>
	<div>
		<div @click="appear" class="relative w-fit float-right hover:cursor-pointer">
			<p class="font-extrabold underline">Quick Aside</p>

			<div id="quick" class="absolute hidden border-8 border-secondary rounded bg-base-300 text-base-content bottom-full -left-48 -sm:left-10 xl:left-40 p-5">
				<p><slot /></p>
			</div>
		</div>

		

	</div>
</template>

<script setup>
	const appear = () => {
		const el = document.getElementById('quick')

		el.classList.toggle('hidden')
	}
</script>

<style>
	#quick {
		width: 300%;
	}
</style>

