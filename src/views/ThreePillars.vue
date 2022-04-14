<template>
   <div>
      <a class="styled-link" href="/site" aria-label="Home">←</a>
       <h2>Three Pillars of Frontend</h2>
       <div 
       v-for="app in apps" 
       :key="app.title" >
       <card :app="app"></card>
      </div>
  </div>
</template>

<script>
import Card from "@/components/card"
export default {
    name:"ThreePillars",
    components:{
        Card
    },
    computed:{
        apps(){
            return this.$store.state.threePillarsProjects
        }
    }
}
</script>