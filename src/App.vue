<template>
  <div id="app">
    <router-view />
   <footer> <span>F2xiao</span></footer>
  </div>
</template>

<style lang="scss" scoped>
 #app{
   position: relative;
   max-width: 36em;
   margin: 0 auto;
   padding: 0 auto;
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
    }
  },
  created: function(fileName='data.json'){
    let data = require(`@/../posts/${fileName}`);

    // store posts at local
    data.posts.map(item=>this.posts.push(item));
    // store posts to store
    this.$store.commit("posts/getPosts", this.posts);

    data.projects.map(item=>this.projects.push(item));
    this.$store.commit("posts/getProjects", this.projects);

    document.title = 'Fangfang';
    
  }
}
</script>
