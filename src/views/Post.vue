<template>
  <div class="post-view">
     <a class="styled-link" href="/#/posts" aria-label="Home">←</a>
    <!-- <h2>{{ title }}</h2> -->
    <component :is="dynamicComponent" />
  </div>
</template>

<script>
import mermaid from 'mermaid';

  export default {
    name: 'Post',
    props: ['fileName'],
    data () {
      return {
        // title: null,
        dynamicComponent: null
      }
    },
    created () {
      const markdown = require(`@/../posts/${this.fileName}.md`);
      document.title = markdown.attributes.title;
      this.dynamicComponent = markdown.vue.component;
      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
      
  },
    mounted() {
        try {
          mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            gantt: {
                axisFormatter: [
                  ['%Y-%m-%d', (d) => {
                    return d.getDay() === 1;
                  }],
                ],
              },
            });
          mermaid.init();
        } catch (error) {
          console.log(error)
        }
    }
  }
</script>
