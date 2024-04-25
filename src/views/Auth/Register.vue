<template>
       <div class="mt-4 shadow-sm w-50 rounded-4 m-auto">
        <div class=" bg-secondary-subtle w-100 rounded-top align-items-center px-4  ">
            <p class=" h-100 ">Sign Up</p>
        </div>
        <div class="mb-3 pb-2 d-flex align-items-center ms-3 border-bottom ">
            <label for="text" class="me-4">Username:</label>
            <input v-model="data.username" type="text" id="name" class="w-50 ms-5" required>
        </div>

        <div class="mb-3 pb-2 d-flex align-items-center ms-3 border-bottom ">
            <label for="Email" class="me-2">E-mail Address:</label>
            <input v-model="data.email" type="email" id="email" class="w-50" required>
        </div>

        <div class="mb-3 pb-2 d-flex align-items-center ms-3 border-bottom ">
            <label for="Pass" class="me-3">Password:</label>
            <input v-model="data.password" type="text" id="password" class="w-50 ms-4" required>
        </div>
        <div class="mb-3 pb-2 d-flex align-items-center ms-3 border-bottom ">
            <label for="Pass" class="me-3">Confirm Password:</label>
            <input v-model="data.c_password" type="text" id="c_password" class="w-50 ms-4" required>
        </div>
        <div class="w-100 d-flex  justify-content-center align-items-center">
            <button type="button" @click="sendDetails" class="bg-primary rounded-2 border-0 shadow-sm mb-2 ">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Register',
    data(){
        return { 
                data: {
                    username: '',
                    email: '',
                    password: '',
                    c_password: ''
                }

            }
    },
    methods: {
        async sendDetails(){
            try {
               await axios.post('http://pizza_api.test/api/register', this.data);
               console.log('Reg submitted successfully');
               alert('Regitration Succesfull');
            } catch (error) {
                alert('There is a problem with your submition');
                console.log(error);                
            };

            this.data = {
                username: '',
                email: '',
                password: '',
                c_password: ''
            }
        }
    }
}
</script>