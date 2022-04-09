<template>
  <div class="home">
    <div class="Intro">
   <header><h1>Fangfang</h1></header>
    <p><strong>Self-taught Fullstack Developer.</strong>
    Enjoy buidling website. Write JavaScript, HTML, CSS and Java.
    Love Java's OPP concept, enjoy making UML diagrams and exploring design patterns. 
    </p>
    <p>
       Formerly worked as an mechanical engineer in automotive industry, speciallied in CAD model and 2D drawings. Found passion in coding and started second career as a developer.
    </p>
    <p>Also at <a href="https://github.com/f2xiao">Github</a>, <a href="#">CV</a>, <a href="#">Linkedin</a> </p>
  </div>
   <img src = "@/assets/triangle.svg" alt="divider"/>
   <div class="projects">
       <h2>Projects</h2>
       <div v-for="project in projects" :key="project.title">
         <a class="left" href="#">{{project.title}}</a>
         <span class="right">{{project.tags.join()}}</span>
      </div>
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
    document.title = 'Fangfang';
  }
}
</script>
<style lang="scss">
 @media screen and (max-width: 480px) {
  header{
    padding-top: 0.5em;
  }
 }
  .projects{

    
   div{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
   }
    .left{
      width: 30%;
      margin-right:5%;
    }

    .right{
       padding: 0 2%;
       border: 1px solid #C4C4C4;
       border-radius: 4px;
       color: #ABADB7;
    }

  @media screen and (max-width: 480px) {
  .left {
    min-width: 80%;
  }
  .right{
    font-size: 0.8em;
    border:0;
    padding:0;
  }
}

    a, span{
      margin: 0.25em 0;
      vertical-align: middle;
    }
  }
</style>





