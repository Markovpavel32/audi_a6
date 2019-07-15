import Vue from 'vue'
import Router from 'vue-router'
import Root from '../components/Root'
import InfoPage from '../components/InfoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/info',
      name: 'info-page',
      component: InfoPage
    }
  ]
})
