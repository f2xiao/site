<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
 @import './assets/styles/new.css';

 #nav{
   position: fixed;
   right: 2rem;
   top: 50%;
   transform: translateY(-3.5rem);
   
   a{
     display:block;
     text-decoration: none;
     border: 1px solid #ccc;
     width: 3rem;
     height: 3rem;
     border-radius: 50%;
     text-align: center;
     line-height: 3rem;
     font-size:.8rem;
     margin-top: 1rem;
   }
 }
</style>
