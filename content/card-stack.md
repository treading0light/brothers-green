---
title: Make your own animated stack of elements.
description: I show you how to make a stack of Divs that will flip positions
thumbnail: /images/vue-markdown.png
slug: card-stack
author: Tony Green
draft: true

---

Before we start, check out the finished product *here*

# Overview

- First we make the outermost wrapper element and position it where we want on the page. 
	- This will be position relative
- Then we make at least 3 "card" elements.
	- these will be position absolute.
- Next we will position the cards programatically.
- Finally we will create an animation that plays while cycling through the cards.

## Setting up the DOM

