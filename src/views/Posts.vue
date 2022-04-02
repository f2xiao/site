<template>
   <div class="posts">
       <h2>Posts</h2>
       <li v-for="post in posts" :key="post.id" >
        <router-link  :to="{ path: '/posts/'+post.id, params: {fileName: post.id }}">{{post.id}}</router-link>
      </li>
  </div>
</template>

<script>
export default {
    name: 'Posts',
    data() {
    return {
      posts:[
        {
          id: 'Post Title 1'
        },
        {
          id: 'Post Title 2'
        }
      ]
    }
  },
}

</script>

<style>

</style>