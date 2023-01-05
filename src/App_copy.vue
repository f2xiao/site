<template>
  <div id="app">
    <router-view />
   <footer v-bind:style="{'text-align':'right'}"> <img width="50px" height="50px" v-bind:style="{'border-radius': '50%'}" src="./assets/icons/cat.svg" alt="My Cat"></footer>
  </div>
  
</template>

<style lang="scss" scoped>
 #app{
   position: relative;
   max-width: 36em;
   margin: 0 auto;
  //  padding-bottom: 2rem;
}

</style>

<script>
function setTheme(colorScheme){
   const sheets = document.getElementsByTagName('link');
   sheets[0].href = `${process.env.BASE_URL}favicon-${colorScheme}.svg`;
  sheets[2].href = `${process.env.BASE_URL}styles/atom-one-${colorScheme}.min.css`;
  document.body.setAttribute('theme', colorScheme);
}
 if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  // if user prefer light mode
  setTheme('light');
}

// watch for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    setTheme(newColorScheme);
});
export default{
   data() {
    return {
      posts:[],
      projects:[],
      miniJavaScriptApps:[]
    }
  },
  created: function(fileName='data.json'){
    let data = require(`@/../posts/${fileName}`);

    // store posts at local
    data.posts.map(item=>this.posts.push(item));
    // store posts and tags to store
    this.$store.commit("viewposts/init",this.posts);
    this.$store.commit("getPosts");
   
    // store projects at local
    data.projects.map(item=>this.projects.push(item));
    // store projects to store
    this.$store.commit("getProjects", this.projects);

     // store projects at local
    data.miniJavaScriptApps.map(item=>this.miniJavaScriptApps.push(item));
    // store projects to store
    this.$store.commit("getThreePillarsProjects", this.miniJavaScriptApps);

    document.title = 'Fangfang';
    
  }
}
</script>
