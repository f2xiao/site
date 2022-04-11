<template>
  <div id="app">
    <router-view />
   <footer> <span>Fangfang</span></footer>
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
 if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  // if user prefer light mode
const sheets = document.getElementsByTagName('link');
console.log(sheets[2].href );
sheets[2].href = `${process.env.BASE_URL}styles/atom-one-light.min.css`;
document.body.setAttribute('theme', 'light');
}

// watch for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    const sheets = document.getElementsByTagName('link');
sheets[2].href = `${process.env.BASE_URL}styles/atom-one-${newColorScheme}.min.css`;
document.body.setAttribute('theme', newColorScheme);
});
</script>
