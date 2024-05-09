<template>
    <form class="mt-8 shadow-md bg-white rounded-lg overflow-hidden max-w-sm sm:max-w-md md:max-w-lg mx-auto" @submit.prevent="login">
    <div class="bg-gray-800 text-white py-3 px-6">
        <h2 class="text-2xl font-semibold">Login</h2>
    </div>
    <div class="p-6">
        <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
            <input v-model="data.form.email" type="email" id="email" class="w-full px-3 py-2 border rounded-md" >
            <span v-if="data.errors.value.email" class="text-red-500"> {{ data.errors.value.email[0] }}</span>
        </div>

        <div class="mb-6">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
            <input v-model="data.form.password" type="password" id="password" class="w-full px-3 py-2 border rounded-md" >
            <span v-if="data.errors.value.password" class="text-red-500"> {{ data.errors.value.password[0] }}</span>
        </div>

        <!-- <div class="mb-6">
            <input type="checkbox" id="mycheckbox" name="checkbox" class="mr-2">
            <label for="mycheckbox" class="text-gray-600">Remember Me</label>
        </div> -->

        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Login
        </button>
       
        <!-- <RouterLink to="/" class="block text-blue-500 mt-4 text-sm">Forgot Your Password?</RouterLink> -->
    </div>
</form>


</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const cookies = new Cookies();

    const data = {
            csrfToken: cookies.get('XSRF-TOKEN'),
                form: {
                    email: '',
                    password: ''
                },
                errors: ref([]),
            };

        
    
    
        const login = async () => {
            try {
                // console.log(data.csrfToken);
                
                 await axios.post('/login', data.form, {
                    headers: {
                        'X-XSRF-TOKEN': data.csrfToken
                    }
                });

                authStore.getUser();
                
            
                // authStore.authUser = response.data;

                // console.log(authStore.authUser);
                
                // Alert and navigate only after successfully updating authUser
                alert('Login Successful');
                router.push('/');
            } catch (error) {
                if (error.response.status === 422) {
                    // console.log(error.response)
                    data.errors.value = error.response.data.errors;
                    // console.log(data.errors.value.email)
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Network Error:', error.request);
                    alert('Network Error: Please check your internet connection');
                } else {
                    // Something else happened while setting up the request
                    console.error('Request Error:', error.message);
                    alert('An unexpected error occurred. Please try again later.');
                }
            }
        };

</script>