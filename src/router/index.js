import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@base/pages/HelloWorld/vue'); /* webpackChunkName: 'community-control' */ 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
