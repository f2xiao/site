---
title: Create your own Vue UI library
layout: default
tags:
  - Vue.js
  - UI library
---
There are 4 main steps to create a UI library for Vue:
1. initiate the project
2. create component files
3. expose components
4. build library files and publish it to npm


## Initiate project
First create the project files with @vue/cli and delete unnecessary files. The project config should select Babel and CSS pre-processor. Clean the files as the following:

- delete src/components, assets/logo.png
- rename src to examples
- create a new folder called packages in the root

After the above steps, the current directory structure looks like:

```plaintext
├── examples
│   ├── App.vue
│   ├── assets
│   └── main.js
├── packages
├── public
├── README.md
├── package-lock.json
├── package.json
├── babel.config.js
└── vue.config.js
```

## Create a component
All components files will be stored inside the folder called packages as follows:

```plaintext
├── packages
   ├── aComponent
   ├── bComponent
   └── cComponent
```
Create files inside a single component as follows:

```plaintext
├── packages
   ├── aComponent
      ├── src
         ├── aComponent.vue
```

We will define the component under `packages/<component-name>/src/index.vue`{.plaintext}.

Now, it's time to create a component. Let's start with a simple anchor tag component whose text color, text content and href can be configured:

``` html
<template>
    <!-- props: href for address and theme for text color --> 
    <a :href="href" :class="[`mv-link-${theme}`]" >
        <!-- use default slot as placeholder for text content -->
        <slot/>
    </a>
</template>

<script>
    export default { 
        name:"mvLink",
        props: {
            // config props
            href: {
                type:String,
                default: '#'
            },
            theme: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style lang="scss" scoped>
    /* set predefined text color */
    .mv-link-default {
        color: #606266;
    }
    .mv-link-primary {
        color: #409eff;
    }
</style>
```

## Expose the component 
First, recall that to use a component in Vue, we need to first import it and then register it either globally or locally.


Since we want to build a UI library, import and register the component globally is a better solution. Vue provides a feature to add   see how to expose the component. First we need to understand there are three ways to import the components globally in Vue:
- import all as a package globally
- import a single component globally
- import by CDN

### import all components
under the component folder, only need vue component file which defines the component and  
### import a single one
### import by CDN

## Build the UI library