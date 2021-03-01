import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/StoreTest'
  },
  {
    path: '/StoreTest',
    name: 'StoreTest',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/StoreTest.vue')
  },

  {
    path: '/getStoreData',
    name: 'GetStoreData',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/GetStoreData.vue')
  },
  {
    path: '/ApiTest',
    name: 'ApiTest',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ApiTest.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
