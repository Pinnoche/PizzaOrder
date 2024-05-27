<template>
<form @submit.prevent="signUp" class="form">
    <div class="bg-gray-800 text-white py-3 px-6">
        <h2 class="text-2xl font-semibold">Sign Up</h2>
    </div>
    <div class="p-6">
        <div class="mb-6">
            <label for="username" class="block text-gray-700 font-bold mb-2">Username:</label>
            <input v-model="data.form.username" type="text" id="username" class="w-full px-3 py-2 border rounded-md" >
            <span v-if="data.errors.value.username" class="text-red-500"> {{ data.errors.value.username[0] }}</span>
        </div>

        <div class="mb-6">
            <label for="email" class="block text-gray-700 font-bold mb-2">E-mail Address:</label>
            <input v-model="data.form.email" type="email" id="email" class="w-full px-3 py-2 border rounded-md" >
            <span v-if="data.errors.value.email" class="text-red-500"> {{ data.errors.value.email[0] }}</span>
        </div>

        <div class="mb-6">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
            <input v-model="data.form.password" type="password" id="password" class="w-full px-3 py-2 border rounded-md" >
            <span v-if="data.errors.value.password" class="text-red-500"> {{ data.errors.value.password[0] }}</span>
        </div>

        <div class="mb-6">
            <label for="Confirm_password" class="block text-gray-700 font-bold mb-2">Confirm Password:</label>
            <input v-model="data.form.confirm_password" type="password" id="c_password" class="w-full px-3 py-2 border rounded-md" >
            <span v-if="data.errors.value.confirm_password" class="text-red-500"> {{ data.errors.value.confirm_password[0] }}</span>
        </div>
<div class="flex justify-between items-center">
    <button type="submit" class="submitBtn">Submit</button>
    <span class="text-blue-500 text-sm">
        <RouterLink to="/login">Already A Member?</RouterLink>
    </span>
</div>
           
    </div>
</form>

</template>

<script setup>
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const cookies = new Cookies();

  const  data = {
            csrfToken: cookies.get('XSRF-TOKEN'),
            form: {
                username: '',
                email: '',
                password: '',
                confirm_password: ''
            },
            errors: ref([])

            };
  

        const signUp = async () => {
            data.errors.value = [];  
            try {
              await axios.post('/register', data.form, {
                headers:{
                    'X-XSRF-TOKEN' : data.csrfToken
                }
               });
              
                console.log('Reg submitted successfully');
               alert('Regitration Succesfull');
               router.push('/login');
               
            } catch (error) {
               if(error.response.status === 422){
                    data.errors.value = error.response.data.errors
               }              
            };
            
        
        };
</script>