<template>
    <form class="form" @submit.prevent="resetPassword">
        <div class="bg-gray-800 text-white py-3 px-6">Reset Password</div>
        <div class="p-6">
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-bold mb-2">New Password:</label>
                <input v-model="data.form.value.password" type="password" id="password" class=" w-full border rounded-md px-3 py-2 ">
                <span v-if="data.errors.value.password" class="text-red-500"> {{ data.errors.value.password[0] }}</span>
            </div>

            <div class="mb-4">
                <label for="Confirm_password" class="block text-gray-700 font-bold mb-2">Confirm Password:</label>
                <input v-model="data.form.value.confirm_password" type="password" id="c_password" class=" w-full border rounded-md px-3 py-2 ">
                <span v-if="data.errors.value.confirm_password" class="text-red-500"> {{ data.errors.value.confirm_password[0] }}</span>
            </div>

            <div class="flex justify-center items-center">
            <button type="submit" class="submitBtn">
                Reset Password
            </button>
        </div>
        </div>
    </form>
</template>

<script setup>
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const cookies = new Cookies();
const route = useRoute();
const router = useRouter();

const data = {
    csrfToken: cookies.get('XSRF-TOKEN'),
    form: ref({
        email: route.query.email,
        password: '',
        confirm_password: '',
        token: route.params.token
    }),
    errors: ref([])
};


const resetPassword = async () => {
    data.errors.value = [];  
    try {
        await axios.post('/reset-password', data.form.value, {
            headers: {
                'X-XSRF-TOKEN': data.csrfToken
            }
        });   
        router.push('/login');
    } catch (error) {
        if (error.response.status === 422) {
                    data.errors.value = error.response.data.errors;
                }
    }

   
}
</script>