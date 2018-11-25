import Vue from 'vue'
import Router from 'vue-router'
import Maisen from '@/components/maisen'
import Map from '../components/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'map'
    },
    {
      path: '/maisen',
      name: 'maisen',
      component: Maisen
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
