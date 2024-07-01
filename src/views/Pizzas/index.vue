<template>
  <section class="p-10">
      <h1 class="text-xl md:text-3xl font-semibold mb-8 text-center">Pizza Orders</h1>
     
      <div v-if="data.pizzas.value && data.pizzas.value.length > 0">
          <PizzaCard :data = "data" :deleteOrder = "deleteOrder" />
      </div>
      
      <div v-else>
          <p class="text-red-500 text-lg md:text-2xl mt-24 text-center">No Order Yet!!!</p>
      </div>
      
  </section>
  
</template>

<script setup>
import PizzaCard from '@/components/PizzaCard.vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import Cookies from 'universal-cookie';
// import { format } from 'date-fns';


const cookies = new Cookies();
const router = useRouter();


 const data = {
  pizzas: ref([]),
  csrfToken: cookies.get('XSRF-TOKEN'),
 }

 const getPizzas = async() => { 
                try {
                  const res = await axios.get('/api/pizzas');
                  data.pizzas.value = res.data.pizzas;
                } catch (error) {
                  if(error.response && error.response.status == 401){
                    router.push('/staff/login');
                  } else{
                    console.error('Error fetching pizzas:', error)
                  }
                  
                }  
                     
              };
    

  // const formatCreatedAt = (date) => {
  //     return format(new Date(date), 'yyyy-MM-dd HH:mm:ss');
  //   };

  onBeforeMount(async () => { 
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