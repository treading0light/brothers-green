---
title: Using Nuxt components in markdown.
description: A few things I've learned about "Mark Down Components" aka "MDC"
thumbnail: /images/vue-markdown.png
slug: content-mdc
author: Tony Green
draft: true

---

# What are Markdown Components?

When I first looked into using "Nuxt Content" as a headless CMS, my main worry was that I would be prevented from using Vue components inside my markdown files, but those fears turned out to be unfounded. 

You can indeed use vue components inside markdown with an easy syntax. I have however encountered some hurdles that I will now share with you here. 

- ContentSlot doesn't seem to work
- forced to go back to the strange vue requirements for component naming
    - encouraged to name component "ComponentName.vue" but supposed to use in html like `<component-name />`
    - when "::componentname" is used in markdown, "Componentname" is seen in terminal, leading me to believe it automatically assumes first character capital but can not distinguish past this.
- I have found this to be the correct convention.
    - returning to vue standard, lower case with hyphen in markdown "component-name" translates to uppercase no hyphen when searching for component file "ComponentName.vue"

::quick-aside
Once a content component has been made, using them is easy!
::

My **Quick Aside** component has been called within the markdown file like so:


```
// Start text on same column
::quick-aside
Text to display
::

// This won't render properly
::quick-aside
    Text to display
::
```



