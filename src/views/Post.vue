<template>
  <div>
    <h1>This component mounts `../posts/${file name which is passed through props}.md` as Vue component dynamically</h1>
    <h2>{{ title }}</h2>
    <component :is="dynamicComponent" />
     <Signature />
  </div>
</template>

<script>
import Signature from '@/components/Signature.vue';
  export default {
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
      this.dynamicComponent = markdown.vue.component

      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    },
    name: 'Post'
  }
</script>