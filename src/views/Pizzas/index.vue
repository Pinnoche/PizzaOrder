<template>
  <section class="p-10">
      <h1 class="text-xl md:text-3xl font-semibold mb-8 text-center">Pizza Orders</h1>
      
      <div v-if="data.pizzas.value && data.pizzas.value.length > 0">
          <div v-for="(pizza, index) in data.pizzas.value" :key="index" class="bg-gray-200 rounded-lg p-6 mx-auto mb-8 max-w-sm md:max-w-2xl">
              <h2 class="text-xl font-semibold mb-2"><span class="font-semibold">Customer:   </span>{{ pizza.name }}</h2>
              <p class="text-gray-700 mb-2"><span class="font-semibold">Type:</span> {{ pizza.type }}</p>
              <p class="text-gray-700 mb-2"><span class="font-semibold">Base:</span> {{ pizza.base }}</p>
              <p class="text-gray-700"><span class="font-semibold">Ordered at:</span> {{ formatCreatedAt(pizza.created_at)}}</p>
              <button @click="deleteOrder(pizza.id)" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">Complete Order</button>
          </div>
      </div>
      
      <div v-else>
          <p class="text-red-500 text-lg md:text-2xl mt-24 text-center">No Order Yet!!!</p>
      </div>
  </section>
  
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import Cookies from 'universal-cookie';
// import { useCountStore } from '@/stores/count';
import { format } from 'date-fns';

const cookies = new Cookies();
const router = useRouter();
//  const countStore = useCountStore();

 const data = {
  pizzas: ref([]),
  csrfToken: cookies.get('XSRF-TOKEN'),
 }

 const getPizzas = async() => { 
                try {
                  const res = await axios.get('/api/pizzas')
                  console.log(res.data.pizzas);
                  data.pizzas.value = res.data.pizzas;
                  // console.log(this.pizzas);                                           
                } catch (error) {
                  if(error.response && error.response.status == 401){
                    router.push('/login');
                  } else{
                    console.error('Error fetching pizzas:', error)
                  }
                  
                }  
                     
                  };
    

  const formatCreatedAt = (date) => {
      return format(new Date(date), 'yyyy-MM-dd HH:mm:ss');
    };

  onMounted(async () => { 
       await getPizzas();
    });


    const deleteOrder = async(pizzaId) => {
                try {
            
                  if(confirm('Are you sure, you want to complete the order?')){
                    
                   await axios.delete(`/api/pizzas/${pizzaId}/delete`, {
                      headers:{
                          'X-XSRF-TOKEN' : data.csrfToken
                      }
                     });
                  
                     await getPizzas();
                  }
                  
                } catch (error) {
                  console.log(error)
                }
      
              };

</script>