import { defineStore } from 'pinia';
import Cookies from 'universal-cookie';
import axios from 'axios';


const cookies = new Cookies();

export const useCountStore = defineStore('count', {
    state: () => {
        return {
          pizzas: [],
          csrfToken: cookies.get('XSRF-TOKEN') || null
        };
    },

    getters: {
      count: (state) => state.pizzas.length,
    }, 

    actions: {
        
              async deleteOrder(pizzaId) {
                try {
            
                  if(confirm('Are you sure, you want to complete the order?')){
                    
                   await axios.delete(`/api/pizzas/${pizzaId}/delete`, {
                      headers:{
                          'X-XSRF-TOKEN' : this.csrfToken
                      }
                     });
                  
                     await this.getPizzas();
                  }
                  
                } catch (error) {
                  console.log(error)
                }
      
              },

              async getPizzas()  { 
                try {
                  const res = await axios.get('/api/pizzas')
                  console.log(res.data.pizzas);
                  this.pizzas = res.data.pizzas;
                  // console.log(this.pizzas);                                           
                } catch (error) {
                  if(error.response && error.response.status == 401){
                    this.router.push('/login');
                  } else{
                    console.error('Error fetching pizzas:', error)
                  }
                  
                }  
                     
                  },
                  get router() {
                    return this.$router;
                },
    }, 

});