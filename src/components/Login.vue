<template>
    <form class="mt-8 shadow-md bg-white rounded-lg overflow-hidden max-w-sm sm:max-w-md md:max-w-lg mx-auto" @submit.prevent="authStore.login()">
    <div class="bg-gray-800 text-white py-3 px-6">
        <h2 class="text-2xl font-semibold">Login</h2>
    </div>
    <div class="p-6">
        <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
            <input v-model="authStore.data.email" type="email" id="email" class="w-full px-3 py-2 border rounded-md" required>
        </div>

        <div class="mb-6">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
            <input v-model="authStore.data.password" type="password" id="password" class="w-full px-3 py-2 border rounded-md" required>
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

const authStore = useAuthStore();

    // const data = {
    //         // csrfToken: cookies.get('XSRF-TOKEN'),
    //             form: {
    //                 email: '',
    //                 password: ''
    //             },
    //         };

        
    
    
        // const login = async () => {
        //     try {
        //         // console.log(data.csrfToken);
                
        //          await axios.post('/login', data.form, {
        //             headers: {
        //                 'X-XSRF-TOKEN': data.csrfToken
        //             }
        //         });

        //         authStore.getUser();
                
            
        //         // authStore.authUser = response.data;

        //         // console.log(authStore.authUser);
                
        //         // Alert and navigate only after successfully updating authUser
        //         alert('Login Successful');
        //         router.push('/');
        //     } catch (error) {
        //         if (error.response) {
        //             // Server responded with an error status code
        //             console.error('Server Error:', error.response.data);
        //             alert('Incorrect Username or Password');
        //         } else if (error.request) {
        //             // The request was made but no response was received
        //             console.error('Network Error:', error.request);
        //             alert('Network Error: Please check your internet connection');
        //         } else {
        //             // Something else happened while setting up the request
        //             console.error('Request Error:', error.message);
        //             alert('An unexpected error occurred. Please try again later.');
        //         }
        //     }
        // };

</script>