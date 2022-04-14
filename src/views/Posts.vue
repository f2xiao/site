<template>
   <div class="posts-view">
      <a class="styled-link" href="/site" aria-label="Home">←</a>
       <h2>Posts</h2>
       <p><button @click="showAll">Show All</button></p>
       <div class="tags">
         <button v-for="(value,name) in tags" :key="name">
           <span @click="showTaggedPosts(name)">#{{name}} ({{value.count}})</span> 
        </button>
       </div>
       <div 
       :class="{ notshow: !post.show }" 
       v-for="post in viewposts" 
       :key="post.title" >
        <router-link  
        :to="{ path: '/posts/'+post.title, params: {fileName: post.title }}">
        {{post.title}}</router-link>
       <p>{{post.des}}</p>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Posts',
  computed:{
    viewposts(){
      return this.$store.state.viewposts.viewposts;
    },
    tags(){
      return this.$store.state.viewposts.tagsMap;
    }
  },
  methods:{
     showTaggedPosts(name){
       this.viewposts.forEach(post => {
               if (post.tag.includes(name)) {
                post.show = true;
               } else {
                post.show = false;
               }
           })
     },
     showAll(){
       this.viewposts.forEach(post => post.show=true )
     }
  }
}

</script>

