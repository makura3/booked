import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/terminalReserve',
      name: 'terminalReserve',
      component: () => import('./views/TerminalReserve.vue')
    },
    {
      path: '/roomReserve',
      name: 'roomReserve',
      component: () => import('./views/RoomReserve.vue')
    }
  ]
})
