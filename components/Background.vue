<template>
	<div ref="bgDiv" class="w-screen min-h-screen fixed grid grid-cols-2 justify-items-center items-center md:gap-y-16 pointer-events-none"
	style="z-index: ;">

		<div v-if="exploreView == true" class="col-span-2 text-base-content md:text-2xl mt-16 bg-secondary bg-opacity-20 p-10">
			<p>I created each of these images using Dall-e 2, the infamous AI artwork generator. I was trying to theme around two concepts, a couple brothers and technology. If you click an image you can read the text prompt that Dall-e was given to create it.</p>

		</div>

		<img v-for="image in images" @click="viewImage(image.src)" class="md:w-2/3 lg:w-1/2 hover:cursor-pointer hover:opacity-100" :src="image.src">

		<ImageViewer v-if="selectedImage != null" :image="selectedImage" @close="closeImage" />




		
	</div>	
</template>

<script setup>
	const bgDiv = ref(null)
	const exploreView = ref(false)
	const selectedImage = ref(null)

	const images = [
		{
			src: "/images/homepage/dall-e-2.png",
			text: 'in the style of Ivan Lopez, cyberpunk, digital art, realistic illustration, the camera sees the backs of two brothers fixing a space ship in the woods, the camera sees most of the space ship, the space ship is on the ground, the brothers have futuristic tools in hand.'
		},
		{
			src: "/images/homepage/dall-e-1.png",
			text:"In the style of Michael Whelan, anime style, the camera sees the backs of two guys each sitting in front a computer, the room is decorated with futuristic lights and lightly glowing wires."
		},
		{
			src: "/images/homepage/dall-e-3.1.png",
			text: "a 3d render of a cyberpunk cityscape, hyper realistic, there are two men standing with their backs to the camera, they stand facing a parked flying sports car"
		},
		{
			src: "/images/homepage/dall-e-4.png",
			text: "digital art, cyberpunk workshop, two men are working on an robot on a work table, the camera looks over the shoulder of the two men, the camera can not see the men's faces, the camera sits higher than the men and points at the android laying on the work table."
		}
	]

	const explore = () => {
		exploreView.value = true
		bgDiv.value.classList.remove('fixed', 'pointer-events-none')
		
	}

	const viewImage = (url) => {
		selectedImage.value = images.find(item => item.src === url)
	}

	const closeImage = () => selectedImage.value = null

	defineExpose({
		explore
	})

</script>

<style scoped>
	img {
		opacity: 0.5;
	}
</style>

