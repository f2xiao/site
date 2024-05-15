<template>
  <div>
    <router-link class="styled-link" to="/" aria-label="Home">←</router-link>
    <h2>Mini JavaScript Apps</h2>
    <div v-for="app in apps" :key="app.title">
      <card :app="app"></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card";
import { mapState } from "vuex";

export default {
  name: "MiniJavaScriptApps",
  components: {
    Card,
  },
  computed: mapState({
    apps: (state) => state.miniJavaScriptApps,
  }),
  created: function () {
    document.title = "Mini JavaScript Apps";
  },
};
</script>
