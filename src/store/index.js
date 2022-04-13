import Vue from 'vue'
import Vuex from 'vuex'

import viewposts from './viewposts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    projects: [],
    posts:[],
  }),
  mutations: {
    getProjects(state, newProjects) {
      state.projects = newProjects;
      // console.log(state.projects);
    },
    getPosts(state) {
      state.posts = state.viewposts.viewposts.slice(state.viewposts.viewposts.length-2);
    }
  },
  modules: {
    viewposts,
  }
})
