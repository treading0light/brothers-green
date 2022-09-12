<template>

	<div id="intro" class="h-screen w-full flex flex-col items-center gap-4">

    <h1 class="text-5xl">The Brothers Green</h1>

    <div id="brothers" class="w-1/2 flex justify-around overflow-hidden">
      <p id="tony" class="animate-slide ">{{ message }}</p>
    </div>
    

  </div>
</template>

<script setup>
	const message = ref(null)

	const getMessage = () => {
    let msg = ''

    for (var i = 200; i >= 0; i--) {
        msg += 'Web Developer '
       }

       console.log(i)

    return msg 
  }

  onMounted(() => {
    message.value = getMessage()
  })
</script>

<style scoped>
  /*#intro {
    background-color: #2c2a30;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='40' viewBox='0 0 50 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234666ef' fill-opacity='0.3'%3E%3Cpath d='M40 10L36.67 0h-2.11l3.33 10H20l-2.28 6.84L12.11 0H10l6.67 20H10l-2.28 6.84L2.11 10 5.44 0h-2.1L0 10l6.67 20-3.34 10h2.11l2.28-6.84L10 40h20l2.28-6.84L34.56 40h2.1l-3.33-10H40l2.28-6.84L47.89 40H50l-6.67-20L50 0h-2.1l-5.62 16.84L40 10zm1.23 10l-2.28-6.84L34 28h4.56l2.67-8zm-10.67 8l-2-6h-9.12l2 6h9.12zm-12.84-4.84L12.77 38h15.79l2.67-8H20l-2.28-6.84zM18.77 20H30l2.28 6.84L37.23 12H21.44l-2.67 8zm-7.33 2H16l-4.95 14.84L8.77 30l2.67-8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }*/

  #tony {
    font-weight: bold;
    text-align: center;
    background: linear-gradient(60deg, red, yellow, red, yellow, red) fixed;
    background-attachment: local;
    box-shadow: 1em 0 0 #FFAA3B, -1em 0 0 #FFAA3B;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    background: url('/images/tony-avatar.jpg') no-repeat center;
    -webkit-background-clip: text;
    background-size: 75%;
  }

  #josh {
    font-weight: bold;
    background: url('/images/josh-avatar_edited.png') no-repeat center;
    background-attachment: local;
    background-size: 75%;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-background-clip: text;
  }

  #brothers {
      
      
      
  }
</style>

