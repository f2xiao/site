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
       <p><a href="#">Project Link</a></p>
       <p><a href="#">Project Link</a></p>
       <p><a href="#">Project Link</a></p>
       <p><a href="#">Project Link</a></p>
  </div>
   <img src = "@/assets/triangle.svg" alt="divider"/>
   <div class="posts">
     <h2> <router-link to="/posts">Posts</router-link></h2>
     <li v-for="post in posts" :key="post.id" >
      <router-link  :to="{ path: '/posts/'+post.id, params: {fileName: post.id }}">{{post.id}}</router-link>
    </li>
   </div>
   <br>
   <br>
   
   <div class='reason_icon'>
      <img src = "@/assets/logical_reason.svg" alt="title"/>
   </div>
  </div>
</template>
<script>



// import Notes from '../views/Notes.vue'
// @ is an alias to /src
console.log(process.env.NODE_ENV);
export default {
  name: 'Home',
  data() {
    return {
      posts:[
        {
          id: 'something'
        },
        {
          id: 'Post Title 2'
        }
      ]
    }
  },
}
</script>
<style scoped lang="scss">
.reason_icon{
  width: 4.375rem;
  height: 2.4375rem;
  position: absolute;
  right: 2.5rem;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>

