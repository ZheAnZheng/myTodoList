<template>
  <div class="container-flow">
    <the-header></the-header>
    
        <div
      id="carouselControl"
      class="carousel slide mt-2 mx-5"
      data-bs-ride="carousel"
    >
    <div class="d-gird justify-content-center bg-secondary rounded-top rounded-3 align-items-center">
      <p class="text-center fw-bold fs-2 align-self-center p-1 m-1">優先任務</p>
  <div class="carousel-inner  ">
        <div class="carousel-item active  d-flex justify-content-center  bg-danger bg-gradient border border-secondary rounded-3  border-5 ">
          
            <div class="p-3 d-grid ">
              <p class="fs-2 fw-bold text-center ">優先任務</p>
              <p class="fs-4 text-dark" ></p>
            </div>
            
          
        </div>
        <carousel-item
          v-for="topTodo in topTodos"
          :key="topTodo.id"
          :todo="topTodo"
        ></carousel-item>
      </div>
      <button v-if="haveTodos" class="carousel-control-prev" type="button" data-bs-target="#carouselControl" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button v-if="haveTodos" class="carousel-control-next" type="button" data-bs-target="#carouselControl" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

    </div>
    
    </div>
    
  

    <router-view />
  </div>
</template>


<script>
import TheHeader from "./components/TheHeader.vue";
import CarouselItem from "./components/carouselItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: { TheHeader, CarouselItem },
  setup() {
    const store = useStore();
    const topTodos = computed(function () {
      return store.getters["todo/getTopTodos"];
    });
    const  haveTodos= computed(function(){
      
      if(topTodos.value.length===0){
        return false;
      }else{
        return true;
      }
    })
    
    return {
      topTodos,
      haveTodos
    };
  },
};
</script>


<style>
html {
  font-size: 16px;
}
.carousel-item{
  height: 10rem;
}
</style>

