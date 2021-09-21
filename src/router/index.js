import { createRouter, createWebHistory } from 'vue-router'
import todoPage from "../views/TodoPage.vue"
import finishedPage from "../views/FinishTodo.vue"
const routes = [
  {
    path: '/',
    redirect:"/todo"
    
  },
  {
    path:'/finished',
    component:finishedPage
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
