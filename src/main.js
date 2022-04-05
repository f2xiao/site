import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import './assets/styles/reset.css';
import './assets/styles/new.css';
import 'highlight.js/styles/atom-one-light.css';



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
