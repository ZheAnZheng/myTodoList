<template>
    <div class="carousel-item  justify-content-center   bg-danger bg-gradient border border-secondary rounded-3  border-5">
          
            <div class="p-3 d-grid h-auto d-inline-block">
              <p class="fs-2 fw-bold text-center ">{{todo.title}}</p>
              <p class="fs-4 text-dark text-center">{{todo.content}}</p>
            </div>
            
          
        </div>
</template>

<script>
export default {
    props:{
        todo:Object
    },
    setup() {
        
    },
}
</script>