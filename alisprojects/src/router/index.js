import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FileUpload from "../views/FileUpload";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fileupload',
    name: 'FileUpload',
    component: FileUpload
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
