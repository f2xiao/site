<template>
  <div>
    <a class="styled-link" href="/home" aria-label="Home">←</a>
    <h2>{{ title }}</h2>
    <component :is="dynamicComponent" />
    <Signature />
  </div>
</template>

<script>
import Signature from '@/components/Signature.vue';
  export default {
    name: 'Post',
    props: ['fileName'],
     components:{
    Signature,
  },
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
<style lang="scss">
  .styled-link{
    font-size: .7rem;
    border-radius: 4px;
    border: 1px solid;
    padding: 3px 6px;
    text-decoration: none;
    vertical-align: middle;
  }
</style>