<template>
	<div ref="viewer" class="fixed left-[50%] translate-x-[-50%]
	w-3/4 md:top-10 md:w-1/2 lg:w-1/3 lg:h-screen lg:top-0" 
	style="z-index: 31;">

		<div class="card card-bordered border-white bg-base-100 shadow-xl text-sm md:text-lg">

		  <figure><img :src="image.src" alt="Image" /></figure>

		  <div class="card-body">
		    <p>"{{ image.text }}"</p>
		    <div class="card-actions justify-end">
		      <button @click="close" class="btn btn-primary">Close</button>
		    </div>
		  </div>
		  
		</div>
	</div>
	
</template>

<script setup>
	const viewer = ref(null)
	const props = defineProps({
		image: Object
	})

	const close = () => emit('close')
	const emit = defineEmits(['close'])

	onMounted(() => {
		viewer.value.style.top = window.scrollY + 500
		console.log(viewer.value.style.top)
	})
</script>