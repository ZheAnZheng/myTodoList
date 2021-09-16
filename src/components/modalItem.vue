<template>


    <base-modal v-if="addMode" id="modalTarget" >
        <template v-slot:title >Create a TODO</template>
        <template v-slot:content>{{content}}</template>
    </base-modal>


    <base-modal v-else :id="id" >
        <template v-slot:title >{{title}}</template>
        <template v-slot:content>{{content}}</template>
    </base-modal>

</template>


<script>

import baseModal from "../UI/BaseModal.vue"
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
        
        return{
            
        }
    }
}
</script>
