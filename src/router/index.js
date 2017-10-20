import Vue from 'vue'
import Router from 'vue-router'
import Contract from '@/components/Contract'
import Login from '@/components/Login'
import Select from '@/components/Selector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contract',
      name: 'Contract',
      component: Contract
    },{
      path:"/",
      name:"login",
      component:Login
    },{
      path:"/select",
      component:Select
    }
  ]
})
