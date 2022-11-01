---
title: How to Create a Nuxt 3 App
description: A guide to setting up Nuxt 3 with TailwindCSS, Daisyui.
thumbnail: /images/nuxtjs-logo.png
slug: create-a-nuxt-app
author: Tony Green
draft: false

---

For me, getting a new project set up is the most difficult part of the process. While I face challenges throughout the 
process, setting up the dependencies always seems to have the most *brick walls* to get in my way. So when I do mange to get
a project up and running, I like to document the process.

# Set up

First of all, make sure you have the latest version of npm. I am currently running version 8.3.1. Run this command in your termnimal to find out which version you have.

`npm -version`


Next, you will want to navigate to where you keep your coding projects.

`cd C:\coding_projects`


# Installing nuxt


With Nuxt version 2, we had "create-nuxt-app", a building tool that would walk you through choices of dependencies and then build the app accordingly. Nuxt 3 however is still pretty new, and therefore we don't have that option (that I know of). So the way that worked best for me is to use nuxi in the terminal, and install your dependencies after.

`npx nuxi init your-app-name`

then make sure to cd into your new project.

`cd your-app-name`


From here you could run "npm install" and be up and running, but lets continue on to install tailwindcss and daisyui.


# What is Tailwind?


Tailwindcss is rapidly becoming the prefered method of css styling, and for good reason. Having a seperate stylesheet where you must flip back to your html, come up with good semantic names, and create styles that are difficult to maintain especially after a few months of not reading your css, can quickly become unmanageable. Tailwind gives just about all of the css power that we love, but you put everything directly in the html element in the form of pre-made classes, like so:

`<div class="flex flex-col items-center">`


# Installing tailwind


Tailwind support is available with all major frameworks, and with the new Nuxt there is a tailwind package available. More than just putting tailwind in your Nuxt project with practically no configuration or need to install postcss, there is a handy "tailwind viewer" which gives you a visual reference for all of your tailwind properties. 

To install using this package, enter the following in your terminal.

`npm install -D @nuxtjs/tailwindcss`

Then you need to add it to your modules in nuxt.config

`export default {
  modules: ['@nuxtjs/tailwindcss']
}`


You'll need a file called "tailwind.config.js" and luckily you can create one through the cli. In your terminal run the following.

`npx tailwindcss init`


# What is Daisyui?


Daisyui is a free component library using tailwindcss. Once installed, you can then check out all of their components at their [website](https://www.daisyui.com), copy the code, and place it in your project. What I love about Daisyui is how easy they make using color themes. They have several themes available, and you can create your own themes. You can then apply colors to your elements by setting something like "bg-primary" or "bg-secondary" so that if you want to change color schemes, just change the theme and your whole project will change!


# Installing Daisyui


Installing Daisyui is easy. Just run the following in your terminal.

`npm install -D daisyui`

Then add it to your plugins in your "tailwind.config.js" file.

`module.exports = {
  //...
  plugins: [require("daisyui")],
}`


Finally, we need to run our install command

`npm install`


# Thats it!

You're all set! In this guide we created a Nuxt 3 project with Tailwindcss and Daisyui