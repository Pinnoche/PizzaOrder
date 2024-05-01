
<template>
 <div>
  <div class="container mx-auto">
    <h1 class=" text-center font-bold text-xl hover:text-blue-400 my-10 cursor-default">WELCOME FOR YOUR ORDER</h1>

    <img src='../assets/pizza.jpg' alt="Pizza" class="mx-auto rounded mb-8 ">

  <div class="w-full py-3 rounded-md border-1 flex justify-center items-center cursor-pointer hover:bg-blue-700 bg-blue-400">
    <RouterLink class="text-center font-semibold w-full rounded-md" to="/pizzas/create">Place Your Order Here!!!</RouterLink>
  </div>
  </div>
  <div class="d-flex justify-content-center">
    <p class="text-primary">{{  message }}</p>
  </div>
 </div>

 

</template>
<script setup>
  import { useRouter } from 'vue-router'; 
  import {ref, onMounted} from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import axios from 'axios';

    const router = useRouter();
    const authStore = useAuthStore();
 
    const message = router.currentRoute.value.query.message || '';

    onMounted( () => {
       authStore.getUser();
      //  console.log(authStore.authUser);
      // console.log(data.data);
      // data.data = authStore.user;
      // console.log(authStore.user);
    });
  


</script>
