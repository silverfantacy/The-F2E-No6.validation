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
      path: '/general_infomation',
      name: 'General Infomation',
      component: () => import('@/pages/GeneralInfomation')
    },
    {
      path: '/update_profile_picture',
      name: 'Update Profile Picture',
      component: () => import('@/pages/UpdateProfilePicture')
    },
    {
      path: '/payment_method',
      name: 'Payment Method',
      component: () => import('@/pages/PaymentMethod')
    },
    {
      path: '/congratulations',
      name: 'Congratulations',
      component: () => import('@/pages/Congratulations')
    },
    {
      path: '*',
      redirect: '/create_account'
    }
  ]
})
