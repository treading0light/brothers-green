<template>
	<div class="navbar bg-base-300 flex justify-end" style="z-index: 20;">

	  <div>
	    <ul class="menu menu-horizontal p-0">

	        <li><NuxtLink to="/">Home</NuxtLink></li>
	        <li><NuxtLink to="/blog">Blog</NuxtLink></li>

	        <li tabindex="0">
		        <p>
		          Theme
		          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
		        </p>
		        <ul class="p-2 bg-base-100">
		          <li v-for="theme in themes" @click="selectTheme(theme)" class="hover:cursor-pointer">{{ theme }}</li>
		        </ul>
	        </li>
	    </ul>
	  </div>
</div>
</template>

<script setup>

	const themes = [
		'lofi',
		'night',
		'forest',
		'dracula',
		'synthwave'
	]

	const emit = defineEmits(['themeSelected'])

	const selectTheme = (newTheme) => {

		// console.log('selecting theme: ' + newTheme)
		emit('themeSelected', newTheme)
	}
	
</script>