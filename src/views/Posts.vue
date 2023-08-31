<template>
   <div class="posts-view">
      <a class="styled-link" href="/site" aria-label="Home">←</a>
       <h2>Posts</h2>
       <p><button @click="showAll">Show All</button></p>
       <div class="tags">
         <button v-for="(value,name) in tags" :key="name">
           <span @click="showTaggedPosts(name)">#{{name}} ({{value}})</span> 
        </button>
       </div>
       <div 
       :class="{ notshow: !post.show }" 
       v-for="post in viewposts" 
       :key="post.filename" >
        <router-link  
        :to="{ path: '/posts/'+post.filename, params: {fileName: post.filename}}">
        {{post.filename}}</router-link>
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
      return this.$store.state.viewposts.tags;
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
  },
  created: function () {
    document.title = "Fangfang | Posts"
  }
}

</script>

