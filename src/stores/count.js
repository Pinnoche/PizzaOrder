import { defineStore } from 'pinia';
import Cookies from 'universal-cookie';
import axios from 'axios';


const cookies = new Cookies();

export const useCountStore = defineStore('count', {
    state: () => {
        return {
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
                     this.router.push('/pizzas');
                  }
                  
                } catch (error) {
                  console.log(error)
                }
      
              },
      
    }, 

});