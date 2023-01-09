<template>
  <div class="home">
    <div class="Intro">
   <header><h1>Fangfang</h1></header>
    <p><strong>Self-taught JavaScript Fullstack Developer.</strong>
    Enjoy buidling apps. Write JavaScript, HTML and CSS.
    Love the idea of OOP and abstraction of complex concepts. Currently learning Nodejs and reviewing React, plan to learn Flutter in the future.  
    </p>
    <p>
       Formerly worked as an mechanical engineer in automotive industry, specialized in CAD modeling and process engineering. Found passion in coding and started the path as a developer.
    </p>
    <p>When not coding, I play games (mostly Fortnite), watch shows, movies, make food, draw and spend time with my family as much as possible.</p>
    <p>Know me more, at <a href="https://github.com/f2xiao">Github</a>, <a href="#">CV</a>, <a href="#">LeetCode</a>, <a href="#">Linkedin</a> </p>
  </div>
   <div class="projects">
       <h2>Projects</h2>
        <div>
         <router-link class="left" :to="projects[0].link">{{projects[0].title}}</router-link>
        <button class="right disabled"> <span >{{projects[0].tags.join()}}</span></button>
      </div>
       <div v-for="project in projects.slice(1)" :key="project.title">
         <a class="left" :href="project.link">{{project.title}}</a>
        <button class="right disabled"> <span >{{project.tags.join()}}</span></button>
      </div>
      
  </div>
   <div class="posts" v-bind:style="{'padding':'2.5rem 0'}">
     <h2> <router-link to="/posts">Posts</router-link></h2>
     <div v-for="post in posts" :key="post.filename" >
      <router-link  :to="{ path: '/posts/'+post.filename, params: {fileName: post.filename }}">{{post.filename}}</router-link>
    </div>
   </div>
  </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: mapState({
    posts: state => state.posts.slice(0,3),
    projects: state => state.projects
  })
}
</script>
<style lang="scss">
 @media screen and (max-width: 480px) {
  // header{
  //   padding-top: 0.5em;
  // }
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
      position: absolute;
      // padding: 0 1%;
      right: 0;
    }

  @media screen and (max-width: 480px) {
  .left {
    min-width: 100%;
  }
  .right{
    position: inherit;
    font-size: 0.8em;
  }
}

    a, span{
      // margin: 0.25em 0;
      vertical-align: middle;
    }
  }
</style>





