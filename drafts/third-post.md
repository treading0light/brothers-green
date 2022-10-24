---
title: My Third BlogPost
description: Just a test
thumbnail: /images/code.jpeg
slug: third-post
author: Tony Green
draft: true

---

<TheHeader />
	<div>
		<!-- Clearly saving html in here doesn't work out -->
		It doesn't appear that saving html in here is the best...
		<h1>Here is a blog that I am building.</h1>

		<p>I will also try to save some v bindings here in this markdown.</p>

		<p>{{ message }}</p>

		<input type="text" v-model="message">
		
		</div>