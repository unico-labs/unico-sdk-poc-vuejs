import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CameraCapture from '../views/CameraCapture.vue'
import PhotoResult from '../views/PhotoResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/capture',
    name: 'CameraCapture',
    component: CameraCapture
  },
  {
    path: '/photo-result',
    name: 'PhotoResult',
    component: PhotoResult,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router