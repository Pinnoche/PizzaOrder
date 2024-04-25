<template>
    <div>
      <h1>Pizza Orders</h1>
      <div v-if="this.pizzas.length > 0">
        <ul v-for="(pizza, index) in this.pizzas" :key="index" class="list-group list-group-flush mb-4 ">
        <li class="list-group-item">{{ pizza.name}}</li>
        <li class="list-group-item">{{ pizza.type }}</li>
        <li class="list-group-item">{{ pizza.base }}</li>
        <li class="list-group-item disabled">{{ pizza.created_at}}</li>
        <button type="button" class="btn btn-danger col-sm-2 float-sm-end mt-2" @click="deleteOrder(pizza.id)">Complete Order</button>
      </ul>
      
      </div>

      <div v-else>
        <p class=" text-danger">Loading.....</p>
      </div>
      

    </div>
  </template>

<script>

import axios from 'axios';

axios.defaults.withCredentials = true;

export default{
    name:'PizzaView',
    data(){
        return {
            pizzas: [],
            // created_at: '2024-04-17T14:51:55.000000Z'
            
        }
    },
    mounted(){
        this.getPizzas();
        
    },
  //   computed: {
  //   formattedCreatedAt() {
  //     // Convert createdAt to a Date object
  //     const date = new Date(this.pizza.created_at);

  //     // Format the createdAt date using date-fns
  //     return format(date, "MMMM dd, yyyy, hh:mm:ss a");
  //   }
  // },



    methods:{
       async getPizzas(){      
           const res= await axios.get('http://pizza_api.test/api/pizzas')
            
                this.pizzas = res.data.pizzas
            
        },

        async deleteOrder(pizzaId){
          try {
      
            if(confirm('Are you sure, you want to complete the order?')){
              
             await axios.delete(`http://pizza_api.test/api/pizzas/${pizzaId}/delete`)
            }
            console.log(res)
          } catch (error) {
            console.log(error)
          }

          this.getPizzas();
          
        }
    },
}
</script>