import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import EditUser from '@/views/EditUser.vue'
import EditItem from '@/views/EditItem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/user/:id',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/edit/item/:id',
    name: 'EditItem',
    component: EditItem
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
