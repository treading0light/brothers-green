<template>
	<div class="min-h-screen w-full bg-cyan-300">

		<img class="w-20" src="/images/abstract_banner1.jpeg">


		<div id="fog" @mousemove="handleMouseMove" class="min-h-screen w-full fixed top-0">
			<NuxtLink to="/blog" class="btn btn-primary">Exit</NuxtLink>
		</div>
	</div>


</template>

<script setup>


	const handleMouseMove = (e) => {
		// console.log(event.clientX)
		let x = e.clientX.toString() + 'px' 
	    let y = e.clientY.toString() + 'px'
	    let xy = x + " " + y

	    const el = document.getElementById('grid')

	    let radValue = "radial-gradient(circle at "+ xy + ", rgba(0,0,0,.25) 100px, rgba(80,90,100,1) 300px )";
	    let image = ""
	    e.target.style.backgroundImage = radValue
	}
</script>

<style>
	#fog {
		background: radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 50px,
			rgba(80,90,100,1) 50px);
	}
</style>