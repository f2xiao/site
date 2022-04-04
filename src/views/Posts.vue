<template>
   <div class="posts">
       <h2>Posts</h2>
       <div v-for="post in posts" :key="post.title" >
        <router-link  :to="{ path: '/posts/'+post.title, params: {fileName: post.title }}">{{post.title}}</router-link>
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
          title: 'Est atque quodam',
          des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
          title: 'How to create a UI library for Vue',
           des: "How to create a UI library for Vue"
        }
      ]
    }
  },
}

</script>

<style>

</style>