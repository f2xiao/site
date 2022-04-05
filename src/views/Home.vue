<template>
  <div class="home">
    <div class="Intro">
   <header><h1>Name</h1></header>
    <p><strong>Fullstack Developer.</strong>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, deleniti blanditiis, accusamus dicta repellendus aliquam culpa quasi, molestias corporis expedita earum possimus nemo officiis minus molestiae similique excepturi asperiores hic.
    </p>
    <p>Also at <a href="#">link</a>, <a href="#">link</a>, <a href="#">link</a> </p>
  </div>
   <img src = "@/assets/triangle.svg" alt="divider"/>
   <div class="projects">
       <h2>Projects</h2>
       <div v-for="project in projects" :key="project.title"><a href="#">{{project.title}}</a><button>{{project.tags.join()}}</button></div>
  </div>
   <img src = "@/assets/triangle.svg" alt="divider"/>
   <div class="posts">
     <h2> <router-link to="/posts">Posts</router-link></h2>
     <div v-for="post in posts" :key="post.title" >
      <router-link  :to="{ path: '/posts/'+post.title, params: {fileName: post.title }}">{{post.title}}</router-link>
    </div>
   </div>
   <br>
   <br>
   
  <Signature />
  </div>
</template>
<script>
import Signature from '@/components/Signature.vue';

export default {
  components: { Signature },
  name: 'Home',
  components:{
    Signature,
  },
  data() {
    return {
      posts:[],
      projects:[]
    }
  },
  created: function(fileName='data.json'){
    let data = require(`@/../posts/${fileName}`);
    data.posts.map(item=>this.posts.push(item))
    data.projects.map(item=>this.projects.push(item))
  }
}
</script>
<style lang="scss">
  .projects{
    a, button{
      display: inline-block;
      height:100%;
    }
    a{
      width: 10rem
    }
  }
</style>

