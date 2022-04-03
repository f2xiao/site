<template>
   <div class="posts">
       <h2>Posts</h2>
       <div v-for="post in posts" :key="post.id" >
        <router-link  :to="{ path: '/posts/'+post.id, params: {fileName: post.id }}">{{post.id}}</router-link>
       <p>{{post.des}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Posts',
    data() {
    return {
      posts:[
        {
          id: 'Est atque quodam',
          des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
          id: 'Post Title 2',
           des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
      ]
    }
  },
}

</script>

<style>

</style>