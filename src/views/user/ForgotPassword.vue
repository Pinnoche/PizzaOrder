<template>
    <form class="mt-8 shadow-md bg-white rounded-lg overflow-hidden max-w-sm sm:max-w-md md:max-w-lg mx-auto" @submit.prevent="forgotPassword">
        <div class="bg-gray-800 text-white py-3 px-6">
            <h2 class="text-semibold ">Forgot Password</h2>
        </div>
        <div class="px-6 py-3">
            <div class="mb-4">
                <div v-if="data.success.value" class="success">
                    <span> {{ data.success.value }}</span>
                </div>
                <label for="email" class="text-gray-700 font-semibold block mb-4">Email:</label>
                <input v-model="data.form.email" type="email" id="email" class="w-full rounded-md px-3 py-2 border">
                <span v-if="data.errors.value.email" class="text-red-500"> {{ data.errors.value.email[0] }}</span>
                
            </div>
            <button type="submit" class="submitBtn">Submit</button>
        </div>

        

    </form>
</template>

<script setup>
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ref } from 'vue';

const cookies = new Cookies();


const data = {
    csrfToken : cookies.get('XSRF-TOKEN'),
    form: {
        email: '',
    },
    errors: ref([]),
    success: ref(null),
}

const forgotPassword = async() => {
    data.errors.value = [];
    data.success.value = null;
    try {
        const res = await axios.post('/forgot-password', data.form, {
            headers: {
                'X-XSRF-TOKEN': data.csrfToken
            }
        });

        data.success.value = res.data.status;
    } catch (error) {
        if(error.response.status === 422){
            data.errors.value = error.response.data.errors
        }
    }
}
</script>