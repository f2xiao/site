<template>
   <div class="posts-view">
      <a class="styled-link" href="/site" aria-label="Home">←</a>
       <h2>Posts</h2>
       <div class="tags">
         <span class="tag" v-for="(value, name) in tags" :key="name">#{{name}} ({{value}}) </span>

       </div>
       <div v-for="post in posts" :key="post.title" >
        <router-link  :to="{ path: '/posts/'+post.title, params: {fileName: post.title }}">{{post.title}}</router-link>
       <p>{{post.des}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Posts',
  computed:{
    posts(){
      return this.$store.state.posts.posts;
    },
    tags(){
      return this.$store.state.posts.tagsMap;
    }
  }
}

</script>

