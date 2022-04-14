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
    data() {
        return {
            apps:[
        {
            "title":"Etch-A-Sketch",
            "link":"#",
            "des":"Sketch pad, hover mouse on desktop and just draw with finger or fingers on mobile devices"
        },
        {
            "title":"Calculator",
            "link":"#",
            "des":"Three themes calculator"
        },
        {
            "title":"Carousel Cards",
            "link":"#",
            "des":"No JavaScript, CSS only!"
        }
    ]
        }
    },
}
</script>