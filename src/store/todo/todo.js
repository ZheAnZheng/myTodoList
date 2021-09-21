export default {
  namespaced:true,
    state: {
      todos:[],
      finishedTodos:[]
    },
    getters:{
      getTodos(state){
        return state.todos;
      },
      getFinishedTodos(state){
        return state.finishedTodos;
      }
    },
    mutations: {  
      setTodos(state,payload){
        state.todos=payload;
      },
      setFinishedTodos(state,payload){
        state.finishedTodos=payload;
      }
    },
    actions: {
      async setTodos(context){
        const response = await fetch('http://localhost:3000/todos');
        const responseData =await response.json();
        
        context.commit('setTodos',responseData);
      },
      async setFinishedTodos(context){
        const response=await fetch("http://localhost:3000/finishedTodos");
        const responseData=await response.json();
        context.commit('setFinishedTodos',responseData)

      },

      async  completeTodo(context,payload){

        await fetch('http://localhost:3000/finishedTodos',{
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      })
     
      await fetch(`http://localhost:3000/todos/${payload.id}`,{
        method:'DELETE'
      })

      context.dispatch('setTodos');
    },
    async newTodo(context,payload){
      const response= await fetch('http://localhost:3000/todos',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(payload)
                    
                })
                
                const responseData= await response.json();
                
                if(!response.ok){
                    const error=new Error(responseData.message)
                    throw error;
                }
                context.dispatch('setTodos');
    },
    async deleteTodo(context,payload){
      if(payload.type==='todo'){
        await fetch(`http://localhost:3000/todos/${payload.id}`,{
        method:"DELETE"
        
      })
      context.dispatch('setTodos');
      }else{
        console.log(payload.id)
        await fetch(`http://localhost:3000/finishedTodos/${payload.id}`,{
        method:"DELETE"
      })
      context.dispatch('setFinishedTodos');
      }
      
      
    },
    async finishedTodosReduction(context,payload){
      await fetch('http://localhost:3000/todos',{
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      })
     
      await fetch(`http://localhost:3000/finishedTodos/${payload.id}`,{
        method:'DELETE'
      })
      context.dispatch('setFinishedTodos');
    }
    
  }
}