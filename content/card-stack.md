---
title: Make your own animated stack of elements.
description: I show you how to make a stack of Divs that will flip positions.
thumbnail: /images/card-stack.jpg
slug: card-stack
author: Tony Green
draft: true

---

::my-nuxt-link{target="/example/card-stack-example"}
Before we start, check out the finished product here.
::

## Overview

- First we make the outermost wrapper element and position it where we want on the page. 
	- This will be position relative
- Then we make at least 3 "card" elements.
	- these will be position absolute.
- Next we will position the cards programatically.
- Finally we will create an animation that plays while cycling through the cards.

## Disclaimer

I built this inside a Vue.js project but everything shown here should work fine in any project as I mostly use vanilla Javascript. Also I am using TailwindCss but that isn't necessary. 

## Setting up the DOM

Let's start with a *main* element. This will assist us in positioning the rest of our elements. This should have a minimum height of the screen so we can position child elements easily. We also need to give it overflow hidden, as the animated elements will cause a scroll bar for the x-axis to appear and disapear.

```
<main class="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">

</main
```

Before we create our card stack, we'll need a button group. Here I'm using Vue's "@click" directive, but you can add the click functionality in whatever way you choose, like with a classic event listener. Each button should call the same function but with a different argument, in this case a string that either says "back" or "forward".

```
<div class="flex gap-5">
	<button @click="flip('back')">Prev</button>
	<button @click="flip('forward')">Next</button>
</div>
```

Next we'll want to wrap our cards in a div, I've given mine an id of "my-stack". The important thing is that this div is position "relative", as each of the cards will be position "absolute" and their actual position on the page will be in relation to this parent element. I've also given it a minimum height, as all of it's children are "absolute" and will leave it with zero height, which will be bothersome to the rest of your page. We'll also be setting a width here which will control the width of the children.

```
<div id="my-stack" class="relative w-1/3 min-h-[400px]">

</div>
```


This works best with at least 3 cards. You can hard code them in your html or create them dynamically with whatever tools you are using. For this example I am using Vue's "v-for" directive to make card elements for each item in an array. Either way we will be creating an array of these elements after the DOM has been rendered, which means you should be ready to use lifecycle hooks if needed. Don't forget to give each of these elements "absolute" position.

```
<div v-for="item in items" :key="item" 
class="my-card absolute w-full bg-primary 
border-4 border-white text-center text-2xl md:text-5xl">

	<h1 class="my-12 md:my-32">{{ item }}</h1>

</div>

<script setup>
const items = [
	'item 1',
	'item 2',
	'item 3',
]
</script>
```

## Javascript functionality

First we need to initialize an empty array to hold our card elements. This is only really necessary if we add our cards dynamically. Then we are going to make a utility function we will use later. I strait up took this function from stack overflow and shortened it with arrow function syntax. Basically It takes an integer as an argument, which is how long to wait in miliseconds. Then it uses a Promise object so we can use "await" when we call it.

```
let cards = []

const sleep = ms => new Promise(r => setTimeout(r, ms))
```

Now lets talk about how this will work. We start with an array of card elements. When the animation is triggered, the array is re-ordered. Then we animate either the first or last element away depending on which button was pressed. This animation only moves the element on the x-axis. Then we adjust the positions of each element in the array before animating that one element back in.

Our two main functions are called flip() and rePosition().

flip() is what is called when the prev or next buttons are clicked. This function needs to be "async" because we will be using await a little later. First we make sure the "el" variable is clear. Then we use the classic array methods:

- array.shift() removes the first element in an array and returns it
- array.push() adds an element to the end of an array
- array.pop() removes the last element in an array and returns it.
- array.unshift() adds an element to the beginning of an array

Depending on which direction (string argument) is given, we will either take the first item and place it at the end of the array, or we will take the last item and place it at the beginning.

```
const flip = async (direction) => {
		
	let el = null

	if (direction === 'forward') {
		el = cards.shift()
		cards.push(el)

	} else {
		el = cards.pop()
		cards.unshift(el)
	}
}
```

Now our array of cards has been changed, but nothing has changed on the page. Next we will animate out an element, finally make use of our sleep() function, run our rePosition() function, then animate the element back in. Here we go.

```
const flip = async (direction) => {
	// previous code

	el.style.transform = 'translateX(150%)'
	await sleep(500)

	rePosition(cards)

	el.style.transform = 'translateX(0)'
}
```

What we are doing here is using Javascript to set a CSS property called "transform", and there we pass a CSS function called translateX() which will move the element on the x-axis. we pass '150%' to this function which will move it to the right 1.5x the width of itself. We then make flip() wait by preceeding our sleep() function with the "await" keyword, and pass 500 ms as an argument. Before animating our element back in we will run the rePosition() function and pass it our re-ordered array of cards.

We want each card in our stack to be a little down, and a little to the right of the one before it. To do this we will be setting the "top" and "right" CSS properties, which position the element related to it's "relative" parent. We also will be using a CSS property called "z-index" which controls the position on the z-axis. Basically which element is on top of which other element.

Our rePosition() function takes our card array as an argument. In it we will loop through each of the elements, calculate their new position values, and then apply them. The "top" and "right" preperties will be set using a pixel value followed by 'px' (i.e. '50px'). The tricky part is that we are using the index of each array element as a multiplier in order to evenly space them on screen.

```
const rePosition = (array) => {

	for (const el of array) {
		// calculate positions by index
		const index = array.indexOf(el)
		const top = index * 10
		const right = 0 - top

		// apply positions
		el.style.top = top + 'px'
		el.style.right = right + 'px'
		el.style.zIndex = 10 - index
	}
}
```

Next we need to set a CSS property called "transition" which will make our "translateX" actually look like an animation. "transition" looks for changes on whatever property you give it and fills in the blanks between start and finish positions. This can be done on a stylesheet, inside of a style tag, or even inline on your element. 

```
<style>
.my-card {
	transition: transform .5s;
}
</style>

or

<div class="my-card" style="transition: transform .5s;">
</div>
```

Now finally at the bottom of the script we need to fill our empty cards array, and call rePosition() for the first time, otherwise our cards will be stacked directly on top of each other until the first animation is triggered. Here is where we need to use a onMounted or equivilant lifecycle hook to wrap around these actions, that is if you are using a virtual dom like Vue and React do, otherwise just having these at the bottom of the script should suffice.


```
onMounted(() => {
	cards = Array.from(document.querySelectorAll('.my-card'))

	rePosition(cards)
})

or

cards = Array.from(document.querySelectorAll('.my-card'))

rePosition(cards)
```

::quick-aside
I encountered a bug that seems to be an issue with Nuxt 3. When navigating to the example page, my onMounted hook was running before the DOM was rendered. It looks like the most popular fix is to wrap everyting inside your onMounted hook, inside a setTimeout function. 100ms did it for me!
::

## Conclusion

Well that was a lot of work, but if everything went right then you have a component that can be used to display any number of cards, however if I were this to showcase several cards, I would only render the top 5 or so. Also feel free to style these any way you see fit!

Happy coding!