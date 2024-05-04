<template>
  <section v-if="countStore.pizzas === 'No record found'" class="p-10">
    <h1 class="text-xl md:text-3xl font-semibold mb-8 text-center">Pizza Orders</h1>
     <p class="text-red-500 text-lg md:text-2xl mt-24 text-center">{{ countStore.pizzas }}!!!</p> 
  </section>

  <section v-else class="p-10">
      <h1 class="text-xl md:text-3xl font-semibold mb-8 text-center">Pizza Orders</h1>
      
      <div v-if="countStore.pizzas.length > 0">
          <div v-for="(pizza, index) in countStore.pizzas" :key="index" class="bg-gray-100 rounded-lg p-6 mx-auto mb-8 max-w-sm md:max-w-2xl">
              <h2 class="text-xl font-semibold mb-2"><span class="font-semibold">Customer:   </span>{{ pizza.name }}</h2>
              <p class="text-gray-700 mb-2"><span class="font-semibold">Type:</span> {{ pizza.type }}</p>
              <p class="text-gray-700 mb-2"><span class="font-semibold">Base:</span> {{ pizza.base }}</p>
              <p class="text-gray-700"><span class="font-semibold">Ordered at:</span> {{ formatCreatedAt(pizza.created_at)}}</p>
              <button @click="countStore.deleteOrder(pizza.id)" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">Complete Order</button>
          </div>
      </div>
      
      <div v-else>
          <p class="text-red-500">Loading.....</p>
      </div>
  </section>
  
</template>

<script>
import { onMounted } from 'vue';
import { useCountStore } from '@/stores/count';
import { format } from 'date-fns';


export default {
  setup() {
    const countStore = useCountStore();


    onMounted(async () => {
      
        await countStore.getPizzas();
   
        });

        const formatCreatedAt = (date) => {
      return format(new Date(date), 'yyyy-MM-dd HH:mm:ss');
    };

    return {
      countStore,
      formatCreatedAt
    }
},

}

</script>