<template>
    <div class="max-w-lg border p-32 border-gray-300 shadow-xl rounded-lg bg-transparent h-[50vh]">
                <ul class=" flex-wrap [&>li]:text-center rounded-lg bg-blue-500 border border-gray-400 shadow-lg max-w-lg overflow-hidden text-lg">
                    <li class="rounded-t-lg hover:bg-blue-700 hover:shadow-2xl text-gray-300 cursor-pointer ">
                       <RouterLink to="/register">
                           Onboard New Customers
                       </RouterLink>
                    </li>
                    <li @click="getUserList()" class="hover:bg-blue-700 hover:shadow-2xl text-gray-300 cursor-pointer ">
                        Check Customers List
                    </li>
                  
                </ul>
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