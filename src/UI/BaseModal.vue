<template>

    <div  :id="id" class=" modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title ">
                        <slot name="title"></slot>
                    </h5>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <h5>
                        <slot name="content"></slot>
                    </h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                    <button type="submit" v-if="id==='modalTarget'" class="btn btn-primary "   @click="submitTodo" >TODO</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    props:{
        id:String,
        
    },
    setup(_,context){
        function submitTodo(){
            
            context.emit('submit-todo')
        }
       
        return {
            submitTodo,
            
        }
    }
}
</script>