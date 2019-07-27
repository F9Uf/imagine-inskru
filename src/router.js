import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import personal from './views/Personal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/filter',
      name: 'filter',
      component: function () {
        return import('./views/filter.vue')
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: function () {
        return import('./views/Personal.vue')
      }
    },
    
  ]
})
