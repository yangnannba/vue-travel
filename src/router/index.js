import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Details from '@/views/details/Details'
import City from '@/views/city/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/',
      redirect: '/home'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})
