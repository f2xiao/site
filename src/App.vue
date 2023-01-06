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
  created: function () {
    this.$store.commit("viewposts/init", this.$store.state.posts);
    document.title = 'Fangfang';
  }
}
</script>
