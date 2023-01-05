import Vue from 'vue'
import Vuex from 'vuex'

import viewposts from './viewposts.js'
import data from '@/data.json'


Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    projects: data.projects,
    posts: data.posts,
    miniJavaScriptApps:data.miniJavaScriptApps
  }),
  modules: {
    viewposts,
  }
})
