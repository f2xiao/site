import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Posts from '@/views/Posts.vue'
import Post from '@/views/Post.vue'
import ThreePillars from '@/views/ThreePillars.vue'
import NotFound from '@/views/errors/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/home',
    redirect:'/'
  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Posts
  },
  {
    path: '/posts/:fileName', component: Post, props:true
    
  },
  {
    path: '/three-pillars-of-frontend', component: ThreePillars,props:true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


export default router
