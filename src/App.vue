<template>
  <div id="app">
    <router-view />
      <img class="logo" src = "@/assets/logical_reason.svg" alt="title"/>
  </div>
</template>

<style lang="scss" scoped>
 #app{
   position: relative;
   max-width: 36rem;
   margin: 0 auto;
   padding: 0 auto;

   .logo{
  width: 4.375rem;
  height: 2.4375rem;
  position: absolute;
  right: 2.5rem;
  img{
    width: 100%;
    height: 100%;
  }
}
  }

</style>

<script>

</script>
