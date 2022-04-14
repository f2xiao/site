<template>
  <div class="card">
      <div class="text">
          <h1>{{app.title}}</h1>
          <p>des</p>
      </div>
      <div>
          <img src="" alt="" >
      </div>
  </div>
</template>

<script>
export default {
    props:['app'],
    name: 'Card'
}
</script>

<style>
.card{
    background: pink;
}
</style>