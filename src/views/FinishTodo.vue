<template>
    
    <div class="container  ">
      

        <mission-button v-for="finishedTodo in finishedTodos" :key="finishedTodo.id" :todo="finishedTodo" :id='finishedTodo.id'  done-mode></mission-button>
    </div>
    
</template>

<script>
import {computed} from "vue";
import {useStore} from 'vuex'
export default {
    created(){
        this.$store.dispatch('todo/setFinishedTodos')
    },
    setup() {
        
        const store=useStore();
        const finishedTodos=computed(function(){
            return store.getters['todo/getFinishedTodos']
        });

        return {
            
            finishedTodos
        }
    },
}
</script>
