<template>
  <section class="p-10">
      <h1 class="text-xl md:text-3xl font-semibold mb-8 text-center">Pizza Orders</h1>
      
      <div v-if="pizzas.length > 0">
          <div v-for="(pizza, index) in pizzas" :key="index" class="bg-gray-100 rounded-lg p-6 mx-auto mb-8 max-w-sm md:max-w-2xl">
              <h2 class="text-xl font-semibold mb-2"><span class="font-semibold">Customer:   </span>{{ pizza.name }}</h2>
              <p class="text-gray-700 mb-2"><span class="font-semibold">Type:</span> {{ pizza.type }}</p>
              <p class="text-gray-700 mb-2"><span class="font-semibold">Base:</span> {{ pizza.base }}</p>
              <p class="text-gray-500"><span class="font-semibold">Created at:</span> {{ pizza.created_at }}</p>
              <button @click="countStore.deleteOrder(pizza.id)" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">Complete Order</button>
          </div>
      </div>
      
      <div v-else>
          <p class="text-red-500">Loading.....</p>
      </div>  
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCountStore } from '@/stores/count';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const countStore = useCountStore();

const pizzas= ref([]);

const getPizzas = async () => { 
            try {
              const res= await axios.get('/api/pizzas')
              console.log(res.data.pizzas);
              pizzas.value = res.data.pizzas;
                  
                  
            } catch (error) {
              if(error.response && error.response.status == 401){
                router.push('/login');
              } else{
                console.error('Error fetching pizzas:', error)
              }
              
            }     
                 
              };

  onMounted(getPizzas);
</script>