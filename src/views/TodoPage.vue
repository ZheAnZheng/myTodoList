<template>
    <div class="container  ">
        <mission-button add-mode  ></mission-button>
        <!-- v-for 迭代所有任務 -->

        <mission-button v-for="todo in todos" :key="todo.id" :todo="todo" :id="todo.id" ></mission-button>
    </div>
    
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex"
export default {
    created(){
        this.$store.dispatch('todo/setTodos');
    },
    setup() {
        
       const store=useStore();

       const todos=computed(function(){
          
           return store.getters['todo/getTodos']
       });

        
        
        
        
        
        
        return{
            
            
            todos
        }
    },
}
</script>