
<template>
 <div>
  <div class="container mx-auto">
    <h1 class=" text-center font-bold text-xl hover:text-blue-400 my-10 cursor-default">WELCOME FOR YOUR ORDER</h1>

    <img src='../assets/pizza.jpg' alt="Pizza" class="mx-auto rounded mb-8 ">

  <div class="max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-full py-3 rounded-md flex cursor-pointer hover:bg-blue-700 bg-blue-400">
    <RouterLink class="text-center font-semibold w-full rounded-md" to="/pizzas/create">Place Your Order Here!!!</RouterLink>
  </div>
  </div>
  <div class="flex justify-center mt-4 cursor-default">
    <p class="text-blue-500 hover:shadow-md font-semibold hover:font-bold">{{ message }}</p>
</div>

 </div>

 

</template>
<script setup>
  import { useRouter } from 'vue-router';
  
    const router = useRouter();
    
 
    const message = router.currentRoute.value.query.message || '';

    
  


</script>
