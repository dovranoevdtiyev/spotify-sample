import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Searchpage from '../views/Searchpage.vue'
import Librarypage from '../views/Librarypage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/profile',
      name:'profile',
      component:()=>import('../views/Profile.vue')
    },
    {
      path:'/search',
      name:'Searchpage',
      component:()=>import('../views/Searchpage.vue')
    },
    {
      path:'/library',
      name:'Librarypage',
      component:()=>import('../views/Librarypage.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
