import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@base/pages/home/vue'); /* webpackChunkName: 'community-control' */ 

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        }
    ]
})
