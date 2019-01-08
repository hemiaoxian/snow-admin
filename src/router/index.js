import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Forget from '@/views/forget/forget'
import Register from '@/views/register/register'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
