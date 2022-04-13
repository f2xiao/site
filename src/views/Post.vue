<template>
  <div class="post-view">
     <a class="styled-link" href="/site" aria-label="Home">←</a>
    <h2>{{ title }}</h2>
    <component :is="dynamicComponent" />
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: ['fileName'],
    data () {
      return {
        title: null,
        dynamicComponent: null
      }
    },
    created () {
      const markdown = require(`@/../posts/${this.fileName}.md`);
      this.title = markdown.attributes.title;
      document.title = this.title;
      this.dynamicComponent = markdown.vue.component;
      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    }
  }
</script>
