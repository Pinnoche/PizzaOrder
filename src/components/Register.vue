<template>
<form @submit.prevent="signUp" class="mt-8 shadow-md bg-white rounded-lg overflow-hidden max-w-lg mx-auto">
    <div class="bg-gray-800 text-white py-3 pl-6">
        <h2 class="text-2xl font-semibold">Sign Up</h2>
    </div>
    <div class="p-6">
        <div class="mb-6">
            <label for="username" class="block text-gray-700 font-bold mb-2">Username:</label>
            <input v-model="data.form.username" type="text" id="username" class="w-full px-3 py-2 border rounded-md" required>
        </div>

        <div class="mb-6">
            <label for="email" class="block text-gray-700 font-bold mb-2">E-mail Address:</label>
            <input v-model="data.form.email" type="email" id="email" class="w-full px-3 py-2 border rounded-md" required>
        </div>

        <div class="mb-6">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
            <input v-model="data.form.password" type="password" id="password" class="w-full px-3 py-2 border rounded-md" required>
        </div>

        <div class="mb-6">
            <label for="c_password" class="block text-gray-700 font-bold mb-2">Confirm Password:</label>
            <input v-model="data.form.c_password" type="password" id="c_password" class="w-full px-3 py-2 border rounded-md" required>
        </div>

        <div class="flex justify-center items-center">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Submit
            </button>
        </div>
    </div>
</form>

</template>

<script setup>
import { useRouter } from 'vue-router';
import Cookies from 'universal-cookie';
import axios from 'axios'

const router = useRouter();
const cookies = new Cookies();

  const  data = {
        
            csrfToken: cookies.get('XSRF-TOKEN'),
                form: {
                    username: '',
                    email: '',
                    password: '',
                    c_password: ''
                }

            };
  

        const signUp = async () => {
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
                alert('There is a problem with your submition');
                console.log(error);                
            };
            
        
        };
</script>