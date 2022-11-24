---
title: Parsing Data From a Five Column Pivot Table.
description: A tale of research and greater understanding.
thumbnail: /images/nuxtjs-logo.png
slug: pivot-table-journey
author: Tony Green
draft: false

---

## The Project

I am building a project that has two tables with a many-to-many relationship in a MySql database. To do this I needed a third table, called a "pivot" table. Setting it up, establishing the relationship in my models, creating the migrations, these were all pretty straight-forward. Once I recieved the data on the front-end, I had some work to do and I learned a lot about the frameworks that I've been using in the process.

This project is a recipe app (From what I hear, we've all made one) that will also provide users on an Auto Immune Protocol diet, a way to track which foods they introduce back into their lives. I am building it with Vue 3 with Laravel as it's API, an AIP-API if you will.

## The Back End

I love PHP and I have no interest in using WordPress, I must hate Money or something. Laravel is a fantastic PHP framework that I have used on a few projects, but this is my first real project using it as just an API.

I have a Recipe table, which stores the name, image, directions, etc. and I have an Ingredients table which stores individual ingredients. I could have just put the ingredients in the recipe table as an array of strings, but the functionality of the app requires these ingredients to be stored and tracked among the recipes. Enter the pivot table.

A pivot table typically contains an ID and the ID's of two rows from different tables, facilitating a many-to-many relationship between them. My pivot table has two extra columns, 'qty' and 'unit', because these values are vary among recipes. Like I said, the set up went fine. I have the Laravel developers to thank I think. 

::quick-aside
Naming the pivot table "ingredient_recipe_table" is needed for the magic to work, I think.
::

Here is the heavy lifter in my RecipeController's "create" method.

    $recipe->ingredients()->attach($ingredient, ['qty' => $ing->qty, 'unit' => $ing->unit]);

The attach() method seamlessly establishes the recipe-ingredient relationship and can take an associative array to set other values.

## The Front End

I'm using Vue 3 to build my UI, and I love it. I miss having Nuxt.js take care of all the little things, but I learned alot by using vue-router and I don't want to get spoiled too much by Nuxt. 

On the client side I have a catch-all route that will display a single recipe, the ingredients listed along with their qty and unit values. Here's where the problem occured. When this component retrieves the data from the API, all the ingredients are objects set as an attribute of the recipe, which is good, but the extra special pivot data is nested another level inside each ingredient. I know I could have just worked with the nested data, but imagining all the extra code in my components gave me the creeps so I spent the extra time to rearrange the data on the server before it's sent out. 

A query that returns one model instance comes in a kind of model object, where when multiple instances come as Laravel "Collection" and these are awesome. They really tripped me up in the past, and they did here too because they are not an associative array but they sure do look like one. Collections are immutable, except when using certain Collection methods, although many of them just return a new Collection. Even though I am getting only one Recipe from the database, I think a Collection works best for what I am trying to accomplish so I used the collect() method on my query.

    $res = collect(Recipe::with('ingredients')->find($id));

    $ingredients = [];

What I needed was to extract the array of ingredients from the collection, iterate over it and copy the two values I want from the nested "pivot" array directly into the ingredient, and make it stick. At first I tried pulling the ingredients out with the Collection->pull() method, but if I remember correctly that just returned another immutable collection. I also discovered that a PHP foreach loop actually iterates over a copy of the array, so my changes weren't saved as I expected. So instead I left the data where it was in the collection, iterated over the ingredients directly and saved each one in a new array as changes were made, and removed the pivot array. 

     foreach ($res['ingredients'] as $ingredient) {

                        $pivot = $ingredient['pivot'];
                        unset($ingredient['pivot']);

                        $ingredient['qty'] = $pivot['qty'];
                        $ingredient['unit'] = $pivot['unit'];

                        array_push($ingredients, $ingredient);
                    }

Next I used another magic method provided by Laravel Collections.

    $res->put('ingredients', $ingredients);

Collection->put() will set an attribute, overwriting one if the key already exists. This worked perfectly for me. I used this method to save the new array to the "ingredients" attribute in my Collection. Now when my Vue component gets the recipe data, it is much more easily incorporated into the DOM. 

I'm pretty sure this was more work than just going down one more level on the JS object, but I could just imagine something like this being confusing to a front-end developer and wishing that the API guys would just clean up their data.

Now that's what I call a full-stack experience!