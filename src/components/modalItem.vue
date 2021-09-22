<template>


    <base-modal v-if="addMode" id="modalTarget"  @submit-todo="setTodoHandler" >
        <template v-slot:title >Create a Todo</template>
        <template v-slot:content>
            <form class="needs-validation " novalidate >
               <div class=" mb-2  was-validated" >
                <label for="todoTitle" class="form-label">Todo Title</label>
                <textarea   rows="1" placeholder="set your todo" id="todoTitle" class="form-control " v-model.trim="todoTitle.title"  required></textarea>
                <div class="invalid-feedback">
                Input your Goal
                </div>
            </div>
            <div >
                <label for="todoContent" class="form-label">Todo Content</label>
                <textarea  rows="5" placeholder="Detail" id="todoContent" class="form-control"  v-model="todoContent"></textarea>
                
            </div> 
            
            </form>
            
        </template>
    </base-modal>


    <base-modal v-else :id="id" >
        <template v-slot:title >{{title}}</template>
        <template v-slot:content>{{content}}</template>
    </base-modal>

</template>


<script>

import baseModal from "../UI/BaseModal.vue"
import {ref,computed,provide} from "vue"
import {useStore} from "vuex"

export default {
    components:{
        baseModal
    },
    props:{
        id:String,
        title:String,
        content:String,
        addMode:{
            type:Boolean,
            default:false,
            required:false
        }
    },
    setup(){

        const store = useStore();
        
        const todoTitle=ref({
            title:'',
            validation:false
        });
        const todoContent=ref('');

        const validate=computed(function(){
            checkTitleValidate();
            
            return todoTitle.value.validation
        })

        provide('validation',validate);
        
       //缺認title validation
       function checkTitleValidate(){
           if(todoTitle.value.title === '' || todoTitle.value.title === false){
               todoTitle.value.validation=false;
           }else{
               todoTitle.value.validation=true;
           }
       }

       function IdCreater(){
        //    let num =Math.floor(Math.random()*10000);
           let uId=Math.floor(Math.random()*10000)+'-'+Math.floor(Math.random()*10000)+'-'+Math.floor(Math.random()*10000);
           return{
               id:uId
           }
       }
       
       //上傳DB程序
    
        async function setTodoHandler(){
            
             const newTodo=ref({
                 id:IdCreater().id,
                title:todoTitle.value.title,
                content:todoContent.value,
                top:false
            })
            
            checkTitleValidate();

         
            if(todoTitle.value.validation===false){
                return ;
            }else{
                store.dispatch('todo/newTodo',newTodo.value);
                todoTitle.value.title='';
                todoContent.value='';
            }
        }


        return{
            todoTitle,
            todoContent,
            validate,
            setTodoHandler
        }
    }
}
</script>
