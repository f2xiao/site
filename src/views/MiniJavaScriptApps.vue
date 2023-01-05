<template>
   <div>
      <a class="styled-link" href="/site" aria-label="Home">←</a>
       <h2>Mini JavaScript Apps</h2>
       <div 
       v-for="app in apps" 
       :key="app.title" >
       <card :app="app"></card>
      </div>
  </div>
</template>

<script>
import Card from "@/components/card"
import { mapState } from 'vuex'


export default {
    name:"MiniJavaScriptApps",
    components:{
        Card
    },
    computed:mapState({
    apps: state => state.miniJavaScriptApps
  }),
    created: function(){
        document.title = "Mini JavaScript Apps"
    }
}
</script>