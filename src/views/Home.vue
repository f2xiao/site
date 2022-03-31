<template>
  <div class="home">
   <Intro />
   <Projects />
   <Posts />
   <router-link to="/notes">Short Notes</router-link>
  </div>
</template>
<script>
import Intro from '@/components/Intro.vue'
import Posts from '@/components/Posts.vue'
import Projects from '@/components/Projects.vue'
// import Notes from '../views/Notes.vue'
// @ is an alias to /src
console.log(process.env.NODE_ENV);
export default {
  name: 'Home',
  components: {
    Intro,
    Posts,
    Projects
  }
}
</script>
