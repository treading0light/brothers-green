<template>

	<div id="intro" class="h-screen w-full flex justify-center items-center">

    <h1 class="font-bold text-white text-5xl">{{ message }}</h1>

  </div>
</template>

<script setup>
	const message = ref(null)

	const getMessage = () => {
    return 'Hello Josh Green'
  }

  onMounted(() => {
    message.value = getMessage()
  })
</script>