import { createStore } from 'vuex'
import todoModule from "./todo/todo.js"

export default createStore({
  namespace:true,
  modules:{todo:todoModule}

})
