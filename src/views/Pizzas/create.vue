<template>
    <div>
    <h1 class=" mb-lg-5 text-center text-primary">Fill Your Pizza Order Form</h1>

    <form class="row g-4 w-100 needs-validation" @submit.prevent="savePizza">

<div class="container-fluid float-center bg-dark text-white rounded w-50">
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
    <div class="col-12 mb-2">
        <label for="fullName" class="form-label">Full name</label>
        <input v-model="model.pizza.name" type="text" class="form-control" id="fullName" required>
        <div class="valid-feedback">
            Looks good!
        </div>
        <div class="invalid-feedback">
            Please enter your full name.
        </div>
    </div>

    <div class="col-md-4 mb-2">
        <label for="pizzaType" class="form-label">Your Pizza Type</label>
        <select v-model="model.pizza.type" name="type" class="form-select" id="pizzaType" aria-label="Default select example" required>
            <option selected disabled value="">Select Your Type</option>
            <option value="European">European</option>
            <option value="Hawaiian">Hawaiian</option>
            <option value="Mexican">Mexican</option>
        </select>
        <div class="invalid-feedback">
            Please select your pizza type.
        </div>
    </div>

    <div class="col-md-4 mb-2">
        <label for="pizzaBase" class="form-label">Your Pizza Base</label>
        <select v-model="model.pizza.base" name="base" class="form-select" id="pizzaBase" aria-label="Default select example" required>
            <option selected disabled value="">Select Your Base</option>
            <option value="Double Sausage">Double Sausage</option>
            <option value="Pepper and Onions">Pepper and Onions</option>
            <option value="Single Sausage">Single Sausage</option>
        </select>
        <div class="invalid-feedback">
            Please select your pizza base.
        </div>
    </div>

    <div class="col-12 mb-2">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="agreeCheck" required>
            <label class="form-check-label" for="agreeCheck">
                Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
                You must agree before submitting.
            </div>
        </div>
    </div>

    <div class="col-12 mb-4">
        <button class="btn btn-primary" type="submit">Submit Order</button>
    </div>

</div>

</form>

</div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'PizzaCreate',
        data(){
            return { 
                model: {
                    pizza: {
                        name: '',
                        type: '',
                        base: ''
                    }
                }
                
            }
        },
   

        methods: {
            
           async savePizza(){
                try {
                    await axios.post('http://pizza_api.test/api/pizzas', this.model.pizza);
                    console.log('everything is fine in this block');
                    this.$router.push({ path: '/', query: { message: 'Thank you Customer, See you again!!!' } });
                } catch (error) {
                    console.log(error)
                    console.log('problem with the request')
                }


               

                    

                this.model.pizza = {
                        name: '',
                        type: '',
                        base: ''
                    }
                    
                }
            }

    }
    
</script>