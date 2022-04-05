<template>
  <div>
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