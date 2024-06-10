<template>
    <div class="relative max-w-lg border p-32 border-gray-300 shadow-xl rounded-lg bg-transparent h-[50vh]">
        <p @click="handleUsersList()" class="bg-white text-red-500 absolute top-1 right-3 cursor-pointer">X</p>
        <ul v-for="(user, index) in users" :key="index" class=" flex-wrap [&>li]:text-center rounded-lg bg-blue-500 border border-gray-400 shadow-lg max-w-lg overflow-hidden text-lg">
            <li class="relative rounded-t-lg hover:bg-blue-700 hover:shadow-2xl text-gray-300 cursor-pointer ">
                {{ user.username }}
                <p @click="removeUser(user.id)" class="text-red-500 absolute top-1 right-3 cursor-pointer hover:bg-red-700">X</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    users:{
        type: Array,
        required: true
    },

    handleUsersList:{
        type: Function,
        required: true
    },
    removeUser: {
        type: Function,
        required: true
    }
});
</script>