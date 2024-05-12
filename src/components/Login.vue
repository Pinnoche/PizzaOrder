<template>
    <form class="form" @submit.prevent="login">
    <div class="bg-gray-800 text-white py-3 px-6">
        <h2 class="text-2xl font-semibold">Login</h2>
    </div>
    <div class="p-6">
        <div v-if="data.notification.value" class="success">
            <span> Login Successful </span>
        </div>
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

        <button type="submit" class="submitBtn">
            Login
        </button>
       
        <RouterLink to="/forgotPassword" class="block text-blue-500 mt-4 text-sm">Forgot Your Password?</RouterLink>
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
                notification: ref(null)
            };

        
    
    
        const login = async () => {
            data.errors.value = [];
            try {
                 const res = await axios.post('/login', data.form, {
                    headers: {
                        'X-XSRF-TOKEN': data.csrfToken
                    }
                });

                if(res.status === 204){
                    data.notification.value = res.status;
                    authStore.getUser();
                }
                setTimeout( () => {
                    router.push('/');
                }, 2000)
            } catch (error) {
                if (error.response.status === 422) {
                    data.errors.value = error.response.data.errors;
                } else if (error.request) {
                    console.error('Network Error:', error.request);
                    alert('Network Error: Please check your internet connection');
                } else {
                    console.error('Request Error:', error.message);
                    alert('An unexpected error occurred. Please try again later.');
                }
            }
        };

</script>