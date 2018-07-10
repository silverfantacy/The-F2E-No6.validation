import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create_account',
      name: 'Create Account',
      component: () => import('@/pages/CreateAccount')
    },
    {
      path: '*',
      redirect: '/create_account'
    }
  ]
})
