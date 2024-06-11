<template>
    <div class="container mx-auto p-6">
        <div class="max-w-lg border p-8 border-gray-300 shadow-xl rounded-lg bg-white h-64">
            <ul class="flex flex-col space-y-32">
                <li class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer text-center transition duration-300">
                    <RouterLink to="/register">
                        Onboard New Customer
                    </RouterLink>
                </li>
                <li @click="getUserList()" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer text-center transition duration-300">
                    Check Customers List
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    getUserList:{
        type: Function,
        required: true
    }
});
</script>