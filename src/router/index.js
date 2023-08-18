import Vue from 'vue'
import VueRouter from 'vue-router'
import ClubView from '../views/ClubView.vue'
import ClubPage from '../pages/ClubPage.vue'
import BarPage from '../pages/BarPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'clubview',
    redirect: '/club',
    component: ClubView,
    children: [
      {
        path: 'club',
        name: 'club',
        component: ClubPage
      },
      {
        path: 'bar',
        name: 'bar',
        component: BarPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
