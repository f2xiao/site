import Vue from 'vue'
import Vuex from 'vuex'

import posts from './posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
  }
})
