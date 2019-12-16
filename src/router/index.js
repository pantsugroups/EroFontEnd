import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: About
}
  // {
  //   path:'/game'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  saveScrollPostion: true,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'EroFE'
  next()
})

export default router
