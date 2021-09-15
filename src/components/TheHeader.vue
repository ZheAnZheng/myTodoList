<template>
    <div class="row align-items-center bg-secondary bg-gradient">
        <div class="col-sm-2 col-6" >
            <button class="btn btn-outline-secondary p-0 m-3" tabindex="-1" type="button" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTarget"> 
             <img id="menuIcon" src="../assets/menu.svg"  />
            </button>
           
        </div>
        <div class="col-sm offset-sm-3 col">
            <h2 class="fw-bolder">TODOLIST</h2>
        </div>
        
        <div id="offcanvasTarget" class="offcanvas offcanvas-start bg-secondary bg-gradient">
            <offcanvas-items></offcanvas-items>
        </div>
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