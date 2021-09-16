import { createRouter, createWebHistory } from 'vue-router'
import todoPage from "../views/TodoPage.vue"

const routes = [
  {
    path: '/',
    redirect:"/todo"
    
  },
  {
    path:"/todo",
    component:todoPage
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
