<template>
    <div class="d-flex  align-items-end justify-content-center  bg-secondary shadow">
        <div class="position-absolute top-0 start-0" >
            <!-- offcanvas target -->
            <button class="btn btn-outline-secondary p-0 m-3" tabindex="-1" type="button" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTarget"> 
             <img id="menuIcon" src="../assets/menu.svg"  />
            </button>
           
        </div>
        <div class="p-4" >
            <h2 class="fw-bolder ">TODOLIST</h2>
        </div>
        
        <!-- offcanvas target -->
        <offcanvas-items></offcanvas-items>
        
        
    </div>
    
</template>


<script>
import OffcanvasItems from "./OffcanvasItems.vue";

export default{
    components:{OffcanvasItems},
    setup(){

    }
}
</script>
<style scoped>
    #menuIcon{
       
        width:3rem;
        margin:0;
    }
    
</style>