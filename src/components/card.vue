<template>
  <div class="card">
       <div class="img">
          <img :src="imgUrl" :alt="app.title" >
      </div>
      <div class="text">
          <h1><a :href="app.link">{{app.title}}</a></h1>
          <p>{{app.des}}</p>
      </div>
  </div>
</template>

<script>

export default {
    props:['app'],
    name: 'Card',
    computed:{
        imgUrl(){
            return require('@/assets/img/'+this.app.img);
        }
    }
}
</script>

<style scoped lang="scss">
.card{
    background: white;
    .img{
        width:100%;
        img{
            display: block;
            width: 100%; 
        }
    }
}
</style>