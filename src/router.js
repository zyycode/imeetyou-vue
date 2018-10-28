import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import User from './views/User.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Publish from './views/Publish.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/publish',
      component: Publish
    }
  ]
})
