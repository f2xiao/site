<template>
  <div class="card">
       <div>
          <img src="" alt="" >
      </div>
      <div class="text">
          <h1>{{app.title}}</h1>
          <p>{{app.des}}</p>
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
    background: white;
}
</style>