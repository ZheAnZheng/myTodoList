<template>
    <div class="container  ">
        <mission-button add-mode ></mission-button>
        <!-- v-for 迭代所有任務 -->

        <mission-button v-for="todo in todos" :key="todo.id" :todo="todo"  ></mission-button>
    </div>
    
</template>

<script>
import {ref} from "vue";
export default {
    created(){
        this.allTodoHandler();
    },
    setup(props) {
        const todos=ref([]);
       

        async function allTodoHandler(){
            const response =await fetch('http://localhost:3000/todos');
            const responseData=await response.json();
            
            todos.value=responseData;
            
        }
        console.log(props)
        
        
        
        return{
            
            allTodoHandler,
            todos
        }
    },
}
</script>