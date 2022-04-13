<template>
  <div class="home">
    <div class="Intro">
   <header><h1>Fangfang</h1></header>
    <p><strong>Self-taught Fullstack Developer.</strong>
    Enjoy buidling website. Write JavaScript, HTML, CSS and Java.
    Love Java's OPP concept, enjoy making UML diagrams and exploring design patterns. 
    </p>
    <p>
       Formerly worked as an mechanical engineer in automotive industry, specialized in CAD modeling and process engineering. Found passion in coding and started second career as a developer.
    </p>
    <p>Also at <a href="https://github.com/f2xiao">Github</a>, <a href="#">CV</a>, <a href="#">LeetCode</a>, <a href="#">Linkedin</a> </p>
  </div>
   
   <div class="projects">
       <h2>Projects</h2>
       <div v-for="project in projects" :key="project.title">
         <a class="left" href="#">{{project.title}}</a>
         <span class="right tag">{{project.tags.join()}}</span>
      </div>
  </div>
   <div class="posts">
     <h2> <router-link to="/posts">Posts</router-link></h2>
     <div v-for="post in posts" :key="post.title" >
      <router-link  :to="{ path: '/posts/'+post.title, params: {fileName: post.title }}">{{post.title}}</router-link>
    </div>
   </div>
  </div>
</template>
<script>


export default {
  name: 'Home',
  computed:{
    posts(){
      return this.$store.state.posts;
    },
    projects(){
      return this.$store.state.projects;
    }
  }
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
       padding: 0 2%;
       color: #ABADB7;
       right: 0;
    }

  @media screen and (max-width: 480px) {
  .left {
    min-width: 100%;
  }
  .right{
    position: inherit;
    font-size: 0.8em;
    border:0;
    padding:0;
  }
}

    a, span{
      // margin: 0.25em 0;
      vertical-align: middle;
    }
  }
</style>





