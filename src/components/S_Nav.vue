<template>
    <nav class="bg-gray-800 p-4 w-full">
      <div class="max-w-full mx-auto flex items-center justify-between">

        <div class="flex-shrink-0">
          <a href="/" class="text-white font-bold text-lg"><img src="../assets/pizza.jpg" alt="Pizza" class=" w-14"></a>
        </div>
  
        <div class="hidden w-full ml-60 md:flex md:justify-between">
            <div>
                <RouterLink to="/" class="text-white text-lg hover:bg-gray-700 px-3 py-2 rounded-md">Home</RouterLink>
                <RouterLink to="/pizzas" class="text-white text-lg hover:bg-gray-700 px-3 py-2 rounded-md">Pizzas</RouterLink>
                <RouterLink to="/about" class="text-white text-lg hover:bg-gray-700 px-3 py-2 rounded-md">About</RouterLink>
            </div>
          <div class="md:flex md:justify-end">
            <section v-if="!authStore.staff" class="cursor-pointer">
              <RouterLink to="/staff/login" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Login</RouterLink>
              <!-- <RouterLink to="/register" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Register</RouterLink> -->
            </section>
            <section v-else class="cursor-pointer">
              <a class="text-white hover:bg-gray-700 px-3 py-2 rounded-md" @click="logOut">Logout</a>
            </section>
          </div>
          
        </div>
  
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <path v-if="!isMenuOpen">
              <img src="../assets/menu2.png" alt="menu">
            </path>
            <path v-else>
              <img src="../assets/menu2.png" alt="menu">
            </path>
          </button>
        </div>
  
        <div v-if="isMenuOpen" class="md:hidden absolute top-20 right-1 font-semibold z-10">
          <div class="bg-white rounded-lg shadow-lg pt-2 pb-3 space-y-1 ">
            <RouterLink to="/" class="hover:bg-gray-700 block px-3 py-2 rounded-md">Home</RouterLink>
            <RouterLink to="/about" class="hover:bg-gray-700 block px-3 py-2 rounded-md">About</RouterLink>
            <RouterLink to="/pizzas" class="hover:bg-gray-700 block px-3 py-2 rounded-md">Pizzas</RouterLink>
            <section v-if="!authStore.staff" class="cursor-pointer">
              <RouterLink to="/staff/login" class=" hover:bg-gray-700 block px-3 py-2 rounded-md">Login</RouterLink>
              <!-- <RouterLink to="/register" class=" hover:bg-gray-700 block px-3 py-2 rounded-md">Register</RouterLink> -->
            </section>
            <section v-else class="cursor-pointer">
              <a class="hover:bg-gray-700 block px-3 py-2 rounded-md" @click="logOut">Logout</a>
            </section>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
 
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '../stores/auth';
// import { defineProps } from 'vue';
import axios from 'axios';
import { ref } from 'vue';

  
    const isMenuOpen = ref(false);
    const authStore = useAuthStore();

   
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    // const props = defineProps({
    //   data: {
    //     type: Object,
    //     required: true
    //   }
    // })

    const logOut = async() =>{
            await axios.post('/staff/logout' 
            );
            authStore.authStaff = null;
            window.location.reload();
        };

</script>